"use client";

import { usePiAuth } from "@/contexts/pi-auth-context";

export function ProfilePage({ onBack }: { onBack: () => void }) {
  const { userData } = usePiAuth();

  const BADGES = [
    { label: "Early Adopter", color: "#7C3AED" },
    { label: "Pi Buyer", color: "#F59E0B" },
    { label: "Style Maven", color: "#0ea5e9" },
  ];

  return (
    <div className="flex flex-col min-h-full bg-gray-950">
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
        <h1 className="text-white font-bold text-lg">Profile</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        {/* Hero */}
        <div className="flex flex-col items-center pt-8 pb-6 px-4" style={{ background: "linear-gradient(180deg, #1a0a2e 0%, #0f0f1a 100%)" }}>
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold border-4"
            style={{ backgroundColor: "#7C3AED", borderColor: "#F59E0B" }}
          >
            {userData?.username?.charAt(0)?.toUpperCase() ?? "U"}
          </div>
          <p className="text-white font-bold text-xl mt-3">{userData?.username ?? "Pi User"}</p>
          <p className="text-gray-400 text-sm">@{userData?.username ?? "piuser"} · Pi Network</p>
          <p className="text-2xl font-bold mt-2" style={{ color: "#F59E0B" }}>
            π {userData?.credits_balance?.toFixed(2) ?? "0.00"}
          </p>
          <div className="flex gap-2 mt-3 flex-wrap justify-center">
            {BADGES.map((b) => (
              <span key={b.label} className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: b.color }}>
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 px-4 mb-4">
          {[
            { label: "Orders", value: "3" },
            { label: "Wishlist", value: "12" },
            { label: "Reviews", value: "5" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-900 rounded-2xl p-3 text-center border border-gray-800">
              <p className="text-white font-bold text-xl">{s.value}</p>
              <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="px-4 space-y-2">
          {[
            { label: "Wishlist", icon: "♡", sub: "12 saved items" },
            { label: "Payment History", icon: "π", sub: "View Pi transactions" },
            { label: "Saved Addresses", icon: "📍", sub: "Shipping locations" },
            { label: "Language", icon: "🌐", sub: "English / العربية" },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full bg-gray-900 rounded-2xl p-4 border border-gray-800 flex items-center justify-between hover:border-purple-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <div className="text-left">
                  <p className="text-white text-sm font-medium">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.sub}</p>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          ))}
        </div>

        <div className="px-4 mt-4">
          <p className="text-gray-600 text-xs text-center">Ramars · ramars.pi · Pi Network</p>
        </div>
      </div>
    </div>
  );
}
