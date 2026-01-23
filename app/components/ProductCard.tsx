"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { ProductSummary } from "../../types";

type ProductCardProps = {
  product: ProductSummary;
  variant?: "grid" | "swiper";
};

export default function ProductCard({
  product,
  variant = "grid",
}: ProductCardProps) {
  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100,
  );

  const haptic = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(8);
    }
  };

  return (
    <div
      className={`group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col p-3 ${
        variant === "swiper" ? "h-full" : ""
      }`}
    >
      {/* Image Container */}
      <Link
        href={`/products/${product.id}`}
        className="relative w-full h-48 sm:h-64 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            haptic();
          }}
          className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur border border-gray-200 text-gray-400 hover:text-primary transition-colors flex items-center justify-center shadow-sm"
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
            {discount}% OFF
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 mt-3">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-1">
          <div className="flex text-yellow-400 text-[10px]">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={
                  i < Math.floor(product.rating) ? "" : "text-gray-200"
                }
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-500 font-medium">
            ({product.rating})
          </span>
        </div>

        {/* Prices */}
        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold text-lg text-black">₹{product.price}</span>
          <span className="text-xs line-through text-gray-400">
            ₹{product.mrp}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex items-center gap-2 pt-4">
          <button className="flex-1 bg-secondary hover:bg-primary text-white py-2 px-3 rounded-lg text-xs font-bold transition-colors shadow-sm active:scale-95">
            BUY NOW
          </button>

          <button
            className="w-9 h-9 border border-gray-200 rounded-xl flex items-center justify-center text-primary hover:bg-gray-50 transition-colors shadow-sm active:scale-95"
            aria-label="Add to cart"
          >
            <FontAwesomeIcon icon={faShoppingCart} size="sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
