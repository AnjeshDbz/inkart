import HeroBanner from "./components/HeroBanner";
import ExploreByLocation from "./components/ExploreByLocation";
import FansTestimonials from "./components/FansTestimonials";
import TodaysDeal from "./components/TodaysDeal";
import LowestPrice from "./components/LowestPrice";
import Combos from "./components/Combos";
import HomeTextiles from "./components/HomeTextiles";
import HeroSlider from "./components/HeroSlider";
import HomemadeCookies from "./components/HomemadeCookies";
import FeatureStrip from "./components/FeatureStrip";
import RefinedOils from "./components/RefinedOils";
import CertifiedSection from "./components/CertifiedSection";
import OurBlogs from "./components/OurBlogs";
import CustomerFeedback from "./components/CustomerFeedback";

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

      <HomeTextiles />
      <HeroSlider />
      <HomemadeCookies />
      <FeatureStrip />
      <RefinedOils />
      <CertifiedSection />
      <OurBlogs />
      <CustomerFeedback />
      {/* Other sections */}

      <TodaysDeal />
    </>
  );
}
