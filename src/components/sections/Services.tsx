"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Video, Mic, Clapperboard, PenTool, Smartphone, ArrowRight, Settings, Code, Database, TrendingUp, Presentation } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export default function Services() {
    const containerRef = useRef<HTMLElement>(null);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);
    const [activePath, setActivePath] = useState<'decision' | 'creator' | 'engineer'>('decision');
    const [stInstance, setStInstance] = useState<ScrollTrigger | null>(null);

    useGSAP(() => {
        if (!containerRef.current || !scrollWrapperRef.current) return;

        // Total width of wrapper is 500vw (5 sections). Window width is 100vw.
        // Scroll amount is 400vw equivalent vertically.
        function getScrollAmount() {
            return -(scrollWrapperRef.current!.scrollWidth - window.innerWidth);
        }

        const tween = gsap.to(scrollWrapperRef.current, {
            x: getScrollAmount,
            ease: "none"
        });

        const st = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                const progress = self.progress;
                // Progress is 0 to 1 over the 4 scrolls.
                // 0 - 0.15 = decision
                // 0.15 - 0.6 = creator (panels 2, 3)
                // 0.6 - 1.0 = engineer (panels 4, 5)
                if (progress < 0.15) {
                    setActivePath('decision');
                } else if (progress < 0.6) {
                    setActivePath('creator');
                } else {
                    setActivePath('engineer');
                }
            }
        });

        setStInstance(st);

        return () => {
            st.kill();
        };

    }, { scope: containerRef });

    const jumpTo = (path: 'creator' | 'engineer') => {
        if (!stInstance) return;
        const start = stInstance.start;
        const end = stInstance.end;

        // Progress targets:
        // Creator = 1/4 of the way through the total scroll (Panel 2)
        // Engineer = 3/4 of the way through the total scroll (Panel 4)
        const targetProgress = path === 'creator' ? 0.25 : 0.75;

        const targetY = start + (end - start) * targetProgress;

        gsap.to(window, {
            scrollTo: targetY,
            duration: 1.5,
            ease: "power3.inOut"
        });
    };

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-background overflow-hidden z-20 shadow-top text-foreground">

            {/* Sticky Navigation Toggle (visible after initial decision) */}
            <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 flex items-center gap-2 p-1 rounded-full bg-secondary border border-border/50 shadow-xl ${activePath === 'decision' ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100 translate-y-0'}`}>
                <button
                    onClick={() => jumpTo('creator')}
                    className={`px-6 py-3 rounded-full font-bold text-sm md:text-base flex items-center gap-2 transition-colors ${activePath === 'creator' ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-foreground'}`}
                >
                    <Video className="w-5 h-5" />
                    Content Creator
                </button>
                <button
                    onClick={() => jumpTo('engineer')}
                    className={`px-6 py-3 rounded-full font-bold text-sm md:text-base flex items-center gap-2 transition-colors ${activePath === 'engineer' ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-foreground'}`}
                >
                    <Settings className="w-5 h-5" />
                    Systems Engineer
                </button>
            </div>

            {/* Horizontal Track */}
            <div ref={scrollWrapperRef} className="flex h-full w-[500vw]">

                {/* Panel 1 (The Hook): Content Developer vs Systems Engineer Split */}
                <div className="w-screen h-full flex flex-col md:flex-row relative bg-background">
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">
                        <span className="font-serif italic text-xl md:text-2xl text-muted-foreground block mb-2">01 — The Dual Expertise</span>
                        <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tighter uppercase text-foreground">Choose Your Path</h2>
                    </div>

                    {/* Left Split - Creator */}
                    <div className="w-full h-1/2 md:h-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-border/20 group hover:bg-secondary/50 transition-colors cursor-pointer" onClick={() => jumpTo('creator')}>
                        <Video className="w-16 h-16 md:w-24 md:h-24 text-primary mb-8 opacity-80 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                        <h3 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4 text-center">UGC &<br />Storytelling</h3>
                        <p className="font-serif italic text-muted-foreground text-center text-xl md:text-2xl">I need authentic content that converts.</p>
                    </div>

                    {/* Right Split - Engineer */}
                    <div className="w-full h-1/2 md:h-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 group hover:bg-secondary/50 transition-colors cursor-pointer" onClick={() => jumpTo('engineer')}>
                        <Settings className="w-16 h-16 md:w-24 md:h-24 text-primary mb-8 opacity-80 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                        <h3 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4 text-center">Systems &<br />RevOps</h3>
                        <p className="font-serif italic text-muted-foreground text-center text-xl md:text-2xl">I need scalable revenue architecture.</p>
                    </div>
                </div>

                {/* Panel 2 (Creator): What I Create */}
                <div className="w-screen h-full flex flex-col justify-center p-8 md:p-24 relative overflow-hidden bg-secondary border-l border-border/50">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">Path A</span>
                            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground mb-8 break-words">
                                Content<br />Creation
                            </h2>
                            <p className="font-sans font-bold text-2xl md:text-3xl text-primary leading-snug mb-6">
                                1.7M+ Threads Reach | 800k+ IG Reach
                            </p>
                            <p className="font-serif italic text-xl md:text-2xl text-muted-foreground leading-snug max-w-lg">
                                In a sea of over-polished, fake-feeling ads, my content builds credibility through aesthetic realism.
                            </p>
                        </div>
                        <div className="border-l border-border/50 pl-8 md:pl-16">
                            <ul className="space-y-8 font-sans text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
                                <li className="flex items-center gap-6"><Video className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={2} /> <span>UGC-style vertical videos</span></li>
                                <li className="flex items-center gap-6"><Mic className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={2} /> <span>Voiceover storytelling</span></li>
                                <li className="flex items-center gap-6"><Clapperboard className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={2} /> <span>Aesthetic B-roll + talking head</span></li>
                                <li className="flex items-center gap-6"><PenTool className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={2} /> <span>Scripted & semi-scripted content</span></li>
                                <li className="flex items-center gap-6"><Smartphone className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={2} /> <span>Native-feeling conversion ads</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Panel 3 (Creator): Content Pillars & Brands */}
                <div className="w-screen h-full flex flex-col justify-center p-8 md:p-24 relative overflow-hidden bg-secondary">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground mb-8 break-words">
                                Nomadic<br />Narratives
                            </h2>
                            <p className="font-serif italic text-2xl md:text-3xl text-muted-foreground leading-snug">
                                Documenting the actual reality of rebuilding lives across borders.
                            </p>
                        </div>
                        <div className="flex flex-col gap-12 justify-center h-full border-l border-border/50 pl-8 md:pl-16">
                            <div>
                                <p className="font-sans font-bold uppercase tracking-widest text-lg mb-6 text-foreground/70">Content Pillars:</p>
                                <ul className="space-y-6 font-sans text-xl md:text-2xl font-bold tracking-tight text-foreground">
                                    <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={2} /> <span>Visa processes, living abroad solo, legal realties.</span></li>
                                    <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={2} /> <span>Digital infrastructure and remote lifestyle tools.</span></li>
                                    <li className="flex items-start gap-4"><ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={2} /> <span>Reinvention, resilience, and quiet ambition over hustle culture.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Panel 4 (Engineer): Engineering & RevOps */}
                <div className="w-screen h-full flex flex-col justify-center p-8 md:p-24 bg-background border-l border-border/50">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">Path B</span>
                            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground mb-8 break-words">
                                Revenue<br />Architecture
                            </h2>
                            <p className="font-sans font-bold text-2xl md:text-3xl text-primary leading-snug mb-6">
                                Scaled systems to support $12M ARR
                            </p>
                            <p className="font-serif italic text-xl md:text-2xl text-muted-foreground leading-snug max-w-lg">
                                I don't just 'manage' processes. I engineer the infrastructure that allows companies to scale.
                            </p>
                        </div>
                        <div className="border-l border-border/50 pl-8 md:pl-16">
                            <ul className="space-y-8 font-sans text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
                                <li className="flex items-center gap-6"><Database className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={2} /> <span>Systems Architecture</span></li>
                                <li className="flex items-center gap-6"><Code className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={2} /> <span>Custom CRM-to-Delivery Automation</span></li>
                                <li className="flex items-center gap-6"><TrendingUp className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={2} /> <span>Revenue Operations (RevOps)</span></li>
                                <li className="flex items-center gap-6"><Presentation className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={2} /> <span>Product Discovery & Client Success</span></li>
                                <li className="flex items-center gap-6"><Settings className="w-8 h-8 text-primary flex-shrink-0" strokeWidth={2} /> <span>Low-code Applications (Coda, Zapier)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Panel 5 (Engineer): Impact & Case Studies */}
                <div className="w-screen h-full flex flex-col justify-center p-8 md:p-24 bg-background">
                    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground mb-8 break-words">
                                Engineering<br />Impact
                            </h2>
                            <p className="font-serif italic text-2xl md:text-3xl text-muted-foreground leading-snug">
                                Standing at the intersection of technical architecture and business strategy.
                            </p>
                        </div>
                        <div className="border-l border-border/50 pl-8 md:pl-16">
                            <p className="font-sans font-bold uppercase tracking-widest text-lg mb-8 text-foreground/70">Track Record:</p>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-sans text-2xl font-bold text-foreground">Appetiser Apps</h4>
                                    <p className="font-serif italic text-muted-foreground text-lg">Engineered systems backbone scaling revenue from $300k to $1M+ monthly. Standardized delivery across internal departments.</p>
                                </div>
                                <div>
                                    <h4 className="font-sans text-2xl font-bold text-foreground">Ohmyhome (Nasdaq: OMH)</h4>
                                    <p className="font-serif italic text-muted-foreground text-lg">Founding iOS Engineer. Designed and maintained scalable mobile architecture that handled high-volume property transactions.</p>
                                </div>
                                <div>
                                    <h4 className="font-sans text-2xl font-bold text-foreground">Accenture</h4>
                                    <p className="font-serif italic text-muted-foreground text-lg">SAP ABAP Engineer. Developed custom enterprise integration solutions for UK market clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
