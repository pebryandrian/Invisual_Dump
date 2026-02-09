import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // contoh: username & password fix, nanti bisa pake DB
  if (username === "admin" && password === "1234") {
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_auth", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60, // 1 jam
    });
    return res;
  }

  return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}
    