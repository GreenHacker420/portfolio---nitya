import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();

// Configure CORS to allow requests from the frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Create a rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
});

// Apply rate limiting to the contact endpoint
app.use('/api/contact', limiter);

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

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body);

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Missing required fields',
      message: 'Please provide name, email, and message'
    });
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return res.status(400).json({
      error: 'Invalid email format',
      message: 'Please provide a valid email address'
    });
  }

  // Validate message length
  if (message.length < 10) {
    return res.status(400).json({
      error: 'Message too short',
      message: 'Please provide a message with at least 10 characters'
    });
  }

  try {
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: `nitya@curiouscoder.live`, 
      replyTo: email, // Allow direct reply to the sender
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log successful submission
    // console.log(`Contact form submission received from ${name} (${email})`);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Error sending email:', error);

    // Provide more specific error messages
    if (error.code === 'EAUTH') {
      return res.status(500).json({
        error: 'Authentication failed',
        message: 'Email service authentication failed. Please check your credentials.'
      });
    }

    res.status(500).json({
      error: 'Failed to send email',
      message: 'An error occurred while sending your message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoints:`);
  console.log(`- POST /api/contact - Submit contact form`);
  console.log(`- GET /api/health - Health check`);
}); 