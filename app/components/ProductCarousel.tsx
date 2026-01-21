"use client";

import { useRef } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../data/products"; // ✅ FIXED

export default function ProductCarousel({ products }: { products: Product[] }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div aria-label="Product carousel" className="relative">
      <button
        onClick={() => ref.current?.scrollBy({ left: -260, behavior: "smooth" })}
        className="absolute left-0 top-1/2 z-10 bg-white shadow px-2 py-1"
      >
        ‹
      </button>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8"
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <button
        onClick={() => ref.current?.scrollBy({ left: 260, behavior: "smooth" })}
        className="absolute right-0 top-1/2 z-10 bg-white shadow px-2 py-1"
      >
        ›
      </button>
    </div>
  );
}
