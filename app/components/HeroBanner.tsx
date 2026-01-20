import Link from "next/link";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="mx-auto w-full md:md:max-w-10xl px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-3">
        {/* ================= LEFT HERO ================= */}
        <div
          className="relative flex-[2] lg:min-h-[450px] min-h-[300px] rounded-2xl overflow-hidden
                     bg-cover bg-no-repeat bg-center py-8 px-4"
          style={{ backgroundImage: "url('/images/hero/main-hero.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between px-6 md:px-10 text-white max-w-[520px]">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                Turn your House <br />
                into a <span className="uppercase">HOME</span>
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
                         text-white hover:bg-white/30 transition"
            >
              Explore →
            </Link>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="flex flex-col flex-1 gap-3">
          {/* REAL FLAVOR – FIXED TEXT ALIGNMENT */}
          <div
            className="min-h-[180px] rounded-2xl overflow-hidden shadow-card
                       bg-cover bg-no-repeat bg-center flex"
            style={{ backgroundImage: "url('/images/hero/flavors.jpg')" }}
          >
            <div className="flex flex-col justify-end p-5 max-w-[75%]">
              <h3 className="text-sm font-semibold leading-snug">
                Real Flavor, <br /> Pure Ingredients.
              </h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Handcrafted in small batches using organic ingredients.
              </p>
            </div>
          </div>

          {/* PROMO ROW */}
          <div className="flex gap-3">
            {/* LEFT STACK */}
            <div className="flex flex-col gap-3 flex-1">
              {/* BUY 2 GET 1 */}
              <div
                className="flex-1 rounded-2xl shadow-card bg-[#FD6615]
                              flex items-center justify-center"
              >
                <Image
                  src="/images/hero/buy2get1.png"
                  alt="Buy 2 Get 1 Free"
                  width={120}
                  height={70}
                  className="object-contain"
                  priority
                />
              </div>

              {/* SUPER DEAL */}
              <div
                className="flex-1 rounded-2xl shadow-card bg-[#28AE14]
                              flex items-center justify-center"
              >
                <Image
                  src="/images/hero/super-deal.png"
                  alt="Super Deal Buy 1 Get 1"
                  width={120}
                  height={70}
                  className="object-contain"
                />
              </div>
            </div>

            {/* HOME FRAGRANCES – FIXED ALIGNMENT */}
            <div
              className="flex-1 rounded-2xl overflow-hidden shadow-card
                         bg-cover bg-no-repeat bg-center relative"
              style={{ backgroundImage: "url('/images/hero/fragrance.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/45 flex items-end p-5">
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
