import nodemailer from 'nodemailer';
import { getContactNotificationTemplate, getThankYouTemplate } from './mailTemplates.js';

// Configure Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Rate limiting setup
const rateLimit = {
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 10,
  store: new Map(),

  isRateLimited(ip) {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    // Clean up old entries
    for (const [key, value] of this.store.entries()) {
      if (value.timestamp < windowStart) {
        this.store.delete(key);
      }
    }

    let info = this.store.get(ip);
    if (!info) {
      info = { count: 0, timestamp: now };
      this.store.set(ip, info);
    }

    if (info.timestamp < windowStart) {
      info.count = 0;
      info.timestamp = now;
    }

    info.count++;
    return info.count > this.max;
  }
};

// CORS headers
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

export const handler = async function (event) {
  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const clientIP = event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'unknown';
  if (rateLimit.isRateLimited(clientIP)) {
    return {
      statusCode: 429,
      headers,
      body: JSON.stringify({ error: 'Too many requests', message: 'Please try again later.' })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }

    if (message.length < 10) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message must be at least 10 characters long' })
      };
    }

    // Send message to you
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'nitya@curiouscoder.live',
      subject: `New Contact Form Message from ${name}`,
      html: getContactNotificationTemplate(name, email, message),
      replyTo: email
    };

    await transporter.sendMail(mailOptions);

    // Send thank-you email to user
    const thankYouMail = {
      from: `"Nitya's Portfolio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Contacting Me! 🎉',
      html: getThankYouTemplate(name, message)
    };

    await transporter.sendMail(thankYouMail);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Message sent successfully!' })
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to send message. Please try again.' })
    };
  }
};
