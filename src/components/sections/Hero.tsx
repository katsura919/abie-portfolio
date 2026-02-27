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
        const tl = gsap.timeline({
            defaults: { ease: 'power3.out' },
            scrollTrigger: {
                trigger: container.current,
                start: 'top bottom', // Start playing when the top of the hero hits the bottom of the viewport
                end: 'bottom top',   // End when the bottom of the hero hits the top of the viewport
                toggleActions: "play reverse play reverse" // Play forward when entering, reverse when leaving (scrolling down past it), play forward when re-entering from the bottom, reverse when leaving from the top.
            }
        });

        // Initial setup to prevent flash of unstyled content
        gsap.set('.hero-img', { opacity: 0 });
        gsap.set('.hero-text-item', { y: 40, opacity: 0 });
        gsap.set('.hero-stat-item', { x: 30, opacity: 0 });

        // Animation sequence (Entry)
        tl.to('.hero-img', {
            opacity: 1,
            duration: 1.5,
            ease: 'power4.out',
        })
            .to('.hero-text-item', {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
            }, "-=1.1")
            .to('.hero-stat-item', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
            }, "-=0.9");

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
        <section ref={container} className="relative w-full bg-background overflow-hidden min-h-screen">
            <div className="relative flex flex-col md:flex-row h-full max-w-[2200px] mx-auto w-full pt-0">

                {/* Center Image - Flow normally on mobile, absolute on desktop */}
                <div className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 w-full px-8 sm:px-0 sm:w-[80%] md:w-[40vw] lg:w-[32vw] max-w-[600px] aspect-[4/5] md:aspect-auto md:h-[85vh] z-0 order-1 md:order-none md:mt-0 mx-auto">
                    <div className="w-full h-full rounded-b-[250px] md:rounded-b-[500px] overflow-hidden ">
                        <img
                            src="/hero-image.jpg"
                            alt="Abie Maxey"
                            className="hero-img w-full h-full object-cover object-center scale-105"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>

                {/* Left Content */}
                <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center md:justify-between px-8 py-6 md:px-16 md:py-16 lg:px-24 xl:px-32 pointer-events-none order-2 md:order-none min-h-[60vh] md:min-h-0">
                    <div className="hidden md:block h-20"></div> {/* Spacer for desktop logo area */}

                    {/* Main Text */}
                    <div className="pointer-events-auto flex flex-col justify-center mt-4 md:mt-0">
                        <p className="hero-text-item text-lg md:text-xl mb-2 text-foreground font-serif opacity-90">Hey. I'm Abie,</p>
                        <h1 className="hero-text-item font-sans text-6xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-[85px] leading-[0.9] font-bold uppercase tracking-tighter text-foreground">
                            The<br />Nomad<br />
                            <span className="font-serif italic lowercase text-7xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-[100px] font-normal tracking-normal opacity-90">& Systems</span><br />
                            Engineer
                        </h1>
                        <p className="hero-text-item font-serif mt-5 text-base sm:text-lg md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-[95%] sm:max-w-md text-muted-foreground font-medium">
                            I’m a digital nomad creator and systems engineer documenting how people actually rebuild their lives across borders → visas, relocation, systems, and identity ~ without pretending the process is frictionless.
                        </p>

                        <div className="hero-text-item mt-8 md:mt-10">
                            <a href="mailto:hello@abiemaxey.com" className="inline-flex items-center gap-4 bg-primary text-primary-foreground rounded-full pl-6 pr-1.5 py-1.5 hover:bg-primary/90 transition-all hover:scale-105 group">
                                <span className="font-sans uppercase tracking-widest font-bold text-xs sm:text-sm">Contact Me</span>
                                <div className="w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-transform">
                                    <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:block"></div>
                </div>

                {/* Right Content */}
                <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center md:justify-between items-center md:items-end px-8 py-16 md:px-16 md:py-16 lg:px-24 xl:px-32 pointer-events-none order-3 md:order-none">
                    <div className="hidden md:block h-20"></div> {/* Spacer for desktop menu area */}

                    {/* Stats / Info */}
                    <div className="grid grid-cols-2 md:flex md:flex-col gap-x-4 gap-y-10 md:gap-10 text-center md:text-right pointer-events-auto mt-10 md:mt-0 w-full md:w-auto px-4 md:px-0">
                        <div className="hero-stat-item transform hover:scale-105 transition-transform cursor-default flex flex-col items-center md:items-end">
                            <h3 className="font-sans font-bold tracking-tighter text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl leading-none mb-1 text-foreground">EUROPE</h3>
                            <p className="font-serif italic text-base lg:text-lg text-muted-foreground opacity-90">Spain / EU / US</p>
                        </div>
                        <div className="hero-stat-item transform hover:scale-105 transition-transform cursor-default flex flex-col items-center md:items-end">
                            <h3 className="font-sans font-bold tracking-tighter text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl leading-none mb-1 text-foreground">CREATOR</h3>
                            <p className="font-serif italic text-base lg:text-lg text-muted-foreground opacity-90">TikTok · IG/FB</p>
                        </div>
                        <div className="hero-stat-item transform hover:scale-105 transition-transform cursor-default flex flex-col items-center md:items-end">
                            <h3 className="font-sans font-bold tracking-tighter text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl leading-none mb-1 text-foreground">BLOG</h3>
                            <p className="font-serif italic text-base lg:text-lg text-muted-foreground opacity-90">abiemaxey.com</p>
                        </div>
                        <div className="hero-stat-item transform hover:scale-105 transition-transform cursor-default flex flex-col items-center md:items-end">
                            <h3 className="font-sans font-bold tracking-tighter text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl leading-none mb-1 text-foreground">CONTACT</h3>
                            <p className="font-serif italic text-base lg:text-lg text-muted-foreground opacity-90">@abiemaxey</p>
                        </div>
                    </div>

                    <div className="hidden md:block"></div>
                </div>

            </div>
        </section>
    );
}
