"use client";

import Image from "next/image";
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
  return (
    <section className="mx-auto w-full md:max-w-[1500px] px-4 my-10">
      <div className="relative rounded-2xl overflow-hidden">

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          pagination={{
            clickable: true,
          }}
          className="hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {/* Fixed responsive height */}
              <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                <Image
                  src={slide.image}
                  alt="slider"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
