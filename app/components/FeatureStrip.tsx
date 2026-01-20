"use client";

import Image from "next/image";

const features = [
  {
    id: 1,
    title: "35 Districts",
    icon: "/images/district.png",
  },
  {
    id: 2,
    title: "10K Villages",
    icon: "/images/village.png",
  },
  {
    id: 3,
    title: "Sustainable",
    icon: "/images/environment.png",
  },
  {
    id: 4,
    title: "Organic",
    icon: "/images/leaf.png",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-7xl px-4">
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6  py-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="relative w-12 h-12">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-sm font-semibold text-primary">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
