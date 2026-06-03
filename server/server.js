/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const {
      appType,
      name,
      company,
      email,
      companySize,
      hearAbout,
      message,
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required",
      });
    }

    const receiverEmail = process.env.RECEIVER_EMAIL || process.env.EMAIL_USER;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !receiverEmail) {
      return res.status(500).json({
        success: false,
        message: "Email server is not configured",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: receiverEmail,
      subject: `New ${appType} Enquiry`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Product:</strong> ${appType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Size:</strong> ${companySize}</p>
        <p><strong>How Did You Hear About Us:</strong> ${hearAbout}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Mail Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
