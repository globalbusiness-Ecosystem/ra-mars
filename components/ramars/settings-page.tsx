"use client";

import { useState } from "react";

interface SettingsPageProps {
  onBack: () => void;
}

type Theme = "Dark" | "Light" | "Auto";
type Language = "English" | "Arabic" | "Both";
type Currency = "Pi (π)" | "USD" | "EUR";

export function SettingsPage({ onBack }: SettingsPageProps) {
  const [theme, setTheme] = useState<Theme>("Dark");
  const [language, setLanguage] = useState<Language>("English");
  const [currency, setCurrency] = useState<Currency>("Pi (π)");
  const [notifications, setNotifications] = useState({
    newArrivals: true,
    deals: true,
    orderUpdates: true,
    piPayments: true,
  });

  const ToggleSwitch = ({
    checked,
    onChange,
  }: {
    checked: boolean;
    onChange: () => void;
  }) => (
    <button
      onClick={onChange}
      className="relative w-11 h-6 rounded-full transition-colors flex-shrink-0"
      style={{ backgroundColor: checked ? "#7C3AED" : "#374151" }}
    >
      <span
        className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform"
        style={{ transform: checked ? "translateX(22px)" : "translateX(2px)" }}
      />
    </button>
  );

  const OptionChips = <T extends string>({
    options,
    active,
    onSelect,
  }: {
    options: T[];
    active: T;
    onSelect: (v: T) => void;
  }) => (
    <div className="flex gap-2 flex-wrap mt-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
          style={
            active === opt
              ? { backgroundColor: "#7C3AED", color: "#fff" }
              : { backgroundColor: "#1f2937", color: "#9ca3af", border: "1px solid #374151" }
          }
        >
          {opt}
        </button>
      ))}
    </div>
  );

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
        <h1 className="text-white font-bold text-lg">Settings</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-24 space-y-5">
        {/* Theme */}
        <section className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <h2 className="text-gray-300 font-semibold text-sm mb-1 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            Theme
          </h2>
          <p className="text-gray-500 text-xs mb-2">Choose your preferred display theme</p>
          <OptionChips<Theme> options={["Dark", "Light", "Auto"]} active={theme} onSelect={setTheme} />
        </section>

        {/* Language */}
        <section className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <h2 className="text-gray-300 font-semibold text-sm mb-1 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Language
          </h2>
          <p className="text-gray-500 text-xs mb-2">Arabic and English supported</p>
          <OptionChips<Language> options={["English", "Arabic", "Both"]} active={language} onSelect={setLanguage} />
          {language === "Arabic" && (
            <p className="text-xs mt-2" style={{ color: "#F59E0B", direction: "rtl" }}>
              مرحبا بك في رمارس للنظارات
            </p>
          )}
        </section>

        {/* Currency */}
        <section className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <h2 className="text-gray-300 font-semibold text-sm mb-1 flex items-center gap-2">
            <span style={{ color: "#F59E0B", fontWeight: "bold", fontSize: 14 }}>π</span>
            Currency
          </h2>
          <p className="text-gray-500 text-xs mb-2">Display prices in your preferred currency</p>
          <OptionChips<Currency> options={["Pi (π)", "USD", "EUR"]} active={currency} onSelect={setCurrency} />
        </section>

        {/* Notifications */}
        <section className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <h2 className="text-gray-300 font-semibold text-sm mb-3 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            Notifications
          </h2>
          <div className="space-y-3">
            {[
              { key: "newArrivals", label: "New Arrivals", sub: "Get notified of new eyewear" },
              { key: "deals", label: "Brand Deals", sub: "Flash sales and discounts" },
              { key: "orderUpdates", label: "Order Updates", sub: "Shipping and delivery status" },
              { key: "piPayments", label: "Pi Payments", sub: "Transaction confirmations" },
            ].map(({ key, label, sub }) => (
              <div key={key} className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-gray-200 text-sm font-medium">{label}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
                <ToggleSwitch
                  checked={notifications[key as keyof typeof notifications]}
                  onChange={() =>
                    setNotifications((prev) => ({ ...prev, [key]: !prev[key as keyof typeof notifications] }))
                  }
                />
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <h2 className="text-gray-300 font-semibold text-sm mb-3 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            About Ramars
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">App Version</span>
              <span className="text-gray-200">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Domain</span>
              <span style={{ color: "#F59E0B" }}>ramars.pi</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Network</span>
              <span className="text-gray-200">Pi Network</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Brands</span>
              <span className="text-gray-200">500+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Styles</span>
              <span className="text-gray-200">50,000+</span>
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-3 leading-relaxed">
            Ramars is the global eyewear marketplace on Pi Network. Browse sunglasses and frames from 500+ brands worldwide with virtual try-on technology.
          </p>
        </section>
      </div>
    </div>
  );
}
