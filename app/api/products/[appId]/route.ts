import { NextResponse } from "next/server";
import { EYEWEAR_PRODUCTS } from "@/lib/eyewear-data";
import { PRODUCT_CONFIG } from "@/lib/product-config";

export async function GET() {
  const products = EYEWEAR_PRODUCTS.map((p) => ({
    id:
      p.id === "1"
        ? PRODUCT_CONFIG.PRODUCT_69b16b704a604c5da2375a8b
        : p.id,
    name: `${p.brand} ${p.model}`,
    description: `${p.frameMaterial} · ${p.lensType}`,
    price_in_pi: p.priceInPi,
    total_quantity: 100,
    is_active: true,
    created_at: new Date().toISOString(),
  }));

  return NextResponse.json({ products });
}
