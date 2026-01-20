"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { id: 1, image: "/images/slider/slider-img.jpg" },
  { id: 2, image: "/images/slider/slider-img.jpg" },
  { id: 3, image: "/images/slider/slider-img.jpg" },
];

export default function HeroSlider() {
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full max-w-8xl mx-auto px-4 my-8">
      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[220px] sm:h-[320px] md:h-[500px] lg:h-[600px]  rounded-xl overflow-hidden">
              <Image
                src={slide.image}
                alt="slider"
                fill
                priority
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PAGINATION OUTSIDE */}
      <div className="custom-pagination flex justify-center mt-4" />
    </section>
  );
}
