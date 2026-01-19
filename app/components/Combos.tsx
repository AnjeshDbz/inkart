"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    title: "Kids Toy Set – Fun & Safe for Children",
    price: 299,
    image: "/images/products/toy.webp",
  },
  {
    id: 2,
    title: "Stylish Travel Backpack – Lightweight & Durable",
    price: 499,
    image: "/images/products/bag.webp",
  },
  {
    id: 3,
    title: "Premium Glass Water Bottle – Leak Proof",
    price: 199,
    image: "/images/products/glass.webp",
  },
];

export default function LowestPrice() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* ================= HEADING ================= */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <Image
            src="/images/divider-img.png"
            alt="divider"
            width={160}
            height={30}
            className="max-w-[60px] sm:max-w-[120px]"
          />

          <h2 className="text-xl md:text-4xl font-semibold text-brand.primary text-center">
            Combos
          </h2>

          <Image
            src="/images/divider-img.png"
            alt="divider"
            width={160}
            height={30}
            className="max-w-[60px] sm:max-w-[120px]"
          />
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* LEFT BANNER */}
          <div className="lg:col-span-1 h-full">
            <div className="relative h-full  min-h-[420px] rounded-2xl overflow-hidden shadow">
              <Image
                src="/images/veg-bg.jpg" // <-- your veg image
                alt="Veg Banner"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <button
                  className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-medium transition-colors 
    duration-200"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* PRODUCT CARDS */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition p-3 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-35 sm:h-78 md:h-72 overflow-hidden rounded-lg">
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

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-full h-35 md:h-72"
                  />
                </div>

                {/* Title */}
                <p className="text-sm text-gray-700 line-clamp-2 mt-2">
                  {item.title}
                </p>

                {/* Price */}
                <p className="font-bold text-lg mt-1">₹{item.price}</p>

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
      </div>
    </section>
  );
}
