import { NextRequest, NextResponse } from "next/server";

const PI_PLATFORM_URL = "https://api.minepi.com/v2/me";
const APP_ID = process.env.NEXT_PUBLIC_PI_APP_ID || "ramars";

export async function POST(req: NextRequest) {
  try {
    const { pi_auth_token } = await req.json();
    if (!pi_auth_token) {
      return NextResponse.json({ error: "Missing pi_auth_token" }, { status: 400 });
    }

    const meRes = await fetch(PI_PLATFORM_URL, {
      headers: { Authorization: `Bearer ${pi_auth_token}` },
    });

    if (!meRes.ok) {
      return NextResponse.json({ error: "Invalid Pi access token" }, { status: 401 });
    }

    const piUser = await meRes.json();

    return NextResponse.json({
      id: piUser.uid,
      username: piUser.username,
      credits_balance: 0,
      terms_accepted: true,
      app_id: APP_ID,
    });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
