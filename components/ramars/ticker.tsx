"use client";

const TICKER_ITEMS = [
  "NEW: Ray-Ban Wayfarer 2025 — π 45",
  "DEAL: Oakley Holbrook 20% OFF",
  "NEW: Gucci GG0061S Gold Frame — π 320",
  "DEAL: Maui Jim Polarized — π 89",
  "NEW: Prada SPR 68Z — π 280",
  "DEAL: Nike Vision Sport 15% OFF",
  "NEW: Tom Ford FT0237 — π 199",
  "DEAL: Persol 714 Folding — π 155",
  "NEW: Cartier Panthère — π 890",
  "DEAL: Versace VE4361 35% OFF",
];

export function Ticker() {
  const tickerContent = TICKER_ITEMS.join("   •   ");

  return (
    <div
      className="overflow-hidden py-1.5 px-0"
      style={{ backgroundColor: "#F59E0B" }}
    >
      <div className="ticker-track flex whitespace-nowrap">
        <span className="ticker-content text-gray-950 text-xs font-semibold tracking-wide pr-8">
          {tickerContent}
        </span>
        <span className="ticker-content text-gray-950 text-xs font-semibold tracking-wide pr-8" aria-hidden="true">
          {tickerContent}
        </span>
      </div>
    </div>
  );
}
