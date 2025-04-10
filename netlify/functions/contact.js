// Netlify serverless function for contact form
const nodemailer = require('nodemailer');

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
exports.handler = async function(event, context) {
  // Log the incoming request
  console.log('Received request:', event.body);

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
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }
    
    // Validate message length
    if (message.length < 10) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message must be at least 10 characters long' })
      };
    }
    
    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: `nitya@curiouscoder.live`, // Send to yourself
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      replyTo: email // Set reply-to header to sender's email
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
        Nitya Jain
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
    // console.log('Sending admin email to:', process.env.EMAIL_USER);
    // console.log('Sending thank you email to:', email);

    // Send both emails
    const adminInfo = await transporter.sendMail(adminMailOptions);
    const thankYouInfo = await transporter.sendMail(thankYouMailOptions);
    
    // console.log('Admin email sent successfully:', adminInfo.messageId);
    // console.log('Thank you email sent successfully:', thankYouInfo.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    // Log the error
    console.error('Error sending email:', error);

    // Return appropriate error response
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    };
  }
}; 