import Hero from "@/components/sections/Hero";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Performance from "@/components/sections/Performance";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden font-sans lg:px-30 md:px-10 px-5">
      <Header />
      <Hero />
      <About />
      <Performance />
    </div>
  );
}
