"use client";

import { usePiAuth } from "@/contexts/pi-auth-context";

export function OrdersPage({ onBack }: { onBack: () => void }) {
  const { userData } = usePiAuth();

  const MOCK_ORDERS = [
    { id: "RM-001", item: "Ray-Ban Wayfarer Classic", brand: "Ray-Ban", price: 45, status: "Delivered", date: "Mar 8, 2026", color: "#7C3AED" },
    { id: "RM-002", item: "Oakley Holbrook Sport", brand: "Oakley", price: 78, status: "Shipped", date: "Mar 10, 2026", color: "#0ea5e9" },
    { id: "RM-003", item: "Gucci GG0061S Gold", brand: "Gucci", price: 320, status: "Processing", date: "Mar 11, 2026", color: "#F59E0B" },
  ];

  const statusColors: Record<string, string> = {
    Delivered: "#22c55e",
    Shipped: "#0ea5e9",
    Processing: "#F59E0B",
  };

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
        <h1 className="text-white font-bold text-lg">My Orders</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-24">
        {userData && (
          <div className="bg-gray-900 rounded-2xl p-4 mb-4 border border-gray-800 flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs">Pi Balance</p>
              <p className="font-bold text-xl" style={{ color: "#F59E0B" }}>
                π {userData.credits_balance?.toFixed(2) ?? "0.00"}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: "#7C3AED" }}>
              {userData.username?.charAt(0)?.toUpperCase() ?? "U"}
            </div>
          </div>
        )}

        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Recent Orders</p>

        <div className="space-y-3">
          {MOCK_ORDERS.map((order) => (
            <div key={order.id} className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-500 text-xs font-mono">{order.id}</span>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ color: statusColors[order.status], backgroundColor: `${statusColors[order.status]}20` }}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-white font-semibold text-sm">{order.item}</p>
                  <p className="text-gray-500 text-xs">{order.brand}</p>
                  <p className="text-gray-600 text-xs mt-1">{order.date}</p>
                </div>
                <p className="font-bold text-base flex-shrink-0" style={{ color: "#F59E0B" }}>
                  π {order.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gray-900/50 rounded-2xl p-4 border border-gray-800 text-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <p className="text-gray-500 text-xs">All orders are paid securely with Pi coin</p>
        </div>
      </div>
    </div>
  );
}
