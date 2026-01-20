"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const locations = [
  { name: "Kolhapur", image: "/images/locations/kolhapur.png" },
  { name: "Pune", image: "/images/locations/pune.png" },
  { name: "Thane", image: "/images/locations/thane.png" },
  { name: "Ahilya Nagar", image: "/images/locations/ahilya-nagar.png" },
];

export default function ExploreByLocationSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const getCardWidth = () => {
    return (
      sliderRef.current?.querySelector<HTMLElement>("[data-card]")?.offsetWidth ||
      260
    );
  };

  // 🔁 SILENT RESET FOR INFINITE LOOP
  const handleInfiniteReset = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth / 2;

    if (slider.scrollLeft >= totalWidth) {
      slider.scrollLeft = slider.scrollLeft - totalWidth;
    }

    if (slider.scrollLeft <= 0) {
      slider.scrollLeft = totalWidth + slider.scrollLeft;
    }
  };

  // ▶ AUTO SLIDE
  useEffect(() => {
    if (!sliderRef.current || isHovering) return;

    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current!;
      const cardWidth = getCardWidth();

      slider.scrollBy({ left: cardWidth, behavior: "smooth" });

      setTimeout(handleInfiniteReset, 350);
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering]);

  // ⬅➡ BUTTON SCROLL
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const cardWidth = getCardWidth();

    slider.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });

    setTimeout(handleInfiniteReset, 350);
  };

  return (
    <section className="mx-auto w-full md:max-w-10xl px-4 py-12">
      {/* HEADER */}
      <div className="flex items-center justify-center md:justify-between mb-8">
        <h2 className="text-xl md:text-4xl font-semibold text-brand.primary">
          Explore Products by Location
        </h2>

        {/* BUTTONS */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="h-9 w-9 rounded-full border flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-9 w-9 rounded-full border flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4"
        >
          {/* DUPLICATED SLIDES */}
          {[...locations, ...locations].map((location, index) => (
            <div
              key={`${location.name}-${index}`}
              data-card
              className="
                flex-shrink-0
                rounded-2xl shadow-card
                flex flex-col items-center justify-center
                p-4 md:py-8 md:px-6
                bg-gray-50
                transition-transform duration-300
                hover:scale-105
                w-[calc(50%-18px)]
                sm:w-[calc(33.333%-20px)]
                lg:w-[calc(25%-25px)]
              "
            >
              <div className="relative w-36 h-36">
                <Image
                  src={location.image}
                  alt={`${location.name} products`}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="mt-4 text-lg font-semibold">
                {location.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
