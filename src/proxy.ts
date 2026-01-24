import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ ALLOW API ROUTES
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // ✅ ALLOW LOGIN PAGE
  if (pathname === "/login") {
    return NextResponse.next();
  }

  const isAuth = req.cookies.get("auth")?.value === "true";

  if (!isAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};