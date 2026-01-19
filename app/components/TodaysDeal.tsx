"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";

/* ================= TYPES ================= */
type Deal = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  image: string;
  rating: number;
};

/* ================= DATA ================= */
const deals: Deal[] = [
  {
    id: 1,
    title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps",
    price: 80,
    image: "/images/products/nokia.png",
    rating: 4,
  },
  {
    id: 2,
    title: "ASUS ROG Phone 5 Dual Sim S888 Phantom",
    price: 351,
    oldPrice: 400,
    discount: "Premium",
    image: "/images/products/asus-rog.png",
    rating: 5,
  },
  {
    id: 3,
    title: "OnePlus 8 (Glacial Green 8GB RAM + 128GB Storage)",
    price: 303,
    image: "/images/products/oneplus.png",
    rating: 4,
  },
  {
    id: 4,
    title: "Apple Magic Keyboard with Touch ID",
    price: 204,
    image: "/images/products/keyboard.png",
    rating: 5,
  },
  {
    id: 5,
    title: "Microsoft Surface Arc Mouse",
    price: 29.1,
    oldPrice: 30,
    discount: "OFF 3%",
    image: "/images/products/mouse.png",
    rating: 4,
  },
];

/* ================= COMPONENT ================= */
export default function TodaysDealSwiper() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-14 todays-deal-section">
      {/* EDGE FADE MASK */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

      {/* HEADING */}
      <div className="flex items-center justify-center gap-4 mb-10 relative z-20">
        <Image
          src="/images/divider-img.png"
          alt="divider"
          width={160}
          height={30}
          className="w-auto h-auto max-w-[60px] sm:max-w-[120px] md:max-w-[160px]"
          priority
        />

        <h2 className="text-xl md:text-4xl font-semibold text-brand.primary text-center">
          Today’s Deals
        </h2>

        <Image
          src="/images/divider-img.png"
          alt="divider"
          width={160}
          height={30}
          className="w-auto h-auto max-w-[60px] sm:max-w-[120px] md:max-w-[160px]"
          priority
        />
      </div>

      {/* SLIDER WRAPPER */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          autoplay={{ delay: 3500, pauseOnMouseEnter: true }}
          loop
          speed={700}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {deals.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto p-2">
              <div className="product-card flex flex-col h-full bg-white rounded-2xl border border-border-product overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative">
                {/* BADGE */}
                {item.discount && (
                  <span className="absolute top-4 right-4 z-10 bg-gradient-to-br from-zinc-900 to-zinc-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.discount}
                  </span>
                )}

                {/* IMAGE */}
                <div className="relative h-[220px] bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-6 transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-6">
                  <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
                    Premium Product
                  </span>

                  <h3 className="text-lg font-bold mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-600 mb-4">
                    High-performance product with premium build quality.
                  </p>

                  {/* FEATURES */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Warranty", "Top Rated", "Best Seller"].map((f) => (
                      <span
                        key={f}
                        className="text-[11px] bg-zinc-100 px-3 py-1 rounded-full text-zinc-600"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* PRICE + CTA */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        {item.oldPrice && (
                          <div className="text-sm line-through text-zinc-400">
                            ${item.oldPrice}
                          </div>
                        )}
                        <div className="text-2xl font-bold">${item.price}</div>
                      </div>

                      <button className="flex items-center gap-2 bg-gradient-to-br from-zinc-900 to-zinc-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition hover:-translate-y-1 hover:shadow-lg">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        Add to Cart
                      </button>
                    </div>

                    {/* META */}
                    <div className="pt-4 border-t flex items-center justify-between">
                      <div className="flex items-center gap-1 text-yellow-400 text-sm">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className={i < item.rating ? "" : "text-zinc-300"}
                          />
                        ))}
                        <span className="ml-2 text-xs text-zinc-500">
                          128 Reviews
                        </span>
                      </div>

                      <span className="text-xs font-semibold text-green-500">
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT NAV */}
        <button
          className="
    swiper-button-prev
    absolute
    top-1/2 -translate-y-1/2
    -left-6
    z-30
    flex items-center justify-center
    w-11 h-11
    rounded-md
    border border-zinc-400
    bg-white
    text-zinc-900
    hover:bg-zinc-100
    transition
  "
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* RIGHT NAV */}
        <button
          className="
    swiper-button-next
    absolute
    top-1/2 -translate-y-1/2
    -right-6
    z-30
    flex items-center justify-center
    w-11 h-11
    rounded-md
    border border-zinc-400
    bg-white
    text-zinc-900
    hover:bg-zinc-100
    transition
  "
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}
