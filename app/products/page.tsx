"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faChevronDown,
  faXmark,
  faFilter,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { products } from "../data/products";

interface FilterState {
  price: boolean;
  district: boolean;
  availability: boolean;
  brand: boolean;
  category: boolean;
}

const FilterBox = ({
  title,
  id,
  open,
  toggle,
  children,
}: {
  title: string;
  id: keyof FilterState;
  open: FilterState;
  toggle: (key: keyof FilterState) => void;
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

interface FilterContentProps {
  open: FilterState;
  toggle: (key: keyof FilterState) => void;
}

const FilterContent = ({ open, toggle }: FilterContentProps) => (
  <div className="space-y-5">
    <FilterBox title="Price" id="price" open={open} toggle={toggle}>
      <input type="range" className="w-full accent-orange-500" />
      <div className="flex justify-between text-sm text-gray-600">
        <span>₹0</span>
        <span>₹500</span>
      </div>
    </FilterBox>

    <FilterBox title="District" id="district" open={open} toggle={toggle}>
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

    <FilterBox title="Availability" id="availability" open={open} toggle={toggle}>
      {["In Stock", "Out of Stock"].map((a) => (
        <label key={a} className="flex gap-2 text-sm">
          <input type="checkbox" />
          {a}
        </label>
      ))}
    </FilterBox>

    <FilterBox title="Brand" id="brand" open={open} toggle={toggle}>
      {["Britannia", "Cadbury", "Parle", "Haldiram"].map((b) => (
        <label key={b} className="flex gap-2 text-sm">
          <input type="checkbox" />
          {b}
        </label>
      ))}
    </FilterBox>

    <FilterBox title="Category" id="category" open={open} toggle={toggle}>
      {["Man", "Woman", "Electronics", "Home Decor", "Food"].map((c) => (
        <label key={c} className="flex gap-2 text-sm">
          <input type="checkbox" />
          {c}
        </label>
      ))}
    </FilterBox>
  </div>
);

export default function ProductPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [open, setOpen] = useState<FilterState>({
    price: true,
    district: true,
    availability: true,
    brand: true,
    category: true,
  });

  const toggle = (key: keyof FilterState) => {
    setOpen({ ...open, [key]: !open[key] });
  };

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

      <div className="mx-auto max-w-10xl px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block">
          <FilterContent open={open} toggle={toggle} />
        </aside>

        {/* Products */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-2">
          {products.map((item) => {
            const discount = Math.round(((item.mrp - item.price) / item.mrp) * 100);
            return (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="bg-white rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition p-2 md:p-3 flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full h-35 sm:h-78 md:h-72 overflow-hidden rounded-lg bg-white flex items-center justify-center">
                  {/* Heart */}
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="
            w-7.5 
            h-7.5 
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
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <p className="text-sm text-gray-700 line-clamp-2 mt-2">
                  {item.title}
                </p>

                {/* Brand */}
                <p className="text-xs text-gray-500">{item.brand}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} size="xs" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({item.rating})</span>
                </div>

                {/* Price */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-bold text-md">₹{item.price}</span>
                  <span className="text-sm line-through text-gray-400">
                    ₹{item.mrp}
                  </span>
                  <span className="text-xs text-red-500 font-medium">
                    {discount}% OFF
                  </span>
                </div>

                {/* Stock Status */}
                <p className="text-xs text-green-600 mt-1">
                  {item.stock} in stock
                </p>

                {/* Buttons */}
                <div className="mt-auto flex items-center gap-2 pt-3">
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="flex-1 bg-[#FF681A] hover:bg-primary text-white py-2 rounded-md text-sm font-medium hover:opacity-90"
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={(e) => e.preventDefault()}
                    className="w-10 h-10 border rounded-md flex items-center justify-center text-[#000958] hover:bg-gray-100"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                </div>
              </Link>
            );
          })}
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
              <FilterContent open={open} toggle={toggle} />
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
