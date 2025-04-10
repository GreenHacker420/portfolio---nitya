const nodemailer = require('nodemailer');

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

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const clientIP = event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'unknown';
  if (rateLimit.isRateLimited(clientIP)) {
    return {
      statusCode: 429,
      body: JSON.stringify({ error: 'Too many requests', message: 'Please try again later.' })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }

    if (message.length < 10) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message must be at least 10 characters long' })
      };
    }

    // Send message to you
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'nitya@curiouscoder.live',
      subject: `New Contact Form Message from ${name}`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #4f46e5;">New Contact Form Message</h2>
  <p><strong>From:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Message:</strong></p>
  <p style="white-space: pre-wrap;">${message}</p>
</div>
      `,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);

    // Send thank-you email to user
    const thankYouMail = {
      from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Contacting Me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4f46e5;">Thank You, ${name}!</h2>
          <p>I've received your message and will get back to you shortly.</p>
          <hr>
          <h4>Your Submission:</h4>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr>
          <p style="font-size: 0.9em; color: #888;">This is an automated confirmation message. You don't need to reply.</p>
        </div>
      `
    };

    await transporter.sendMail(thankYouMail);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message. Please try again.' })
    };
  }
};
