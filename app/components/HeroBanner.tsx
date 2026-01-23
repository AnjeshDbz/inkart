import Link from "next/link";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="mx-auto w-full md:max-w-[1500px] px-4 py-8">
      {/* Fixed overall height */}
      <div className="flex flex-col lg:flex-row gap-3 lg:h-[520px]">
        
        {/* ================= LEFT HERO ================= */}
        <div className="relative flex-[2] h-[320px] lg:h-full rounded-2xl overflow-hidden group">
          <Image
            src="/images/hero/main-hero.jpg"
            alt="Hero background"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-between px-6 md:px-10 py-8 text-white max-w-[520px]">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                Turn your House <br />
                into a <span className="uppercase text-secondary">HOME</span>
              </h1>

              <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed">
                Discover unique, thoughtfully crafted home décor pieces that are
                made for everyday living.
              </p>
            </div>

            <Link
              href="/products"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg
                         bg-white/20 backdrop-blur px-6 py-3 text-sm font-semibold
                         text-white hover:bg-white/30 transition border border-white/30"
            >
              Explore Now →
            </Link>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="flex flex-1 flex-col gap-3 h-[320px] lg:h-full">

          {/* REAL FLAVOR */}
          <div className="relative flex-1 rounded-2xl overflow-hidden shadow-card group">
            <Image
              src="/images/hero/flavors.jpg"
              alt="Real Flavor"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
            <div className="relative z-10 flex flex-col justify-end p-5 max-w-[75%] h-full">
              <h3 className="text-sm font-bold leading-snug text-gray-900">
                Real Flavor, <br /> Pure Ingredients.
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed font-medium">
                Handcrafted in small batches using organic ingredients.
              </p>
            </div>
          </div>

          {/* PROMO ROW */}
          <div className="flex flex-1 gap-3">
            {/* LEFT STACK */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="relative flex-1 rounded-2xl shadow-card bg-[#FD6615] overflow-hidden group flex items-center justify-center">
                <Image
                  src="/images/hero/buy2get1.png"
                  alt="Buy 2 Get 1 Free"
                  width={120}
                  height={70}
                  className="object-contain transition-transform group-hover:scale-110"
                />
              </div>

              <div className="relative flex-1 rounded-2xl shadow-card bg-[#28ae14] overflow-hidden group flex items-center justify-center">
                <Image
                  src="/images/hero/super-deal.png"
                  alt="Super Deal Buy 1 Get 1"
                  width={120}
                  height={70}
                  className="object-contain transition-transform group-hover:scale-110"
                />
              </div>
            </div>

            {/* HOME FRAGRANCES */}
            <div className="relative flex-1 rounded-2xl overflow-hidden shadow-card group">
              <Image
                src="/images/hero/fragrance.jpg"
                alt="Home Fragrances"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors flex items-end p-5">
                <h3 className="text-white font-semibold text-base leading-tight tracking-wide">
                  Home <br /> FRAGRANCES
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
