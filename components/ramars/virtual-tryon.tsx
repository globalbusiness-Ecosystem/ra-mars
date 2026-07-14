"use client";

import { useState } from "react";
import type { EyewearProduct } from "@/lib/eyewear-data";
import { EYEWEAR_PRODUCTS } from "@/lib/eyewear-data";
import { CameraFaceDetection } from "./camera-face-detection";

interface VirtualTryOnProps {
  selectedProduct?: EyewearProduct | null;
  onBack: () => void;
  onBuy: (product: EyewearProduct) => void;
}

function FrameOverlay({ product }: { product: EyewearProduct }) {
  return (
    <svg
      viewBox="0 0 240 60"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      <path d="M105 30 Q120 22 135 30" stroke={product.accentColor} strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="10" y="12" width="88" height="36" rx="16" fill={product.imageColor} stroke={product.accentColor} strokeWidth="3" fillOpacity="0.7" />
      <rect x="142" y="12" width="88" height="36" rx="16" fill={product.imageColor} stroke={product.accentColor} strokeWidth="3" fillOpacity="0.7" />
      <rect x="14" y="16" width="80" height="28" rx="13" fill={product.accentColor} fillOpacity="0.2" />
      <rect x="146" y="16" width="80" height="28" rx="13" fill={product.accentColor} fillOpacity="0.2" />
      <line x1="10" y1="27" x2="2" y2="38" stroke={product.accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="230" y1="27" x2="238" y2="38" stroke={product.accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="20" x2="32" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
      <line x1="152" y1="20" x2="164" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
    </svg>
  );
}

export function VirtualTryOn({ selectedProduct, onBack, onBuy }: VirtualTryOnProps) {
  const [activeProduct, setActiveProduct] = useState<EyewearProduct>(
    selectedProduct ?? EYEWEAR_PRODUCTS[0]
  );
  const [cameraActive, setCameraActive] = useState(false);

  const sunglassesProducts = EYEWEAR_PRODUCTS.slice(0, 6);

  return (
    <div className="flex flex-col min-h-full bg-gray-950">
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3 sticky top-0 z-10"
        style={{ backgroundColor: "#7C3AED" }}
      >
        <button
          onClick={onBack}
          className="w-9 h-9 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <h1 className="text-white font-bold text-lg flex-1">Virtual Try-On</h1>
        <span className="text-white/70 text-xs">AI Powered</span>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        {/* Camera / Face placeholder */}
        <div className="relative mx-4 mt-4">
          {cameraActive ? (
            <CameraFaceDetection
              product={activeProduct}
              onBack={() => setCameraActive(false)}
            />
          ) : (
            <div className="rounded-3xl overflow-hidden bg-gray-900 border border-gray-800" style={{ aspectRatio: "3/4" }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                {/* Face silhouette with frame overlay */}
                <div className="relative">
                  <svg viewBox="0 0 180 240" className="w-44 opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="90" cy="120" rx="68" ry="88" fill="#6b7280" />
                    <ellipse cx="90" cy="80" rx="50" ry="55" fill="#9ca3af" />
                  </svg>
                  <div className="absolute top-8 left-0 right-0 px-2">
                    <FrameOverlay product={activeProduct} />
                  </div>
                </div>

                <button
                  onClick={() => setCameraActive(true)}
                  className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl border-2 border-dashed border-purple-600/50 hover:border-purple-500 transition-colors group"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <span className="text-gray-300 text-sm font-medium">Enable Camera</span>
                  <span className="text-gray-500 text-xs">Try frames on your face live</span>
                </button>
              </div>

              {/* Active product badge */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/70 rounded-xl px-3 py-2 backdrop-blur-sm flex items-center justify-between">
                <div>
                  <p className="text-white text-xs font-bold">{activeProduct.brand} — {activeProduct.model}</p>
                  <p className="text-xs" style={{ color: "#F59E0B" }}>π {activeProduct.priceInPi}</p>
                </div>
                <button
                  onClick={() => onBuy(activeProduct)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-gray-950"
                  style={{ backgroundColor: "#F59E0B" }}
                >
                  Buy
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Frame selector */}
        <div className="px-4 mt-4">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Select Frame</p>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {sunglassesProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className="flex-shrink-0 w-20 rounded-xl p-2 border transition-all"
                style={{
                  backgroundColor: product.imageColor,
                  borderColor: activeProduct.id === product.id ? product.accentColor : "#374151",
                  boxShadow: activeProduct.id === product.id ? `0 0 0 2px ${product.accentColor}` : "none",
                }}
              >
                <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  <path d="M52 30 Q60 25 68 30" stroke={product.accentColor} strokeWidth="2.5" fill="none" />
                  <rect x="8" y="18" width="38" height="24" rx="10" fill={product.imageColor} stroke={product.accentColor} strokeWidth="2.5" />
                  <rect x="74" y="18" width="38" height="24" rx="10" fill={product.imageColor} stroke={product.accentColor} strokeWidth="2.5" />
                  <rect x="11" y="21" width="32" height="18" rx="8" fill={product.accentColor} fillOpacity="0.2" />
                  <rect x="77" y="21" width="32" height="18" rx="8" fill={product.accentColor} fillOpacity="0.2" />
                </svg>
                <p className="text-[9px] text-gray-300 text-center mt-1 leading-tight">{product.brand}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="mx-4 mt-4 bg-gray-900/60 rounded-2xl p-4 border border-gray-800">
          <p className="text-gray-300 text-xs font-semibold mb-2">How it works</p>
          <div className="space-y-2">
            {[
              "Select any frame from the carousel below",
              "Enable your camera for live try-on",
              "Position your face within the guide",
              "Tap Buy to purchase with Pi coin",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-2">
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#7C3AED" }}
                >
                  {i + 1}
                </span>
                <span className="text-gray-400 text-xs">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
