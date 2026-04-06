import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs/promises";
import { connectDB } from "@/lib/mongodb";
import EmailLog from "@/models/EmailLog";

export async function POST(req: Request) {
  await connectDB();

  const formData = await req.formData();
  const emails: string[] = JSON.parse(formData.get("emails") as string);
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const file = formData.get("file") as File | null;
  const customFileName = formData.get("fileName") as string | null;

  // ✅ Gmail SMTP using App Password
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // 📎 Attachment
  let attachmentPath: string;
  let attachmentName: string;
  let isTempFile = false;

  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    attachmentName = customFileName || file.name;
    const tmpDir = path.join(process.cwd(), "tmp");
    await fs.mkdir(tmpDir, { recursive: true });
    attachmentPath = path.join(tmpDir, attachmentName);
    await fs.writeFile(attachmentPath, buffer);
    isTempFile = true;
  } else {
    attachmentName = "SambhavSharma_FS_Resume.pdf";
    attachmentPath = path.join(
      process.cwd(),
      "src",
      "assets",
      "resumes",
      "SambhavSharma_FS_Resume.pdf"
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

  // 🧹 Cleanup temp file
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
