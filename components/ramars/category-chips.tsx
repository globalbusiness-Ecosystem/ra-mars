"use client";

export type Category = "All" | "Sunglasses" | "Prescription" | "Sports" | "Luxury" | "Kids";

const CATEGORIES: Category[] = ["All", "Sunglasses", "Prescription", "Sports", "Luxury", "Kids"];

interface CategoryChipsProps {
  active: Category;
  onSelect: (c: Category) => void;
}

export function CategoryChips({ active, onSelect }: CategoryChipsProps) {
  return (
    <div className="flex gap-2 px-4 pb-3 overflow-x-auto scrollbar-hide">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={
              isActive
                ? { backgroundColor: "#7C3AED", color: "#fff" }
                : { backgroundColor: "#1f2937", color: "#9ca3af", border: "1px solid #374151" }
            }
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
