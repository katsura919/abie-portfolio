import Image from "next/image";
import { ArrowRight, Menu } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] bg-[#E4E3DF] text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-[#E4E3DF] overflow-x-hidden font-sans lg:px-15">

      {/* Mobile Header */}
      <div className="md:hidden absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 w-full z-50 pointer-events-auto">
        <div className="flex items-center gap-3 tracking-widest text-lg font-bold uppercase">
          Abie Maxey
        </div>
        <button className="flex items-center gap-2 bg-[#232323] text-white rounded-full px-5 py-2.5 hover:bg-black transition-colors">
          <span className="font-sans uppercase tracking-widest font-semibold text-xs">Menu</span>
          <Menu size={16} />
        </button>
      </div>

      <div className="relative flex flex-col md:flex-row min-h-[100dvh] max-w-[2200px] mx-auto w-full pt-0">

        {/* Center Image - Flow normally on mobile, absolute on desktop */}
        <div className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 w-full px-8 sm:px-0 sm:w-[80%] md:w-[40vw] lg:w-[32vw] max-w-[600px] aspect-[4/5] md:aspect-auto md:h-[85vh] z-0 order-1 md:order-none md:mt-0 mx-auto">
          <div className="w-full h-full bg-[#d5d4d0] rounded-b-[250px] md:rounded-b-[500px] overflow-hidden shadow-sm">
            <img
              src="/hero-image.jpg"
              alt="Abie Maxey"
              className="w-full h-full object-cover object-center scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Left Content */}
        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center md:justify-between px-8 py-6 md:px-16 md:py-16 lg:px-24 xl:px-32 pointer-events-none order-2 md:order-none min-h-[60vh] md:min-h-0">

          {/* Logo - Desktop only */}
          <div className="hidden md:flex items-center gap-3 tracking-widest text-base font-bold uppercase pointer-events-auto">
            <div className="w-4 h-4 bg-[#1a1a1a] rounded-full"></div>
            Abie Maxey
          </div>

          {/* Main Text */}
          <div className="pointer-events-auto flex flex-col justify-center mt-4 md:mt-0">
            <p className="text-lg md:text-xl mb-2 text-[#1a1a1a] font-serif opacity-90">Hey. I'm Abie,</p>
            <h1 className="font-sans text-6xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-[85px] leading-[0.9] font-bold uppercase tracking-tighter text-[#1a1a1a]">
              The<br />Nomad<br />
              <span className="font-serif italic lowercase text-7xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-[100px] font-normal tracking-normal opacity-90">& Systems</span><br />
              Engineer
            </h1>
            <p className="font-serif mt-5 text-base sm:text-lg md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-[95%] sm:max-w-md text-[#333] font-medium">
              I’m a digital nomad creator and systems engineer documenting how people actually rebuild their lives across borders → visas, relocation, systems, and identity ~ without pretending the process is frictionless.
            </p>

            <div className="mt-8 md:mt-10">
              <a href="mailto:hello@abiemaxey.com" className="inline-flex items-center gap-4 bg-[#232323] text-[#E4E3DF] rounded-full pl-6 pr-1.5 py-1.5 hover:bg-black transition-all hover:scale-105 group">
                <span className="font-sans uppercase tracking-widest font-bold text-xs sm:text-sm">Contact Me</span>
                <div className="w-8 h-8 bg-white text-[#1a1a1a] rounded-full flex items-center justify-center transition-transform">
                  <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>

          <div className="hidden md:block"></div>
        </div>

        {/* Right Content */}
        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center md:justify-between items-center md:items-end px-8 py-16 md:px-16 md:py-16 lg:px-24 xl:px-32 pointer-events-none order-3 md:order-none">

          {/* Menu - Desktop only */}
          <div className="hidden md:block pointer-events-auto">
            <button className="flex items-center gap-3 bg-[#232323] text-white rounded-full px-6 py-3 hover:bg-black transition-all hover:scale-105">
              <span className="uppercase tracking-widest font-semibold text-xs">Menu</span>
              <Menu size={16} />
            </button>
          </div>

          {/* Stats / Info */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 text-center md:text-right pointer-events-auto mt-6 md:mt-0 items-center md:items-end">
            <div className="transform hover:scale-105 transition-transform cursor-default flex flex-col items-center md:items-end">
              <h3 className="font-sans font-bold tracking-tighter text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl leading-none mb-1 text-[#1a1a1a]">EUROPE</h3>
              <p className="font-serif italic text-base lg:text-lg text-[#555] opacity-90">Spain / EU / US</p>
            </div>
            <div className="transform hover:scale-105 transition-transform cursor-default flex flex-col items-center md:items-end">
              <h3 className="font-sans font-bold tracking-tighter text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl leading-none mb-1 text-[#1a1a1a]">CREATOR</h3>
              <p className="font-serif italic text-base lg:text-lg text-[#555] opacity-90">TikTok · IG/FB</p>
            </div>
            <div className="transform hover:scale-105 transition-transform cursor-default flex flex-col items-center md:items-end">
              <h3 className="font-sans font-bold tracking-tighter text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl leading-none mb-1 text-[#1a1a1a]">BLOG</h3>
              <p className="font-serif italic text-base lg:text-lg text-[#555] opacity-90">abiemaxey.com</p>
            </div>
            <div className="transform hover:scale-105 transition-transform cursor-default flex flex-col items-center md:items-end">
              <h3 className="font-sans font-bold tracking-tighter text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl leading-none mb-1 text-[#1a1a1a]">CONTACT</h3>
              <p className="font-serif italic text-base lg:text-lg text-[#555] opacity-90">@abiemaxey</p>
            </div>
          </div>

          <div className="hidden md:block"></div>
        </div>

      </div>
    </div>
  );
}
