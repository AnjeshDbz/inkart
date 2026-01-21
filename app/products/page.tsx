"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faChevronDown,
  faXmark,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    title: "Asus Rog Laptop",
    price: 273,
    oldPrice: 400,
    image: "/images/products/asus-rog.png",
  },
  {
    id: 2,
    title: "Bag",
    price: 273,
    oldPrice: 400,
    image: "/images/products/bag.webp",
  },
  {
    id: 3,
    title: "Glass",
    price: 273,
    oldPrice: 400,
    image: "/images/products/glass.webp",
  },
  {
    id: 4,
    title: "Keyboard",
    price: 273,
    oldPrice: 400,
    image: "/images/products/keyboard.png",
  },
  {
    id: 5,
    title: "Mouse",
    price: 273,
    oldPrice: 400,
    image: "/images/products/mouse.png",
  },
  {
    id: 6,
    title: "Nokia",
    price: 273,
    oldPrice: 400,
    image: "/images/products/nokia.png",
  },
];

export default function ProductPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [open, setOpen] = useState({
    price: true,
    district: true,
    availability: true,
    brand: true,
    category: true,
  });

  const toggle = (key: keyof typeof open) => {
    setOpen({ ...open, [key]: !open[key] });
  };

  const FilterBox = ({
    title,
    id,
    children,
  }: {
    title: string;
    id: keyof typeof open;
    children: React.ReactNode;
  }) => (
    <div className="bg-[#FBFBFB] rounded-xl shadow-sm">
      <button
        onClick={() => toggle(id)}
        className="w-full flex justify-between items-center px-4 py-3 font-semibold"
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`transition ${open[id] ? "rotate-180" : ""}`}
        />
      </button>

      {open[id] && <div className="px-4 pb-4 space-y-2">{children}</div>}
    </div>
  );

  const FilterContent = () => (
    <div className="space-y-5">
      <FilterBox title="Price" id="price">
        <input type="range" className="w-full accent-orange-500" />
        <div className="flex justify-between text-sm text-gray-600">
          <span>₹0</span>
          <span>₹500</span>
        </div>
      </FilterBox>

      <FilterBox title="District" id="district">
        <div className="max-h-40 overflow-y-auto space-y-2 pr-1">
          {[
            "Jalna",
            "Satara",
            "Sindhudurg",
            "Kolhapur",
            "Ahilya Nagar",
            "Akola",
            "Amravati",
          ].map((d) => (
            <label key={d} className="flex gap-2 text-sm">
              <input type="checkbox" />
              {d}
            </label>
          ))}
        </div>
      </FilterBox>

      <FilterBox title="Availability" id="availability">
        {["In Stock", "Out of Stock"].map((a) => (
          <label key={a} className="flex gap-2 text-sm">
            <input type="checkbox" />
            {a}
          </label>
        ))}
      </FilterBox>

      <FilterBox title="Brand" id="brand">
        {["Britannia", "Cadbury", "Parle", "Haldiram"].map((b) => (
          <label key={b} className="flex gap-2 text-sm">
            <input type="checkbox" />
            {b}
          </label>
        ))}
      </FilterBox>

      <FilterBox title="Category" id="category">
        {["Man", "Woman", "Electronics", "Home Decor", "Food"].map((c) => (
          <label key={c} className="flex gap-2 text-sm">
            <input type="checkbox" />
            {c}
          </label>
        ))}
      </FilterBox>
    </div>
  );

  return (
    <section className="bg-gray-50">
      {/* Mobile Filter Button */}
      <div className="lg:hidden px-4 pt-4 flex justify-between">
        <button
          onClick={() => setOpenFilter(true)}
          className="flex items-center gap-2 text-sm font-medium"
        >
          <FontAwesomeIcon icon={faFilter} />
          Filter & Sort
        </button>
        <span className="text-sm text-gray-500">982 products</span>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block">
          <FilterContent />
        </aside>

        {/* Products */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition p-3 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-35 sm:h-78 md:h-72 overflow-hidden rounded-lg bg-white flex items-center justify-center">
                {/* Heart */}
                <div className="absolute top-2 right-2 z-10">
                  <button
                    className="
          w-[30px] 
          h-[30px] 
          rounded-full 
          bg-white 
          border 
          border-[#d5d5d5]
          text-primary 
          hover:text-secondary 
          transition-colors 
          duration-200
          flex items-center justify-center
        "
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>

                {/* ✅ Fixed image fitting */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Title */}
              <p className="text-sm text-gray-700 line-clamp-2 mt-2">
                {item.title}
              </p>

              {/* Price */}
              <div className="mt-1 flex items-center gap-2">
                <span className="font-bold text-lg">₹{item.price}</span>

                {item.oldPrice && (
                  <>
                    <span className="text-sm line-through text-gray-400">
                      ₹{item.oldPrice}
                    </span>
                    <span className="text-xs text-red-500 font-medium">
                      30% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex items-center gap-2 pt-3">
                <button className="flex-1 bg-[#FF681A] hover:bg-[var(--primary)] text-white py-2 rounded-md text-sm font-medium hover:opacity-90">
                  Buy Now
                </button>

                <button className="w-10 h-10 border rounded-md flex items-center justify-center text-[#000958] hover:bg-gray-100">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      {openFilter && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col p-5">
            <div className="flex justify-between mb-4">
              <button onClick={() => setOpenFilter(false)}>
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </button>
              <h2 className="font-semibold">Filter and sort</h2>
              <div />
            </div>

            <div className="flex-1 overflow-y-auto">
              <FilterContent />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t">
              <button className="border border-orange-500 text-orange-500 py-2 rounded-md">
                Clear
              </button>
              <button className="bg-orange-500 text-white py-2 rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
