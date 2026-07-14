"use client";

import type { EyewearProduct } from "@/lib/eyewear-data";
import { getEyewearIllustration } from "./eyewear-illustrations";

interface ProductCardProps {
  product: EyewearProduct;
  onTryOn: (product: EyewearProduct) => void;
  onBuy: (product: EyewearProduct) => void;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill={i <= Math.floor(rating) ? "#F59E0B" : i - 0.5 <= rating ? "url(#half)" : "#374151"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span className="text-gray-400 text-[10px] ml-1">{rating}</span>
    </div>
  );
}

export function ProductCard({ product, onTryOn, onBuy }: ProductCardProps) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex flex-col">
      {/* Image area */}
      <div
        className="relative flex items-center justify-center p-4 h-28"
        style={{ backgroundColor: product.imageColor }}
      >
        {product.badge && (
          <span
            className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-white z-10"
            style={{ backgroundColor: product.badge === "Luxury" ? "#F59E0B" : product.badge.includes("OFF") ? "#ef4444" : "#7C3AED" }}
          >
            {product.badge}
          </span>
        )}
        <div className="w-full max-w-[160px]">
          {getEyewearIllustration(product.id)}
        </div>
      </div>

      {/* Info */}
      <div className="p-2.5 flex flex-col gap-1.5 flex-1">
        <div>
          <p className="text-white font-semibold text-[13px] leading-tight">{product.brand}</p>
          <p className="text-gray-400 text-[11px] leading-tight">{product.model}</p>
          <p className="text-[10px] leading-tight mt-0.5" style={{ color: "#F59E0B", direction: "rtl", fontFamily: "serif" }}>
            {product.nameAr}
          </p>
        </div>

        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-gray-500 bg-gray-800 px-1.5 py-0.5 rounded-full">
              {product.frameMaterial}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-gray-500 bg-gray-800 px-1.5 py-0.5 rounded-full">
              {product.lensType}
            </span>
          </div>
        </div>

        <StarRating rating={product.rating} />

        <div className="flex items-center justify-between mt-0.5">
          <span className="font-bold text-sm" style={{ color: "#F59E0B" }}>
            π {product.priceInPi}
          </span>
        </div>

        <div className="flex gap-1.5 mt-1">
          <button
            onClick={() => onTryOn(product)}
            className="flex-1 py-1.5 rounded-lg text-[11px] font-semibold border transition-colors text-purple-400 border-purple-700 hover:bg-purple-900/30"
          >
            Try On
          </button>
          <button
            onClick={() => onBuy(product)}
            className="flex-1 py-1.5 rounded-lg text-[11px] font-semibold text-gray-950 transition-colors font-bold"
            style={{ backgroundColor: "#F59E0B" }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
