import { NextRequest, NextResponse } from "next/server";

const PI_API_BASE = "https://api.minepi.com/v2";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ paymentId: string }> }
) {
  const { paymentId } = await params;

  try {
    const body = await req.json();
    const res = await fetch(`${PI_API_BASE}/payments/${paymentId}/complete`, {
      method: "POST",
      headers: {
        Authorization: `Key ${process.env.PI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("Complete error:", err);
    return NextResponse.json({ error: "Complete failed" }, { status: 500 });
  }
}
