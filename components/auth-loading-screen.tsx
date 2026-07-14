"use client";

import { usePiAuth } from "@/contexts/pi-auth-context";

export function AuthLoadingScreen() {
  const { authMessage, hasError, reinitialize } = usePiAuth();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#030712", maxWidth: 430, margin: "0 auto" }}
    >
      {/* Logo */}
      <div className="mb-8">
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center mb-4 mx-auto shadow-2xl"
          style={{ backgroundColor: "#7C3AED" }}
        >
          <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="16" cy="26" rx="11" ry="7" stroke="white" strokeWidth="3" />
            <ellipse cx="32" cy="26" rx="11" ry="7" stroke="white" strokeWidth="3" />
            <path d="M27 26 Q24 21 21 26" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <line x1="5" y1="24" x2="2" y2="29" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="43" y1="24" x2="46" y2="29" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="text-white font-bold text-2xl tracking-tight">ramars</h1>
        <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">ramars.pi</p>
      </div>

      {/* Spinner or error icon */}
      <div className="mb-6 flex justify-center">
        {hasError ? (
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#7f1d1d" }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.2" strokeLinecap="round">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
        ) : (
          <div className="relative w-14 h-14">
            <div
              className="absolute inset-0 rounded-full border-4 opacity-20"
              style={{ borderColor: "#7C3AED" }}
            />
            <div
              className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"
              style={{ borderColor: "#7C3AED", borderTopColor: "transparent" }}
            />
          </div>
        )}
      </div>

      <p className="text-sm font-medium text-gray-300 mb-1">
        {hasError ? "Authentication Failed" : "Connecting to Pi Network"}
      </p>
      <p className="text-xs text-gray-500 max-w-[260px] leading-relaxed">{authMessage}</p>

      {hasError && (
        <button
          onClick={reinitialize}
          className="mt-6 px-8 py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#7C3AED" }}
        >
          Retry Authentication
        </button>
      )}

      <div className="absolute bottom-8 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
        <span className="text-gray-600 text-xs">Global Eyewear Marketplace</span>
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
      </div>
    </div>
  );
}
