"use client";

import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Dynamic Pinning
        ScrollTrigger.create({
            trigger: container.current,
            start: () => {
                // If content is taller than screen, let them scroll to bottom before pinning.
                // Otherwise pin at top immediately.
                if (container.current) {
                    return window.innerHeight < container.current.offsetHeight ? "bottom bottom" : "top top";
                }
                return "top top";
            },
            pin: true,
            pinSpacing: false, // Let the next section slide over it!
            invalidateOnRefresh: true, // Recalculate if window resizes!
        });

    }, { scope: container });

    return (
        <section ref={container} className="relative w-full bg-background overflow-hidden min-h-screen flex items-center pt-24 md:pt-0">
            <div className="relative h-full max-w-[2200px] mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex flex-col xl:grid xl:grid-cols-12 gap-10 xl:gap-8 items-center justify-center">

                {/* Left Content (Text) */}
                <div className="xl:col-span-5 flex flex-col justify-center z-10 order-2 xl:order-1 pt-0 xl:pt-0 w-full">
                    <div className="pointer-events-auto flex flex-col justify-center max-w-2xl mx-auto xl:mx-0 text-center xl:text-left">
                        <p className="hero-text-item text-base sm:text-lg md:text-xl xl:text-2xl mb-2 sm:mb-3 text-foreground font-serif opacity-90">Hey. I'm Abie,</p>
                        <h1 className="hero-text-item font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[90px] leading-[0.95] sm:leading-[0.9] font-bold uppercase tracking-tighter text-foreground mb-4">
                            The<br />Nomad<br />
                            <span className="font-serif italic lowercase text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[100px] font-normal tracking-normal opacity-90 block -mt-1 sm:-mt-2">& Systems</span>
                            Engineer
                        </h1>
                        <p className="hero-text-item font-serif mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg mx-auto xl:mx-0 text-muted-foreground font-medium">
                            I’m a digital nomad creator and systems engineer documenting how people actually rebuild their lives across borders → visas, relocation, systems, and identity ~ without pretending the process is frictionless.
                        </p>

                        <div className="hero-text-item mt-8 sm:mt-10 flex justify-center xl:justify-start">
                            <a href="mailto:hello@abiemaxey.com" className="inline-flex items-center gap-4 bg-primary text-primary-foreground rounded-full pl-6 sm:pl-8 pr-2 py-2 hover:bg-primary/90 transition-all hover:scale-105 group shadow-lg">
                                <span className="font-sans uppercase tracking-widest font-bold text-xs sm:text-sm">Contact Me</span>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-transform shadow-inner">
                                    <ArrowRight size={16} strokeWidth={2.5} className="sm:hidden group-hover:translate-x-1 transition-transform" />
                                    <ArrowRight size={18} strokeWidth={2.5} className="hidden sm:block group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Center Content (Image) */}
                <div className="xl:col-span-4 flex justify-center w-full z-0 order-1 xl:order-2 h-[40vh] sm:h-[50vh] md:h-[60vh] xl:h-[75vh] min-h-[320px] sm:min-h-[400px]">
                    <div className="w-[85%] sm:w-[60%] md:w-[50%] xl:w-full max-w-[450px] h-full rounded-[250px] overflow-hidden shadow-2xl border-4 border-background/50">
                        <img
                            src="/hero-image.jpg"
                            alt="Abie Maxey"
                            className="hero-img w-full h-full object-cover object-center scale-105"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>

                {/* Right Content (Stats) */}
                <div className="xl:col-span-3 grid grid-cols-2 xl:flex xl:flex-col justify-between items-start xl:items-end gap-x-6 gap-y-8 sm:gap-y-10 xl:gap-y-16 text-left xl:text-right z-10 order-3 w-full pb-12 sm:pb-16 xl:pb-0 px-4 sm:px-0">
                    <div className="hero-stat-item transform hover:scale-105 transition-transform cursor-default flex flex-col xl:items-end w-full">
                        <h3 className="font-sans font-bold tracking-tighter text-xl sm:text-2xl lg:text-3xl xl:text-[40px] leading-none mb-1 sm:mb-2 text-foreground">EUROPE</h3>
                        <p className="font-serif italic text-sm sm:text-base lg:text-xl text-muted-foreground opacity-90">Spain / EU / US</p>
                    </div>
                    <div className="hero-stat-item transform hover:scale-105 transition-transform cursor-default flex flex-col xl:items-end w-full">
                        <h3 className="font-sans font-bold tracking-tighter text-xl sm:text-2xl lg:text-3xl xl:text-[40px] leading-none mb-1 sm:mb-2 text-foreground">CREATOR</h3>
                        <p className="font-serif italic text-sm sm:text-base lg:text-xl text-muted-foreground opacity-90">TikTok · IG/FB</p>
                    </div>
                    <div className="hero-stat-item transform hover:scale-105 transition-transform cursor-default flex flex-col xl:items-end w-full">
                        <h3 className="font-sans font-bold tracking-tighter text-xl sm:text-2xl lg:text-3xl xl:text-[40px] leading-none mb-1 sm:mb-2 text-foreground">BLOG</h3>
                        <p className="font-serif italic text-sm sm:text-base lg:text-xl text-muted-foreground opacity-90">abiemaxey.com</p>
                    </div>
                    <div className="hero-stat-item transform hover:scale-105 transition-transform cursor-default flex flex-col xl:items-end w-full">
                        <h3 className="font-sans font-bold tracking-tighter text-xl sm:text-2xl lg:text-3xl xl:text-[40px] leading-none mb-1 sm:mb-2 text-foreground">CONTACT</h3>
                        <p className="font-serif italic text-sm sm:text-base lg:text-xl text-muted-foreground opacity-90">@abiemaxey</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
