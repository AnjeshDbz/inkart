"use client";

import Image from "next/image";

export default function CertifiedSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-10xl px-4 text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-4xl font-semibold text-primary mb-8">
          We Offer Certified Products
        </h2>

        {/* Single combined image */}
        <div className="flex justify-center">
          <Image
            src="/images/Certified.png"
            alt="Certified Logos"
            width={1200}
            height={300}
            priority
            className="w-full max-w-5xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
