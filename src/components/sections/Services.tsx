"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Video, Mic, Clapperboard, PenTool, Smartphone, ArrowRight } from "lucide-react";

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


            {/* Horizontal Track */}
            <div ref={scrollWrapperRef} className="flex h-full w-[400vw]">

                {/* Panel 1 (Context): What I Create */}
                <div className="w-screen h-full flex flex-col justify-center p-8 md:p-24 relative overflow-hidden bg-secondary">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">01</span>
                            <h2 className="font-sans text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground mb-8">
                                What I<br />Create
                            </h2>
                            <p className="font-serif italic text-2xl md:text-3xl text-muted-foreground leading-snug">
                                Authentic, relatable content prioritizing practical insight and calm intelligence.
                            </p>
                        </div>
                        <div className="border-l border-border/50 pl-8 md:pl-16">
                            <ul className="space-y-8 font-sans text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                                <li className="flex items-center gap-6"><Video className="w-10 h-10 text-primary flex-shrink-0" strokeWidth={1.5} /> <span>UGC-style vertical videos</span></li>
                                <li className="flex items-center gap-6"><Mic className="w-10 h-10 text-primary flex-shrink-0" strokeWidth={1.5} /> <span>Voiceover storytelling</span></li>
                                <li className="flex items-center gap-6"><Clapperboard className="w-10 h-10 text-primary flex-shrink-0" strokeWidth={1.5} /> <span>Aesthetic B-roll + talking head</span></li>
                                <li className="flex items-center gap-6"><PenTool className="w-10 h-10 text-primary flex-shrink-0" strokeWidth={1.5} /> <span>Scripted content</span></li>
                                <li className="flex items-center gap-6"><Smartphone className="w-10 h-10 text-primary flex-shrink-0" strokeWidth={1.5} /> <span>Native-feeling ads</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Panel 2: Pillar 1 - Digital Nomad Range */}
                <div className="w-screen h-full flex flex-col justify-center p-8 md:p-24 relative overflow-hidden bg-secondary">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">02</span>
                            <h2 className="font-sans text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground mb-8">
                                Digital Nomad<br />Range
                            </h2>
                            <p className="font-serif italic text-2xl md:text-3xl text-muted-foreground leading-snug">
                                Documenting the actual reality of rebuilding lives across borders.
                            </p>
                        </div>
                        <div className="border-l border-border/50 pl-8 md:pl-16">
                            <ul className="space-y-8 font-sans text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                                <li className="flex items-start gap-6"><ArrowRight className="w-10 h-10 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} /> <span>Visa processes & paperwork</span></li>
                                <li className="flex items-start gap-6"><ArrowRight className="w-10 h-10 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} /> <span>Living abroad solo</span></li>
                                <li className="flex items-start gap-6"><ArrowRight className="w-10 h-10 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} /> <span>Legal + admin realities</span></li>
                                <li className="flex items-start gap-6"><ArrowRight className="w-10 h-10 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} /> <span>Cost-of-living transparency</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Panel 3: Pillar 2 - Systems & Tools */}
                <div className="w-screen h-full flex flex-col justify-center p-8 md:p-24 bg-secondary">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">03</span>
                            <h2 className="font-sans text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground mb-8">
                                Systems &<br />Tools
                            </h2>
                            <p className="font-serif italic text-2xl md:text-3xl text-muted-foreground leading-snug">
                                The digital infrastructure behind a remote lifestyle.
                            </p>
                        </div>
                        <div className="flex flex-col gap-12 justify-center h-full border-l border-border/50 pl-8 md:pl-16">
                            <div>
                                <ul className="space-y-6 font-sans text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
                                    <li className="flex items-start gap-4"><ArrowRight className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={2} /> <span>Productivity tools (Notion, AI)</span></li>
                                    <li className="flex items-start gap-4"><ArrowRight className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={2} /> <span>Remote work workflows</span></li>
                                    <li className="flex items-start gap-4"><ArrowRight className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={2} /> <span>Digital organisation</span></li>
                                    <li className="flex items-start gap-4"><ArrowRight className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={2} /> <span>Creator systems</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Panel 4: Brand Alignment */}
                <div className="w-screen h-full flex flex-col justify-center p-8 md:p-24 bg-secondary border-l border-border/50">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">04</span>
                            <h2 className="font-sans text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground mb-8">
                                Brand<br />Alignment
                            </h2>
                            <p className="font-serif italic text-2xl md:text-3xl text-muted-foreground leading-snug">
                                I partner with brands that value credibility over hype, long-term trust, and true creator voice.
                            </p>
                        </div>
                        <div className="border-l border-border/50 pl-8 md:pl-16">
                            <p className="font-sans font-bold uppercase tracking-widest text-lg mb-8 text-foreground/70">Ideal Partnerships Include:</p>
                            <div className="flex flex-wrap gap-4 font-sans font-bold text-lg md:text-2xl">
                                <span className="bg-background px-8 py-4 text-foreground shadow-sm">SaaS & Digital Products</span>
                                <span className="bg-background px-8 py-4 text-foreground shadow-sm">Productivity Apps</span>
                                <span className="bg-background px-8 py-4 text-foreground shadow-sm">Visa & Relocation Tools</span>
                                <span className="bg-background px-8 py-4 text-foreground shadow-sm">Remote Platforms</span>
                                <span className="bg-background px-8 py-4 text-foreground shadow-sm">Travel Tech & Gear</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
