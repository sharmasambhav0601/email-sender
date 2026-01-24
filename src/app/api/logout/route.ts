import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });

  // ✅ Overwrite cookie with maxAge: 0 (guaranteed delete)
  res.cookies.set("auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0, // 👈 THIS is the key
  });

  return res;
}