"use client";

import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { lowestPriceProducts } from "../data/homepage";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function LowestPrice() {
  return (
    <section className="bg-[#EFEEFF]">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-10">
        {/* ================= HEADING ================= */}
        <SectionHeading title="Lowest Price Guaranteed" />

        {/* ================= SLIDER ================= */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          loop
          speed={600}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }, // desktop same as your grid
          }}
          className="pb-2"
        >
          {lowestPriceProducts.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
