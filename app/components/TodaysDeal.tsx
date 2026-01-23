"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./ProductCard";
import { products } from "../data/homepage";

import "swiper/css";
import "swiper/css/navigation";
import SectionHeading from "./SectionHeading";

export default function TodaysDealSwiper() {
  return (
    <section className="relative mx-auto w-full max-w-[1500px] px-3 sm:px-6 py-10 overflow-hidden">
      {/* EDGE FADE */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10" />

      {/* HEADING */}
      <SectionHeading title="Today’s Deals" />

      {/* SLIDER */}
      <div className="relative group/nav">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".today-prev",
            nextEl: ".today-next",
          }}
          autoplay={{ delay: 3500, pauseOnMouseEnter: true }}
          loop
          speed={600}
          spaceBetween={12}
          slidesPerView={1.2} // ✅ IMPORTANT FIX for mobile
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <div className="h-full">
                <ProductCard product={item} variant="swiper" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAV BUTTONS */}
        <button className="today-prev absolute top-1/2 -translate-y-1/2 left-0 z-30 flex items-center justify-center w-9 h-9 rounded-full bg-white border shadow text-gray-700 hover:bg-primary hover:text-white transition opacity-0 group-hover/nav:opacity-100">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button className="today-next absolute top-1/2 -translate-y-1/2 right-0 z-30 flex items-center justify-center w-9 h-9 rounded-full bg-white border shadow text-gray-700 hover:bg-primary hover:text-white transition opacity-0 group-hover/nav:opacity-100">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}
