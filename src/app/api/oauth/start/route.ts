import { google } from "googleapis";

export async function GET() {
  if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
    return new Response(
      "Missing CLIENT_ID or CLIENT_SECRET",
      { status: 500 }
    );
  }

  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    `${BASE_URL}/api/oauth/callback`
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",              // required for refresh token
    scope: ["https://mail.google.com/"],
    prompt: "consent",                   // force refresh token
  });

  return Response.redirect(authUrl);
}