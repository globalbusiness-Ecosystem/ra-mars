"use client";

import { useState } from "react";
import type { EyewearProduct } from "@/lib/eyewear-data";
import { usePiAuth } from "@/contexts/pi-auth-context";
import { PRODUCT_CONFIG } from "@/lib/product-config";

interface BuyModalProps {
  product: EyewearProduct | null;
  onClose: () => void;
  onConfirm: (product: EyewearProduct) => void;
}

export function BuyModal({ product, onClose, onConfirm }: BuyModalProps) {
  const [isPaying, setIsPaying] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  const { products } = usePiAuth();

  // Resolve the Pi-backend product record for the featured Ramars product
  const piProduct = products?.find(
    (p) => p.id === PRODUCT_CONFIG.PRODUCT_69b16b704a604c5da2375a8b
  );

  if (!product) return null;

  // Use Pi-backend price when available; fall back to local price
  const paymentAmount = piProduct?.price_in_pi ?? product.priceInPi;
  const productDisabled = products !== null && !piProduct;

  const handleConfirm = () => {
    if (productDisabled) return;

    setIsPaying(true);
    setPayError(null);

    window.pay({
      amount: paymentAmount,
      memo: piProduct?.name ?? `${product.brand} ${product.model}`,
      metadata: {
        productId: piProduct?.id ?? PRODUCT_CONFIG.PRODUCT_69b16b704a604c5da2375a8b,
      },
      onComplete: () => {
        setIsPaying(false);
        setIsDone(true);
        setTimeout(() => {
          setIsDone(false);
          onConfirm(product);
          onClose();
        }, 1800);
      },
      onError: (error: unknown) => {
        setIsPaying(false);
        const msg =
          error instanceof Error
            ? error.message
            : "Payment failed. Please try again.";
        setPayError(msg);
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full max-w-[430px] rounded-t-3xl p-5 z-10"
        style={{ backgroundColor: "#0f0f1a", border: "1px solid #1f2937" }}
      >
        {isDone ? (
          <div className="flex flex-col items-center py-6 gap-3">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#7C3AED" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-white font-bold text-lg">Payment Successful!</p>
            <p className="text-gray-400 text-sm">π {product.priceInPi} paid via Pi Network</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-lg">Confirm Purchase</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Product summary */}
            <div className="flex items-center gap-3 bg-gray-900 rounded-2xl p-3 mb-4 border border-gray-800">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: product.imageColor }}
              >
                <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="w-12">
                  <path d="M52 30 Q60 25 68 30" stroke={product.accentColor} strokeWidth="2.5" fill="none" />
                  <rect x="8" y="18" width="38" height="24" rx="10" fill={product.imageColor} stroke={product.accentColor} strokeWidth="2.5" />
                  <rect x="74" y="18" width="38" height="24" rx="10" fill={product.imageColor} stroke={product.accentColor} strokeWidth="2.5" />
                  <rect x="11" y="21" width="32" height="18" rx="8" fill={product.accentColor} fillOpacity="0.2" />
                  <rect x="77" y="21" width="32" height="18" rx="8" fill={product.accentColor} fillOpacity="0.2" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{product.brand} — {product.model}</p>
                <p className="text-gray-500 text-xs">{product.frameMaterial} · {product.lensType}</p>
                <p className="text-xs mt-0.5" style={{ color: "#F59E0B", direction: "rtl" }}>{product.nameAr}</p>
              </div>
            </div>

            {/* Price breakdown */}
            <div className="space-y-2 mb-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Item Price</span>
                <span className="text-gray-200">π {paymentAmount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="flex justify-between font-bold text-base border-t border-gray-800 pt-2 mt-2">
                <span className="text-white">Total</span>
                <span style={{ color: "#F59E0B" }}>π {paymentAmount}</span>
              </div>
            </div>

            {/* Error message */}
            {payError && (
              <div className="mb-3 px-3 py-2 rounded-xl bg-red-950 border border-red-800 text-red-400 text-xs text-center">
                {payError}
              </div>
            )}

            {/* Product unavailable */}
            {productDisabled && (
              <div className="mb-3 px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-400 text-xs text-center">
                This product is currently unavailable for purchase.
              </div>
            )}

            {/* Pi payment button */}
            <button
              onClick={handleConfirm}
              disabled={isPaying || productDisabled}
              className="w-full py-3.5 rounded-2xl font-bold text-gray-950 text-base flex items-center justify-center gap-2 transition-opacity disabled:opacity-50"
              style={{ backgroundColor: "#F59E0B" }}
            >
              {isPaying ? (
                <>
                  <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
                  </svg>
                  Processing Pi Payment...
                </>
              ) : (
                <>
                  <span className="font-black text-lg">π</span>
                  {piProduct?.name
                    ? `Buy Now — π ${paymentAmount}`
                    : `Pay with Pi — π ${paymentAmount}`}
                </>
              )}
            </button>
            <p className="text-gray-600 text-xs text-center mt-2">Secured by Pi Network blockchain</p>
          </>
        )}
      </div>
    </div>
  );
}
