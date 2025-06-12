/**
 * Professional email templates for Nitya's Portfolio contact form
 * Using table-based layouts for maximum email client compatibility
 */

/**
 * Get email template for contact notification (sent to you)
 * @param {string} name - Sender's name
 * @param {string} email - Sender's email
 * @param {string} message - Message content
 * @returns {string} HTML email template
 */
export function getContactNotificationTemplate(name, email, message) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>New Contact Form Message</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        /* Reset styles */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        
        /* Base styles */
        body {
            margin: 0 !important;
            padding: 0 !important;
            background-color: #f8fafc;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        /* Container */
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        
        /* Header */
        .header {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            padding: 40px 20px;
            text-align: center;
        }
        
        .header h1 {
            color: #ffffff;
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 28px;
            font-weight: 700;
            margin: 0;
            line-height: 1.2;
        }
        
        .header p {
            color: #e2e8f0;
            font-size: 16px;
            margin: 8px 0 0 0;
            line-height: 1.4;
        }
        
        /* Content */
        .content {
            padding: 40px 30px;
        }
        
        .alert-box {
            background-color: #dbeafe;
            border-left: 4px solid #3b82f6;
            padding: 20px;
            margin-bottom: 30px;
            border-radius: 0 8px 8px 0;
        }
        
        .alert-text {
            color: #1e40af;
            font-size: 18px;
            font-weight: 600;
            margin: 0;
            line-height: 1.4;
        }
        
        .info-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        .info-row td {
            padding: 12px 0;
            border-bottom: 1px solid #e2e8f0;
            vertical-align: top;
        }
        
        .info-label {
            font-weight: 600;
            color: #374151;
            width: 100px;
            font-size: 14px;
        }
        
        .info-value {
            color: #1f2937;
            font-size: 14px;
            line-height: 1.5;
        }
        
        .message-content {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            white-space: pre-wrap;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #374151;
        }
        
        /* Footer */
        .footer {
            background-color: #1f2937;
            padding: 30px 20px;
            text-align: center;
        }
        
        .footer p {
            color: #9ca3af;
            font-size: 12px;
            margin: 0;
            line-height: 1.4;
        }
        
        /* Responsive */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
            }
            .content {
                padding: 30px 20px !important;
            }
            .header {
                padding: 30px 20px !important;
            }
            .header h1 {
                font-size: 24px !important;
            }
            .info-table {
                font-size: 13px !important;
            }
        }
    </style>
</head>
<body>
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
            <td style="padding: 20px 0;">
                <div class="email-container">
                    <!-- Header -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td class="header">
                                <h1>New Contact Message</h1>
                                <p>Someone reached out through your portfolio</p>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- Content -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td class="content">
                                <div class="alert-box">
                                    <p class="alert-text">📧 You have a new message from your portfolio contact form!</p>
                                </div>
                                
                                <table class="info-table" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                    <tr class="info-row">
                                        <td class="info-label">From:</td>
                                        <td class="info-value"><strong>${name}</strong></td>
                                    </tr>
                                    <tr class="info-row">
                                        <td class="info-label">Email:</td>
                                        <td class="info-value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
                                    </tr>
                                    <tr class="info-row">
                                        <td class="info-label">Received:</td>
                                        <td class="info-value">${new Date().toLocaleString('en-US', { 
                                          weekday: 'long', 
                                          year: 'numeric', 
                                          month: 'long', 
                                          day: 'numeric',
                                          hour: '2-digit',
                                          minute: '2-digit',
                                          timeZoneName: 'short'
                                        })}</td>
                                    </tr>
                                </table>
                                
                                <h3 style="color: #374151; font-size: 16px; margin: 30px 0 15px 0;">Message:</h3>
                                <div class="message-content">${message}</div>
                                
                                <p style="color: #6b7280; font-size: 14px; margin-top: 30px; line-height: 1.5;">
                                    💡 <strong>Quick tip:</strong> You can reply directly to this email to respond to ${name}.
                                </p>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- Footer -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td class="footer">
                                <p>This email was sent from your portfolio contact form at curiouscoder.live</p>
                                <p style="margin-top: 8px;">© ${new Date().getFullYear()} Nitya Jain. All rights reserved.</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

/**
 * Get thank you email template (sent to the user)
 * @param {string} name - User's name
 * @param {string} message - User's original message
 * @returns {string} HTML email template
 */
export function getThankYouTemplate(name, message) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Thank You for Contacting Me!</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        /* Reset styles */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        
        /* Base styles */
        body {
            margin: 0 !important;
            padding: 0 !important;
            background-color: #f8fafc;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        /* Container */
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        
        /* Header */
        .header {
            background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
            padding: 40px 20px;
            text-align: center;
        }
        
        .header h1 {
            color: #ffffff;
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 28px;
            font-weight: 700;
            margin: 0;
            line-height: 1.2;
        }
        
        .header p {
            color: #fce7f3;
            font-size: 16px;
            margin: 8px 0 0 0;
            line-height: 1.4;
        }
        
        /* Content */
        .content {
            padding: 40px 30px;
        }
        
        .welcome-box {
            background: linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%);
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .welcome-text {
            color: #1e40af;
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 10px 0;
            line-height: 1.3;
        }
        
        .welcome-subtext {
            color: #6366f1;
            font-size: 16px;
            margin: 0;
            line-height: 1.4;
        }
        
        .response-info {
            background-color: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
        }
        
        .response-info h3 {
            color: #166534;
            font-size: 16px;
            margin: 0 0 10px 0;
            font-weight: 600;
        }
        
        .response-info p {
            color: #15803d;
            font-size: 14px;
            margin: 0;
            line-height: 1.5;
        }
        
        .message-summary {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
        }
        
        .message-summary h3 {
            color: #374151;
            font-size: 16px;
            margin: 0 0 15px 0;
            font-weight: 600;
        }
        
        .message-text {
            color: #6b7280;
            font-size: 14px;
            line-height: 1.6;
            white-space: pre-wrap;
            font-family: 'Poppins', sans-serif;
        }
        
        .contact-info {
            background-color: #fefce8;
            border: 1px solid #fde047;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
        }
        
        .contact-info h3 {
            color: #a16207;
            font-size: 16px;
            margin: 0 0 15px 0;
            font-weight: 600;
        }
        
        .contact-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .contact-links li {
            margin: 8px 0;
            font-size: 14px;
        }
        
        .contact-links a {
            color: #d97706;
            text-decoration: none;
            font-weight: 500;
        }
        
        .contact-links a:hover {
            text-decoration: underline;
        }
        
        /* Footer */
        .footer {
            background-color: #1f2937;
            padding: 30px 20px;
            text-align: center;
        }
        
        .footer p {
            color: #9ca3af;
            font-size: 12px;
            margin: 0;
            line-height: 1.4;
        }
        
        .footer a {
            color: #60a5fa;
            text-decoration: none;
        }
        
        /* Responsive */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
            }
            .content {
                padding: 30px 20px !important;
            }
            .header {
                padding: 30px 20px !important;
            }
            .header h1 {
                font-size: 24px !important;
            }
            .welcome-box {
                padding: 20px !important;
            }
            .welcome-text {
                font-size: 18px !important;
            }
        }
    </style>
</head>
<body>
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
            <td style="padding: 20px 0;">
                <div class="email-container">
                    <!-- Header -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td class="header">
                                <h1>Thank You, ${name}! 🎉</h1>
                                <p>Your message has been received successfully</p>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- Content -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td class="content">
                                <div class="welcome-box">
                                    <p class="welcome-text">Hi ${name}!</p>
                                    <p class="welcome-subtext">Thank you for reaching out through my portfolio. I appreciate you taking the time to connect with me!</p>
                                </div>
                                
                                <div class="response-info">
                                    <h3>⏰ What happens next?</h3>
                                    <p>I typically respond to messages within <strong>24-48 hours</strong>. I'll review your message carefully and get back to you as soon as possible with a thoughtful response.</p>
                                </div>
                                
                                <div class="message-summary">
                                    <h3>📝 Your Message Summary</h3>
                                    <div class="message-text">${message}</div>
                                </div>
                                
                                <div class="contact-info">
                                    <h3>🔗 Connect with me</h3>
                                    <ul class="contact-links">
                                        <li>📧 Email: <a href="mailto:nitya@curiouscoder.live">nitya@curiouscoder.live</a></li>
                                        <li>🌐 Portfolio: <a href="https://curiouscoder.live">curiouscoder.live</a></li>
                                        <li>📝 Blog: <a href="https://blog.curiouscoder.live">blog.curiouscoder.live</a></li>
                                    </ul>
                                </div>
                                
                                <p style="color: #6b7280; font-size: 14px; margin-top: 30px; line-height: 1.5; text-align: center;">
                                    Looking forward to our conversation! 🚀
                                </p>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- Footer -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td class="footer">
                                <p>This is an automated confirmation email from <a href="https://curiouscoder.live">Nitya's Portfolio</a></p>
                                <p style="margin-top: 8px;">© ${new Date().getFullYear()} Nitya Jain. All rights reserved.</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>`;
}
