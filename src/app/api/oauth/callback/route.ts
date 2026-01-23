import { google } from "googleapis";
import { connectDB } from "@/lib/mongodb";
import OAuthToken from "@/models/OAuthToken";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    // 🔒 Guard: callback must have ?code=
    if (!code) {
      return new Response("Missing authorization code", { status: 400 });
    }

    if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
      return new Response(
        "Missing CLIENT_ID or CLIENT_SECRET",
        { status: 500 }
      );
    }

    const BASE_URL =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // OAuth client
    const oauth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      `${BASE_URL}/api/oauth/callback`
    );

    // 🔁 Exchange code → tokens
    const { tokens } = await oauth2Client.getToken(code);

    // Google sends refresh_token ONLY on first consent
    if (!tokens.refresh_token) {
      return new Response(
        "No refresh token received. Remove app access from Google Account and retry OAuth.",
        { status: 400 }
      );
    }

    // 💾 Save refresh token
    await connectDB();
    await OAuthToken.findOneAndUpdate(
      { userEmail: process.env.GMAIL_USER },
      { refreshToken: tokens.refresh_token },
      { upsert: true }
    );

    // ✅ Redirect back to UI
    return Response.redirect(`${BASE_URL}/send-email`);
  } catch (err) {
    console.error("OAuth callback error:", err);
    return new Response("OAuth callback failed", { status: 500 });
  }
}