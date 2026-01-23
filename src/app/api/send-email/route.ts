import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import path from "path";
import fs from "fs/promises";

import { connectDB } from "@/lib/mongodb";
import EmailLog from "@/models/EmailLog";
import OAuthToken from "@/models/OAuthToken";

export async function POST(req: Request) {
  await connectDB();

  const formData = await req.formData();

  const emails: string[] = JSON.parse(formData.get("emails") as string);
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const file = formData.get("file") as File | null;
  const customFileName = formData.get("fileName") as string | null;

  // 🔐 OAuth token
  const token = await OAuthToken.findOne();
  if (!token) {
    return NextResponse.json(
      { error: "Gmail not authorized" },
      { status: 401 }
    );
  }

  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    `${BASE_URL}/api/oauth/callback`
  );

  oauth2Client.setCredentials({
    refresh_token: token.refreshToken,
  });

  const accessTokenResponse = await oauth2Client.getAccessToken();
  const accessToken = accessTokenResponse?.token;

  if (!accessToken) {
    return NextResponse.json(
      { error: "Failed to obtain access token" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: token.refreshToken,
      accessToken,
    },
  });

  // 📎 Attachment
  let attachmentPath: string;
  let attachmentName: string;
  let isTempFile = false; // 👈 TRACK TEMP FILE

  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    attachmentName = customFileName || file.name;

    const tmpDir = path.join(process.cwd(), "tmp");
    await fs.mkdir(tmpDir, { recursive: true });

    attachmentPath = path.join(tmpDir, attachmentName);
    await fs.writeFile(attachmentPath, buffer);

    isTempFile = true; // 👈 mark for cleanup
  } else {
    attachmentName = "Sambhav_Java_FS_Resume.pdf";
    attachmentPath = path.join(
      process.cwd(),
      "src",
      "assets",
      "resumes",
      "Sambhav_Java_FS_Resume.pdf"
    );

    await fs.access(attachmentPath);
  }

  // 🚀 Batch sending
  const BATCH_SIZE = 3;
  let sent = 0;
  let failed = 0;

  for (let i = 0; i < emails.length; i += BATCH_SIZE) {
    const batch = emails.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map(async (to) => {
        try {
          await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to,
            subject,
            text: message,
            attachments: [
              {
                filename: attachmentName,
                path: attachmentPath,
              },
            ],
          });

          sent++;
          await EmailLog.create({
            to,
            subject,
            message,
            attachmentName,
            status: "SENT",
          });
        } catch (error: any) {
          failed++;
          await EmailLog.create({
            to,
            subject,
            message,
            attachmentName,
            status: "FAILED",
            error: error.message,
          });
        }
      })
    );
  }

  // 🧹 CLEANUP USER-UPLOADED FILE
  if (isTempFile) {
    try {
      await fs.unlink(attachmentPath);
    } catch (err) {
      console.warn("Failed to delete temp file:", err);
    }
  }

  return NextResponse.json({
    success: true,
    sent,
    failed,
    total: emails.length,
  });
}