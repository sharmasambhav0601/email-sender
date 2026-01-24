import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/mongodb";
import EmailLog from "@/models/EmailLog";

export const runtime = "nodejs";

export async function GET() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth")?.value;

  if (!auth) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  await connectDB();

  const logs = await EmailLog.find()
    .sort({ createdAt: -1 })
    .limit(500)
    .lean();

  return NextResponse.json(logs);
}