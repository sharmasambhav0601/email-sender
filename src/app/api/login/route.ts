import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json(
        { error: "Password missing" },
        { status: 400 }
      );
    }

    if (password !== process.env.SITE_PASSWORD) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    // ✅ Create response first
    const res = NextResponse.json({ success: true });

    // ✅ Set cookie on response (THIS IS THE FIX)
    res.cookies.set("auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return res;
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}