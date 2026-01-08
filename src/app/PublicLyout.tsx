import Filters from "../components/Filters";
import Hero from "../components/Hero";
import { Mapa } from "../components/Mapa";
import HotProducts from "../components/HotProducts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsletterSection from "../components/NewsletterSection";
import CtaSection from "../components/CtaSection";
import SlideCarousel from "../components/SlideSection";

export default function PublicLayout() {

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-6 pb-10">

      <Navbar />
      <Hero />

      <div className="mt-10 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <Filters />
        </div>

        <div className="w-full lg:w-3/4 flex flex-col gap-4">
          <Mapa />

          <HotProducts />
          <CtaSection />
          <SlideCarousel />
          <NewsletterSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
