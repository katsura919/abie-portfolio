import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Performance from "@/components/sections/Performance";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import DraggableSection from "@/components/sections/DraggableSection";
import SwapySection from "@/components/sections/SwapySection";
import ExecutiveImpactSection from "@/components/sections/ProductsCarousel";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <Header />
      <div className="w-full relative">
        {/* Hero: sticky + fixed height on desktop; natural flow on mobile */}
        <div className="md:sticky md:top-0 z-0 md:h-screen">
          <Hero />
        </div>

        {/* All sections after Hero sit in a z-10 stack, covering the pinned Hero */}
        <div className="relative z-10">
          <About />
          {/* <DraggableSection />
          <SwapySection /> */}
          <Performance />
          <Services />
          <Portfolio />
          <Pricing />
          <ExecutiveImpactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
