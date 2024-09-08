import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email, number, firstName, lastName, message } =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "webbroconsults@gmail.com",
        pass: process.env.EMAIL_PASSWORD, // Ensure this is correctly set
      },
      secure: true, // Use SSL
      port: 465, // Port for SSL
    });

    const mailOption = {
      from: "no-reply@webbroconsults.com",
      to: email,
      subject: firstName + "- Joyce Home Website Contact Form",
      html: `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      color: #333;
      margin: 0;
      padding: 20px;
    }
    .email-container {
      background-color: #fff;
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #ddd;
      border-radius: 10px;
    }
    h1 {
      color: #675b30;
      font-size: 24px;
      text-align: center;
    }
    .header {
      background-color: #ac523e;
      color: #fff;
      padding: 10px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .content {
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 0 0 8px 8px;
    }
    .content p {
      color: #887d52;
      font-size: 16px;
    }
    .label {
      color: #675b30;
      font-weight: bold;
    }
    .footer {
      margin-top: 20px;
      text-align: center;
      font-size: 12px;
      color: #887d52;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #ac523e;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 20px;
    }
    .button:hover {
      background-color: #675b30;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Contact Information</h1>
    </div>
    
    <div class="content">
      <p><span class="label">First Name:</span> ${firstName}</p>
      <p><span class="label">Last Name:</span> ${lastName}</p>
      <p><span class="label">Email:</span> ${email}</p>
      <p><span class="label">Phone Number:</span> ${number}</p>
      <p><span class="label">Message:</span></p>
      <p>${message}</p>

    </div>

    <div class="footer">
      <p> Copyright © ${new Date().getFullYear()} Joyce Care Home . All rights reserved.</p>
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
