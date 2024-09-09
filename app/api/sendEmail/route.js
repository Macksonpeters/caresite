import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email, number, firstName, lastName, message } =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "joycecarehome14@gmail.com",
        pass: process.env.EMAIL_PASSWORD, // Ensure this is correctly set
      },
      secure: true, // Use SSL
      port: 465, // Port for SSL
    });

    const mailOption = {
      from: "no-reply@joycecarehome.com",
      to: "capitalintensive5@gmail.com",
      subject: "Joyce Home  Care Website Contact Form - " + firstName,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f4f7f6;
      margin: 0;
      padding: 0;
      color: #555;
    }
    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #e3fafa;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(90deg, #75C7C3, #68A0F3);
      color: white;
      padding: 20px;
      text-align: center;
    }
    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      padding: 30px;
      font-size: 16px;
      line-height: 1.6;
      color: #555;
    }
    .content p {
      margin: 0 0 15px;
    }
    .label {
      font-weight: bold;
      color: #333;
    }
    .message {
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 6px;
      font-size: 15px;
    }
    .button-container {
      text-align: center;
      margin: 30px 0;
    }
    .button {
      background-color: #68A0F3;
      color: white;
      padding: 12px 30px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;
    }
    .button:hover {
      background-color: #4b85d4;
    }
    .footer {
      background-color: #B4E2E3;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Contact Information</h1>
    </div>

    <div class="content">
      <p class="label">First Name: ${firstName}</p>
      <p class="label">Last Name: ${lastName}</p>
      <p class="label">Email: ${email}</p>
      <p class="label">Phone Number: ${number}</p>
      <p class="label">Message:</p>
      <p class="message">${message}</p>
    </div>

  

    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Joyce Care Home. All rights reserved.</p>
    </div>
  </div>
</body>
</html>

`,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error.message); // Log the actual error message
    return NextResponse.json(
      { message: `Failed to Send Email: ${error.message}` },
      { status: 500 }
    );
  }
}
