export function getVerificationEmailTemplate(verificationCode: string): string {
  const imagePath = 'https://i.imgur.com/Gswkcw9.png';
  return `
     <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0; /* Ensure no default margins */
        padding: 0; /* Ensure no default padding */
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background-image: url('${imagePath}');
        background-size: cover; /* Adjust based on your image dimensions */
        background-position: center;
        background-color: #29a1af;
        padding: 20px;
        text-align: center;
        color: white;
        margin-bottom: 20px; /* Add space between header and content */
      }
      .content {
        padding: 20px;
        background-color: #ffffff; /* Set a background color for content */
      }
      .verification-code {
        font-size: 24px;
        padding: 1rem;
        background-color: #f4f4f5;
        font-weight: bold;
        color: #29a1af;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Email Verification</h1>
      </div>
      <div class="content">
        <p>Hello,</p>
        <p>
          Thank you for registering. To complete your registration, please use
          the following verification code:
        </p>
        <div class="code-container">
          <p class="verification-code">${verificationCode}</p>
        </div>
        <p>
          If you didn't request this verification, please ignore this email.
        </p>
        <p>Best regards,<br />Afrisight B. V.</p>
      </div>
    </div>
  </body>
</html>

    `;
}
