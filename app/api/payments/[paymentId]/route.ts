import { NextRequest, NextResponse } from "next/server";

const PI_API_BASE = "https://api.testnet.minepi.com/v2";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ paymentId: string }> }
) {
  const { paymentId } = await params;

  try {
    const res = await fetch(`${PI_API_BASE}/payments/${paymentId}`, {
      headers: { Authorization: `Key ${process.env.PI_API_KEY}` },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("Get payment error:", err);
    return NextResponse.json({ error: "Failed to fetch payment" }, { status: 500 });
  }
}
