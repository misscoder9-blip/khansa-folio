import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, service, budget, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Khansafolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#070707">New message from Khansafolio</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#5f6266;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#5f6266">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#5f6266">Service</td><td style="padding:8px 0">${service || "Not specified"}</td></tr>
          <tr><td style="padding:8px 0;color:#5f6266">Budget</td><td style="padding:8px 0">${budget || "Not specified"}</td></tr>
        </table>
        <hr style="border:none;border-top:1px dashed #cfd1d4;margin:16px 0"/>
        <p style="color:#5f6266;margin:0 0 8px">Message</p>
        <p style="color:#070707;white-space:pre-wrap">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
