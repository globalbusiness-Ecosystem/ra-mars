"use client";

import { usePiAuth } from "@/contexts/pi-auth-context";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

const MENU_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "Home",
    page: "home",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    label: "Browse",
    page: "browse",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    label: "Virtual Try-On",
    page: "tryon",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    label: "Orders",
    page: "orders",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "Profile",
    page: "profile",
  },
];

export function Sidebar({ isOpen, onClose, onNavigate }: SidebarProps) {
  const { userData } = usePiAuth();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside
        className="fixed top-0 left-0 h-full w-72 z-50 flex flex-col transition-transform duration-300 ease-in-out"
        style={{
          backgroundColor: "#0f0f1a",
          borderRight: "1px solid #1f2937",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid #1f2937" }}>
          <div>
            <p className="text-white font-bold text-lg">&#x1F453; ramars</p>
            <p className="text-gray-500 text-xs mt-0.5">ramars.pi</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* User info */}
        {userData && (
          <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: "1px solid #1f2937" }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{ backgroundColor: "#7C3AED" }}
            >
              {userData.username?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div>
              <p className="text-white text-sm font-medium">{userData.username}</p>
              <p className="text-xs" style={{ color: "#F59E0B" }}>π {userData.credits_balance?.toFixed(2) ?? "0.00"}</p>
            </div>
          </div>
        )}

        {/* Nav items */}
        <nav className="flex-1 py-4 px-3">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => { onNavigate(item.page); onClose(); }}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors text-sm font-medium mb-1"
            >
              <span className="text-gray-400">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-5" style={{ borderTop: "1px solid #1f2937" }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-gray-400 text-xs">Pi Network Connected</span>
          </div>
          <p className="text-gray-600 text-[10px] mt-2">v1.0.0 · ramars.pi</p>
        </div>
      </aside>
    </>
  );
}
