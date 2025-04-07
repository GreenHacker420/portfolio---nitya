// Netlify serverless function for contact form
const nodemailer = require('nodemailer');

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

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

// Rate limiting implementation
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  store: new Map(),
  
  // Check if the request should be rate limited
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

// Handler for the serverless function
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }
  
  // Get client IP for rate limiting
  const clientIP = event.headers['client-ip'] || 
                  event.headers['x-forwarded-for'] || 
                  'unknown';
  
  // Check rate limit
  if (rateLimit.isRateLimited(clientIP)) {
    return {
      statusCode: 429,
      body: JSON.stringify({ 
        error: 'Too many requests',
        message: 'Too many requests, please try again later.'
      })
    };
  }
  
  try {
    // Parse the request body
    const { name, email, message } = JSON.parse(event.body);
    
    // Validate input
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Missing required fields',
          message: 'Please provide name, email, and message'
        })
      };
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Invalid email format',
          message: 'Please provide a valid email address'
        })
      };
    }
    
    // Validate message length
    if (message.length < 10) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Message too short',
          message: 'Please provide a message with at least 10 characters'
        })
      };
    }
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Allow direct reply to the sender
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Log successful submission
    console.log(`Contact form submission received from ${name} (${email})`);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Email sent successfully' 
      })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    if (error.code === 'EAUTH') {
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: 'Authentication failed',
          message: 'Email service authentication failed. Please check your credentials.'
        })
      };
    }
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send email',
        message: 'An error occurred while sending your message. Please try again later.'
      })
    };
  }
}; 