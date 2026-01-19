import { lowestPriceProducts, locations } from "./data/homepage";
import ProductCarousel from "./components/ProductCarousel";

import Image from "next/image";

import HeroBanner from "./components/HeroBanner";
import ExploreByLocation from "./components/ExploreByLocation";
import FansTestimonials from "./components/FansTestimonials";
import TodaysDeal from "./components/TodaysDeal";
import LowestPrice from "./components/LowestPrice";
import Combos from "./components/Combos";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroBanner />

      {/* Locations */}
      <ExploreByLocation />

      {/* Other sections */}
      <FansTestimonials />

      <LowestPrice />
      <Combos />
      {/* Other sections */}

      <TodaysDeal />
    </>
  );
}
