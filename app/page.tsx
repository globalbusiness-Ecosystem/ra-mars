"use client";

import { useState } from "react";
import { Header } from "@/components/ramars/header";
import { Ticker } from "@/components/ramars/ticker";
import { SearchBar } from "@/components/ramars/search-bar";
import { CategoryChips, type Category } from "@/components/ramars/category-chips";
import { ProductGrid } from "@/components/ramars/product-grid";
import { Sidebar } from "@/components/ramars/sidebar";
import { SettingsPage } from "@/components/ramars/settings-page";
import { VirtualTryOn } from "@/components/ramars/virtual-tryon";
import { BottomNav } from "@/components/ramars/bottom-nav";
import { StatsBanner } from "@/components/ramars/stats-banner";
import { BuyModal } from "@/components/ramars/buy-modal";
import { OrdersPage } from "@/components/ramars/orders-page";
import { ProfilePage } from "@/components/ramars/profile-page";
import type { EyewearProduct } from "@/lib/eyewear-data";

type NavPage = "home" | "browse" | "tryon" | "orders" | "profile";
type OverlayPage = "settings" | null;

export default function HomePage() {
  const [navPage, setNavPage] = useState<NavPage>("home");
  const [overlayPage, setOverlayPage] = useState<OverlayPage>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [category, setCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [tryOnProduct, setTryOnProduct] = useState<EyewearProduct | null>(null);
  const [buyProduct, setBuyProduct] = useState<EyewearProduct | null>(null);

  const handleNavigate = (page: string) => {
    setNavPage(page as NavPage);
    setOverlayPage(null);
  };

  const handleTryOn = (product: EyewearProduct) => {
    setTryOnProduct(product);
    setNavPage("tryon");
  };

  const handleBuy = (product: EyewearProduct) => {
    setBuyProduct(product);
  };

  // Overlay pages take precedence
  if (overlayPage === "settings") {
    return (
      <div className="min-h-screen bg-gray-950" style={{ maxWidth: 430, margin: "0 auto" }}>
        <SettingsPage onBack={() => setOverlayPage(null)} />
        <BottomNav active={navPage} onNavigate={handleNavigate} />
      </div>
    );
  }

  if (navPage === "tryon") {
    return (
      <div className="min-h-screen bg-gray-950" style={{ maxWidth: 430, margin: "0 auto" }}>
        <VirtualTryOn
          selectedProduct={tryOnProduct}
          onBack={() => { setNavPage("home"); setTryOnProduct(null); }}
          onBuy={handleBuy}
        />
        <BottomNav active="tryon" onNavigate={handleNavigate} />
        {buyProduct && (
          <BuyModal
            product={buyProduct}
            onClose={() => setBuyProduct(null)}
            onConfirm={() => setBuyProduct(null)}
          />
        )}
      </div>
    );
  }

  if (navPage === "orders") {
    return (
      <div className="min-h-screen bg-gray-950" style={{ maxWidth: 430, margin: "0 auto" }}>
        <OrdersPage onBack={() => setNavPage("home")} />
        <BottomNav active="orders" onNavigate={handleNavigate} />
      </div>
    );
  }

  if (navPage === "profile") {
    return (
      <div className="min-h-screen bg-gray-950" style={{ maxWidth: 430, margin: "0 auto" }}>
        <ProfilePage onBack={() => setNavPage("home")} />
        <BottomNav active="profile" onNavigate={handleNavigate} />
      </div>
    );
  }

  // Home / Browse
  return (
    <div className="min-h-screen bg-gray-950" style={{ maxWidth: 430, margin: "0 auto" }}>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Fixed top stack */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-40 w-full" style={{ maxWidth: 430 }}>
        <Header
          onMenuOpen={() => setSidebarOpen(true)}
          onSettingsOpen={() => setOverlayPage("settings")}
        />
        <Ticker />
      </div>

      {/* Scrollable content — offset matches header (52px) + ticker (28px) = 80px */}
      <div className="pt-20 pb-24">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryChips active={category} onSelect={setCategory} />

        {/* Show stats only on Home when no search active */}
        {navPage === "home" && !search && category === "All" && <StatsBanner />}

        {/* Section title */}
        <div className="px-4 mb-2 flex items-center justify-between">
          <h2 className="text-white font-bold text-base">
            {category === "All" ? "All Eyewear" : category}
          </h2>
          <span className="text-gray-500 text-xs">Pi Payment</span>
        </div>

        <ProductGrid
          category={category}
          search={search}
          onTryOn={handleTryOn}
          onBuy={handleBuy}
        />
      </div>

      <BottomNav active={navPage} onNavigate={handleNavigate} />

      {buyProduct && (
        <BuyModal
          product={buyProduct}
          onClose={() => setBuyProduct(null)}
          onConfirm={() => setBuyProduct(null)}
        />
      )}
    </div>
  );
}
