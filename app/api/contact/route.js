import { config } from "dotenv";
import nodemailer from "nodemailer";
import path from "path";

config({ path: path.join(process.cwd(), "server", ".env"), quiet: true });

export const runtime = "nodejs";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getMailConfig() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.RECEIVER_EMAIL || user;

  if (!user || !pass || !to) {
    throw new Error(
      "Missing EMAIL_USER, EMAIL_PASS, or RECEIVER_EMAIL environment variable"
    );
  }

  return { user, pass, to };
}

export async function POST(request) {
  try {
    const {
      appType = "App",
      name,
      company = "",
      email,
      companySize = "",
      hearAbout = "",
      message = "",
    } = await request.json();

    if (!name || !email) {
      return Response.json(
        {
          success: false,
          message: "Name and Email are required",
        },
        { status: 400 }
      );
    }

    const { user, pass, to } = getMailConfig();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: user,
      replyTo: email,
      to,
      subject: `New ${appType} Enquiry`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Product:</strong> ${escapeHtml(appType)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company Size:</strong> ${escapeHtml(companySize)}</p>
        <p><strong>How Did You Hear About Us:</strong> ${escapeHtml(hearAbout)}</p>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Mail Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send message",
      },
      { status: 500 }
    );
  }
}
