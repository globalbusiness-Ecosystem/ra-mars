"use client";

const STATS = [
  {
    value: "500+",
    label: "Brands",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    value: "50K+",
    label: "Styles",
    icon: (
      <svg width="20" height="20" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M52 30 Q60 25 68 30" stroke="#7C3AED" strokeWidth="3" fill="none" />
        <rect x="8" y="18" width="38" height="24" rx="10" fill="none" stroke="#7C3AED" strokeWidth="3" />
        <rect x="74" y="18" width="38" height="24" rx="10" fill="none" stroke="#7C3AED" strokeWidth="3" />
        <rect x="11" y="21" width="32" height="18" rx="8" fill="#7C3AED" fillOpacity="0.2" />
        <rect x="77" y="21" width="32" height="18" rx="8" fill="#7C3AED" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    value: "π Pay",
    label: "Secure Pay",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

export function StatsBanner() {
  return (
    <div className="mx-3 my-3 rounded-2xl overflow-hidden border border-purple-900/50" style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #0f0f1a 60%, #1a1000 100%)" }}>
      <div className="flex divide-x divide-gray-800/60">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex-1 flex flex-col items-center justify-center py-4 px-2 gap-1">
            <div className="mb-1">{stat.icon}</div>
            <p className="font-bold text-base text-white leading-none">{stat.value}</p>
            <p className="text-gray-400 text-[10px] leading-none">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
