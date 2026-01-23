"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const videos = [
  "https://www.youtube.com/embed/ho0EhuO3RNs",
  "https://www.youtube.com/embed/93Xk4vl-nBg",
  "https://www.youtube.com/embed/ho0EhuO3RNs",
  "https://www.youtube.com/embed/93Xk4vl-nBg",
];

export default function FansTestimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector<HTMLElement>("[data-card]");
    if (!card) return;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -card.offsetWidth : card.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="mx-auto w-full md:max-w-10xl px-4 py-14">
        {/* Heading */}
        <SectionHeading title="Listen from Dotinkart's fans!" />

        {/* Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {videos.map((src, i) => (
              <div
                key={i}
                data-card
                onClick={() => setActiveVideo(src)}
                className="
                  flex-shrink-0 cursor-pointer
                  aspect-[9/16]
                  rounded-3xl overflow-hidden shadow-card
                  bg-black
                  w-[48%] sm:w-[33%] lg:w-[24%]
                "
              >
                <iframe
                  src={`${src}?controls=0&mute=1`}
                  title={`fan-video-${i}`}
                  className="w-full h-full pointer-events-none"
                />
              </div>
            ))}
          </div>

          {/* Bottom Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="h-10 w-10 rounded-full border flex items-center justify-center
                         hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-brand.primary"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="h-10 w-10 rounded-full border flex items-center justify-center
                         hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-brand.primary"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-md aspect-[9/16] bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${activeVideo}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 bg-white/90 rounded-full h-8 w-8
                         flex items-center justify-center text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
