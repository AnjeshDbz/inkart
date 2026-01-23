"use client";

import { useRef } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../data/products";

export default function ProductCarousel({ products }: { products: Product[] }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      {/* LEFT BUTTON */}
      <button
        onClick={() => ref.current?.scrollBy({ left: -300, behavior: "smooth" })}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-9 h-9 rounded-full hidden md:flex items-center justify-center"
      >
        ‹
      </button>

      {/* SCROLLER */}
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-10 scrollbar-hide"
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] snap-start"
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => ref.current?.scrollBy({ left: 300, behavior: "smooth" })}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-9 h-9 rounded-full hidden md:flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}
