"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Services() {
    const containerRef = useRef<HTMLElement>(null);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !scrollWrapperRef.current) return;

        // Calculate how far to translate horizontally.
        function getScrollAmount() {
            return -(scrollWrapperRef.current!.scrollWidth - window.innerWidth);
        }

        const tween = gsap.to(scrollWrapperRef.current, {
            x: getScrollAmount,
            ease: "none"
        });

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-background overflow-hidden z-20 shadow-top text-foreground">

            {/* Sticky Section Title (Floats over the scrolling track to provide context) */}
            <div className="absolute top-8 md:top-12 lg:top-16 left-0 w-full z-30 pointer-events-none px-8 md:px-24">
                <div className="max-w-6xl mx-auto w-full">
                    <span className="font-sans font-bold tracking-widest uppercase text-sm md:text-base text-muted-foreground/80 flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-primary rounded-full"></span> My Services
                    </span>
                </div>
            </div>

            {/* Horizontal Track */}
            <div ref={scrollWrapperRef} className="flex h-full w-[400vw]">

                {/* Panel 1 (Context): What I Create */}
                <div className="w-screen h-full flex flex-col justify-center p-8 md:p-24 relative overflow-hidden bg-secondary">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">01</span>
                            <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-foreground">What I Create</h2>
                            <p className="font-serif text-xl md:text-2xl mb-8 text-muted-foreground">Authentic, relatable content prioritizing practical insight and calm intelligence.</p>
                            <ul className="space-y-4 font-sans text-lg md:text-xl font-medium text-foreground">
                                <li className="flex items-start gap-4"><span className="text-xl">🎥</span> UGC-style vertical videos (15–60s)</li>
                                <li className="flex items-start gap-4"><span className="text-xl">🎙</span> Voiceover storytelling</li>
                                <li className="flex items-start gap-4"><span className="text-xl">🎬</span> Aesthetic B-roll + talking head</li>
                                <li className="flex items-start gap-4"><span className="text-xl">✍️</span> Scripted or semi-scripted content</li>
                                <li className="flex items-start gap-4"><span className="text-xl">📱</span> Native-feeling ads (not "commercial")</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Panel 2: Pillar 1 - Digital Nomad Range */}
                <div className="w-screen h-full flex flex-col justify-center p-8 md:p-24 relative overflow-hidden bg-secondary">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">02</span>
                            <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-foreground">Digital Nomad Range</h2>
                            <p className="font-serif text-xl md:text-2xl mb-8 text-muted-foreground">Documenting the actual reality of rebuilding lives across borders.</p>
                            <ul className="space-y-4 font-sans text-lg md:text-xl font-medium text-foreground">
                                <li className="flex items-start gap-4"><span className="text-primary mt-1">→</span> Visa processes (Spain DNV, EU paperwork)</li>
                                <li className="flex items-start gap-4"><span className="text-primary mt-1">→</span> Living abroad solo & Cost-of-living transparency</li>
                                <li className="flex items-start gap-4"><span className="text-primary mt-1">→</span> Legal + admin realities</li>
                                <li className="flex items-start gap-4"><span className="text-primary mt-1">→</span> Airbnb & apartment tours (real-life context)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Panel 3: Pillar 2 - Systems & Tools */}
                <div className="w-screen h-full flex flex-col justify-center p-8 md:p-24 bg-secondary">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">03</span>
                            <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-foreground">Systems & Tools</h2>
                            <p className="font-serif text-xl md:text-2xl mb-8 text-muted-foreground">The digital infrastructure behind a remote lifestyle.</p>
                            <ul className="space-y-4 font-sans text-lg md:text-xl font-medium text-foreground">
                                <li className="flex items-start gap-4"><span className="text-primary mt-1">→</span> Productivity tools (Notion, Coda, AI tools)</li>
                                <li className="flex items-start gap-4"><span className="text-primary mt-1">→</span> Remote work workflows</li>
                                <li className="flex items-start gap-4"><span className="text-primary mt-1">→</span> Digital organisation</li>
                                <li className="flex items-start gap-4"><span className="text-primary mt-1">→</span> Creator systems</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-8 justify-center h-full border-l border-border/50 pl-8 md:pl-16">
                            <div>
                                <h3 className="font-sans text-2xl font-bold tracking-tight uppercase mb-4 text-foreground">Target Audience:</h3>
                                <ul className="space-y-2 font-serif text-lg md:text-xl text-muted-foreground">
                                    <li>🌍 Digital nomads & remote workers</li>
                                    <li>🧳 Aspiring expats & retirees</li>
                                    <li>🧠 Creators, freelancers, solopreneurs</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-sans text-2xl font-bold tracking-tight uppercase mb-4 text-foreground">Audience Values:</h3>
                                <p className="font-serif italic text-xl md:text-2xl text-muted-foreground">
                                    Authenticity · Depth · Practical insight · Calm intelligence
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Panel 4: Brand Alignment */}
                <div className="w-screen h-full flex items-center justify-center p-8 md:p-24 bg-secondary border-l border-border/50">
                    <div className="max-w-5xl mx-auto w-full text-center">
                        <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">04</span>
                        <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-8 text-foreground">Brand Alignment</h2>
                        <p className="font-serif text-2xl md:text-3xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            I partner with brands that value credibility over hype, long-term trust, and true creator voice.
                        </p>

                        <div className="flex flex-col items-center">
                            <p className="font-sans font-bold uppercase tracking-widest text-sm mb-6 text-foreground">Ideal Partnerships Include:</p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-sans font-bold">
                                <span className="bg-neutral-100 dark:bg-neutral-900 px-6 py-3 rounded-full text-foreground shadow-sm hover:scale-105 transition-transform cursor-default">SaaS & Digital Products</span>
                                <span className="bg-neutral-100 dark:bg-neutral-900 px-6 py-3 rounded-full text-foreground shadow-sm hover:scale-105 transition-transform cursor-default">Productivity Apps</span>
                                <span className="bg-neutral-100 dark:bg-neutral-900 px-6 py-3 rounded-full text-foreground shadow-sm hover:scale-105 transition-transform cursor-default">Visa & Relocation Tools</span>
                                <span className="bg-neutral-100 dark:bg-neutral-900 px-6 py-3 rounded-full text-foreground shadow-sm hover:scale-105 transition-transform cursor-default">Remote Platforms</span>
                                <span className="bg-neutral-100 dark:bg-neutral-900 px-6 py-3 rounded-full text-foreground shadow-sm hover:scale-105 transition-transform cursor-default">Travel Tech & Gear</span>
                                <span className="bg-neutral-100 dark:bg-neutral-900 px-6 py-3 rounded-full text-foreground shadow-sm hover:scale-105 transition-transform cursor-default">Short-term Housing</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
