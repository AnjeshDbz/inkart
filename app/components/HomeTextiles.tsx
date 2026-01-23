"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { products } from "../data/homepage";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HomeTextiles() {
  const textiles = products.slice(0, 6); // take more for better sliding

  return (
    <section className="bg-[#EFEEFF]">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-12">
        {/* ================= HEADING ================= */}
        <SectionHeading title="Home Textiles" />

        {/* ================= LAYOUT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
          {/* LEFT BANNER */}
          <div className="md:col-span-1">
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/textiles-bg.jpg"
                alt="Textiles Banner"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-semibold shadow active:scale-95">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* ================= SLIDER ================= */}
          <div className="md:col-span-3">
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
              }}
              className="pb-2"
            >
              {textiles.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto">
                  <ProductCard product={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
