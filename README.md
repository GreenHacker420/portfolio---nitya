# Portfolio Website

A modern portfolio website built with React, featuring a contact form that sends emails through Microsoft Exchange/Office 365.

## Features

- Modern, responsive design
- Dark/Light mode support
- Contact form with email integration
- Serverless deployment on Netlify
- Microsoft Exchange/Office 365 email integration

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Microsoft Exchange/Office 365 account
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
     EMAIL_USER=your-email@yourdomain.com
     EMAIL_PASS=your-password-or-app-password
     ```

### Microsoft Exchange/Office 365 Setup

1. **Email Credentials**:
   - Use your Exchange/Office 365 email address
   - For the password:
     - If you don't have 2FA enabled: Use your regular password
     - If you have 2FA enabled: Create an app password
       - Go to account.microsoft.com/security
       - Select "Security" > "Advanced security options" > "App passwords"
       - Create a new app password for "Mail"

2. **Exchange Online Specific Settings**:
   - If you're using Exchange Online, you might need to:
     - Use your regular password instead of an app password
     - Enable "Less secure app access" in your Microsoft account
     - Or create an app password specifically for this application

3. **Troubleshooting Exchange/Office 365**:
   - If emails aren't sending, check:
     - Your Exchange/Office 365 account settings
     - Any security policies in your organization
     - Whether your account has SMTP sending permissions
   - Common Exchange-specific issues:
     - TLS/SSL certificate validation
     - Organization security policies
     - SMTP sending restrictions

## Development

1. Start the development server:
```bash
npm run dev
```

2. Start the backend server:
```bash
npm run server
```

The website will be available at `http://localhost:5173`

## Deployment

### Frontend Deployment (Netlify)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify:
   - `EMAIL_USER`
   - `EMAIL_PASS`

### Backend Deployment (Netlify Functions)

The backend is deployed as Netlify Functions. No additional configuration is needed beyond setting the environment variables in your Netlify dashboard.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password-or-app-password

# Server Configuration
PORT=3000
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 