import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Performance from "@/components/sections/Performance";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import ProductsCarousel from "@/components/ui/executive-impact-carousel";
export default function Home() {
  return (
    <div className="relative min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <Header />

      {/* Hero: full-viewport, flows naturally */}
      <Hero />

      {/* All other sections stack with shadow-top + rounded-t-3xl for that "stacking card" reveal effect */}
      <About />
      <Performance />
      <Services />
      <Portfolio />
      <Pricing />
      <ProductsCarousel />
      <Footer />
    </div>
  );
}
