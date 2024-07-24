export function getVerificationEmailTemplate(verificationCode: string): string {
  return `
     <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background-color: #29a1af;
        padding: 20px;
        text-align: center;
        color: white;
      }
      .content {
        padding: 20px;
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
