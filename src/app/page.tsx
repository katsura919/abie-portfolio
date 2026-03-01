import Hero from "@/components/sections/Hero";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Performance from "@/components/sections/Performance";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import DraggableSection from "@/components/sections/DraggableSection";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <Header />
      <div className="w-full relative">
        <Hero />
        <About />
                <DraggableSection />
        <Performance />
        <Services />
        <Portfolio />
      </div>
    </div>
  );
}
