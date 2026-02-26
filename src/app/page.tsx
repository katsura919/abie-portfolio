import Hero from "@/components/sections/Hero";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden font-sans lg:px-15">
      <Header />
      <Hero />
    </div>
  );
}
