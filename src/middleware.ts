// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get("admin_auth")?.value === "true";

  // URL tujuan user
  const { pathname } = req.nextUrl;

  // Kalau akses halaman /admin/* tapi belum login
  if (pathname.startsWith("/admin") && !isLoggedIn) {
    const loginUrl = new URL("/admin/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Kalau sudah login, lanjutkan
  return NextResponse.next();
}

// Terapkan middleware hanya untuk /admin/*
export const config = {
  matcher: ["/admin/:path*"],
};
