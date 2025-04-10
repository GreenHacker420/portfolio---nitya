// Netlify serverless function for contact form
const nodemailer = require('nodemailer');

// Detailed environment variable logging
console.log('=== Environment Variables Check ===');
console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✅ Loaded' : '❌ Not loaded');
if (process.env.EMAIL_USER) {
  console.log('EMAIL_USER value:', process.env.EMAIL_USER);
}
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Loaded' : '❌ Not loaded');
if (process.env.EMAIL_PASS) {
  console.log('EMAIL_PASS value:', '********' + process.env.EMAIL_PASS.slice(-4));
}
console.log('================================');

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // false for STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('SMTP Configuration Error:', error);
    console.error('SMTP Auth Details:', {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS ? 'Set' : 'Not Set'
    });
  } else {
    console.log('SMTP Server is ready to send messages');
  }
});

// Rate limiting implementation
const rateLimit = {
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  store: new Map(),
  
  isRateLimited: function(ip) {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Clean up old entries
    for (const [key, value] of this.store.entries()) {
      if (value.timestamp < windowStart) {
        this.store.delete(key);
      }
    }
    
    // Get or create rate limit info for this IP
    let rateLimitInfo = this.store.get(ip);
    if (!rateLimitInfo) {
      rateLimitInfo = { count: 0, timestamp: now };
      this.store.set(ip, rateLimitInfo);
    }
    
    // Check if the window has expired
    if (rateLimitInfo.timestamp < windowStart) {
      rateLimitInfo.count = 0;
      rateLimitInfo.timestamp = now;
    }
    
    // Increment the count
    rateLimitInfo.count++;
    
    // Check if the rate limit has been exceeded
    return rateLimitInfo.count > this.max;
  }
};

exports.handler = async function(event, context) {
  console.log('Function started');
  console.log('Environment variables:', {
    EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not Set',
    EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not Set'
  });

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    console.log('Method not allowed:', event.httpMethod);
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Get client IP for rate limiting
  const clientIP = event.headers['client-ip'] || 
                  event.headers['x-forwarded-for'] || 
                  'unknown';
  
  console.log('Client IP:', clientIP);
  
  // Check rate limit
  if (rateLimit.isRateLimited(clientIP)) {
    console.log('Rate limit exceeded for IP:', clientIP);
    return {
      statusCode: 429,
      body: JSON.stringify({ 
        error: 'Too many requests',
        message: 'Please wait a few minutes before trying again.'
      })
    };
  }

  try {
    console.log('Request body:', event.body);
    const { name, email, message } = JSON.parse(event.body);
    
    // Validate input
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }
    
    // Validate message length
    if (message.length < 10) {
      console.log('Message too short');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message must be at least 10 characters long' })
      };
    }

    console.log('Sending emails...');
    
    // Send email to nitya@curiouscoder.live
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'nitya@curiouscoder.live',
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      replyTo: email
    };

    // Send thank you email to the person who submitted the form
    const thankYouMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me',
      text: `
Dear ${name},

Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.

Best regards,
Nitya
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #4f46e5;">Thank you for contacting me</h2>
  <p>Dear ${name},</p>
  <p>Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
  <p>Best regards,<br>Nitya</p>
</div>
      `
    };

    // Log email options (excluding sensitive data)
    console.log('Sending admin email to: nitya@curiouscoder.live');
    console.log('Sending thank you email to:', email);

    // Send both emails
    const [adminInfo, thankYouInfo] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(thankYouMailOptions)
    ]);
    
    console.log('Admin email sent:', adminInfo.messageId);
    console.log('Thank you email sent:', thankYouInfo.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      name: error.name
    });

    // Check for specific error types
    if (error.code === 'EAUTH') {
      console.error('Authentication Error: Check your Gmail credentials');
    } else if (error.code === 'ECONNECTION') {
      console.error('Connection Error: Check your internet connection or SMTP settings');
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error.message : 'An error occurred while sending the email'
      })
    };
  }
};