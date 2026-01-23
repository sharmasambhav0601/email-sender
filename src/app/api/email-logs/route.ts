import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import EmailLog from "@/models/EmailLog";

export async function GET() {
  await connectDB();

  const logs = await EmailLog.find()
    .sort({ createdAt: -1 })
    .limit(500);

  return NextResponse.json(logs);
}