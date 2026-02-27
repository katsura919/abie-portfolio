"use client";

import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
    { value: "800K", label: "IG Reach (30d)" },
    { value: "1.7M", label: "Threads Reach" },
    { value: "High", label: "Saves & Shares" },
    { value: "Max", label: "Repost Velocity" },
    { value: "Strong", label: "TikTok Discovery" },
    { value: "Nomad", label: "Storytelling Niche" }
];

export default function Performance() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Headline and description coming from left
        gsap.fromTo('.perform-left-reveal',
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                }
            }
        );

        // Stats boxes staggering upwards
        gsap.fromTo('.perform-stat-box',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                }
            }
        );

        // Dynamic Pinning
        ScrollTrigger.create({
            trigger: container.current,
            start: () => {
                if (container.current) {
                    return window.innerHeight < container.current.offsetHeight ? "bottom bottom" : "top top";
                }
                return "top top";
            },
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
        });

    }, { scope: container });

    return (
        <section ref={container} className="relative w-full py-24 md:py-32 xl:py-40 bg-background overflow-hidden z-20 shadow-top rounded-t-3xl min-h-screen">
            <div className="max-w-[2200px] mx-auto w-full px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-16">

                    {/* Left Headline */}
                    <div className="lg:col-span-4 xl:col-span-5 lg:pr-10 xl:pr-16 z-10">
                        <div className="perform-left-reveal">
                            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-[5.5rem] font-bold uppercase tracking-tighter text-foreground leading-[0.9]">
                                Platforms <br className="hidden lg:block xl:block" />& Stats
                            </h2>
                        </div>
                        <p className="perform-left-reveal font-serif mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
                            A breakdown of reach, engagement, and audience alignment across key social channels. From long-form written storytelling to story-driven video content, my platforms foster deep connection and consistent discovery.
                        </p>
                        <div className="perform-left-reveal mt-8 md:mt-10">
                            <a href="mailto:hello@abiemaxey.com" className="inline-flex items-center gap-4 bg-primary text-primary-foreground rounded-full pl-6 pr-1.5 py-1.5 hover:bg-primary/90 transition-all hover:scale-105 group">
                                <span className="font-sans uppercase tracking-widest font-bold text-xs sm:text-sm">Let's Work Together</span>
                                <div className="w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-transform">
                                    <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Content Grid */}
                    <div className="lg:col-span-8 xl:col-span-7 w-full lg:border-l border-border/80 lg:pl-4">
                        <div className="grid grid-cols-2 w-full">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`perform-stat-box flex flex-col justify-center py-10 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-12 xl:px-20 border-border/80
                                    ${index % 2 === 0 ? 'border-r' : ''} 
                                    ${index < stats.length - 2 ? 'border-b' : ''}
                                    `}
                                >
                                    <h3 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold tracking-tighter text-foreground mb-2 pb-1 truncate sm:overflow-visible">
                                        {stat.value}
                                    </h3>
                                    <p className="font-serif text-base lg:text-lg text-muted-foreground">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
