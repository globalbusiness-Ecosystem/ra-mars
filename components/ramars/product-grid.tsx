"use client";

import { EYEWEAR_PRODUCTS, type EyewearProduct } from "@/lib/eyewear-data";
import { ProductCard } from "./product-card";
import type { Category } from "./category-chips";

interface ProductGridProps {
  category: Category;
  search: string;
  onTryOn: (product: EyewearProduct) => void;
  onBuy: (product: EyewearProduct) => void;
}

export function ProductGrid({ category, search, onTryOn, onBuy }: ProductGridProps) {
  const filtered = EYEWEAR_PRODUCTS.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      p.brand.toLowerCase().includes(q) ||
      p.model.toLowerCase().includes(q) ||
      p.nameAr.includes(q) ||
      p.lensType.toLowerCase().includes(q) ||
      p.frameMaterial.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <svg width="48" height="48" viewBox="0 0 120 60" className="mb-4 opacity-30" xmlns="http://www.w3.org/2000/svg">
          <path d="M52 30 Q60 25 68 30" stroke="#7C3AED" strokeWidth="2.5" fill="none" />
          <rect x="8" y="18" width="38" height="24" rx="10" fill="#1f2937" stroke="#7C3AED" strokeWidth="2.5" />
          <rect x="74" y="18" width="38" height="24" rx="10" fill="#1f2937" stroke="#7C3AED" strokeWidth="2.5" />
        </svg>
        <p className="text-gray-400 text-sm">No eyewear found</p>
        <p className="text-gray-600 text-xs mt-1">Try a different search or category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 px-3 pb-4">
      {filtered.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onTryOn={onTryOn}
          onBuy={onBuy}
        />
      ))}
    </div>
  );
}
