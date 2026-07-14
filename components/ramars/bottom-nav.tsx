"use client";

type NavPage = "home" | "browse" | "tryon" | "orders" | "profile";

interface BottomNavProps {
  active: NavPage;
  onNavigate: (page: NavPage) => void;
}

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  const NAV_ITEMS: { page: NavPage; label: string; icon: React.ReactNode }[] = [
    {
      page: "home",
      label: "Home",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      page: "browse",
      label: "Browse",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      page: "tryon",
      label: "Try On",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
    },
    {
      page: "orders",
      label: "Orders",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      page: "profile",
      label: "Profile",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex items-end"
      style={{ backgroundColor: "#0f0f1a", borderTop: "1px solid #1f2937" }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.page;
        const isTryOn = item.page === "tryon";

        if (isTryOn) {
          return (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className="flex-1 flex flex-col items-center justify-center relative"
              style={{ paddingBottom: "10px" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center -mt-5 shadow-lg transition-transform active:scale-95"
                style={{ backgroundColor: "#F59E0B", color: "#0f172a" }}
              >
                {item.icon}
              </div>
              <span className="text-[10px] font-semibold mt-0.5" style={{ color: "#F59E0B" }}>
                {item.label}
              </span>
            </button>
          );
        }

        return (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className="flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors"
          >
            <span style={{ color: isActive ? "#7C3AED" : "#4b5563" }}>{item.icon}</span>
            <span
              className="text-[10px] font-medium"
              style={{ color: isActive ? "#7C3AED" : "#4b5563" }}
            >
              {item.label}
            </span>
            {isActive && (
              <span className="w-4 h-0.5 rounded-full" style={{ backgroundColor: "#7C3AED" }} />
            )}
          </button>
        );
      })}
    </nav>
  );
}
