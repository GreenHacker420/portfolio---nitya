# Portfolio Website

A modern portfolio website built with React, featuring a contact form that sends emails through Gmail SMTP.

## Features

- Modern, responsive design
- Dark/Light mode support
- Contact form with Gmail SMTP integration
- Serverless deployment on Netlify
- Rate limiting for form submissions
- Input validation and error handling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gmail account with 2-Step Verification enabled
- Netlify account (for deployment)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the following variables:
     ```
     EMAIL_USER=your-gmail@gmail.com
     EMAIL_PASS=your-16-character-app-password
     ```

### Gmail SMTP Setup

1. **Enable 2-Step Verification**:
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification if not already enabled

2. **Generate App Password**:
   - Go to your Google Account settings
   - Navigate to Security
   - Go to App Passwords
   - Select "Mail" and your device
   - Copy the 16-character password generated

3. **SMTP Settings**:
   - Server: smtp.gmail.com
   - Port: 587
   - Encryption: STARTTLS
   - Authentication: Required

## Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## Deployment

### Netlify Deployment

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your 16-character App Password

### Netlify Functions

The contact form functionality is handled by a Netlify Function located in `netlify/functions/contact.js`. This function:
- Handles form submissions
- Validates input
- Implements rate limiting
- Sends emails via Gmail SMTP
- Sends thank you emails to users

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Email Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password

# SMTP Settings (Gmail)
# Server: smtp.gmail.com
# Port: 587
# Encryption: STARTTLS
```

## Security Features

- Rate limiting: 5 requests per 15 minutes per IP
- Input validation for all form fields
- Email format validation
- Message length validation (minimum 10 characters)
- Secure SMTP connection with STARTTLS

## Troubleshooting

### Common Gmail SMTP Issues

1. **Authentication Failed**:
   - Ensure 2-Step Verification is enabled
   - Verify your App Password is correct
   - Check if your Gmail account has "Less secure app access" enabled

2. **Connection Issues**:
   - Verify your internet connection
   - Check if port 587 is not blocked by your firewall
   - Ensure you're using the correct SMTP settings

3. **Rate Limiting**:
   - The form is limited to 5 submissions per 15 minutes per IP
   - Wait for the rate limit window to reset

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 