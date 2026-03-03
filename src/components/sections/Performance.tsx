"use client";

import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const tickerItems = [
    '800K IG Reach (30d)',
    '1.7M Threads Reach',
    'High Saves & Shares',
    'Max Repost Velocity',
    'Strong TikTok Discovery',
    'Nomad Storytelling Niche',
    '800K IG Reach (30d)',
    '1.7M Threads Reach',
    'High Saves & Shares',
    'Max Repost Velocity',
    'Strong TikTok Discovery',
    'Nomad Storytelling Niche',
];

const stats = [
    { value: '800K', label: 'IG Reach (30d)' },
    { value: '1.7M', label: 'Threads Reach' },
    { value: 'High', label: 'Saves & Shares' },
    { value: 'Max', label: 'Repost Velocity' },
    { value: 'Strong', label: 'TikTok Discovery' },
    { value: 'Nomad', label: 'Storytelling Niche' },
];

export default function Performance() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.fromTo('.perform-label',
            { opacity: 0, y: 20 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: container.current, start: 'top 82%' }
            }
        );

        gsap.fromTo('.perform-left-reveal',
            { x: -40, opacity: 0 },
            {
                x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
                scrollTrigger: { trigger: '.perform-content', start: 'top 78%' }
            }
        );

        gsap.fromTo('.perform-stat-box',
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: '.perform-stats-grid', start: 'top 80%' }
            }
        );
    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative w-full bg-background overflow-hidden z-20"
        >
            {/* ── Marquee ticker strip ── */}
            <div className="w-full overflow-hidden border-y border-border/60 py-4 bg-secondary/30">
                <div className="flex whitespace-nowrap animate-marquee">
                    {tickerItems.map((item, i) => (
                        <span key={i} className="inline-flex items-center gap-4 mr-10 md:mr-16">
                            <span className="font-sans text-sm md:text-base font-bold uppercase tracking-widest text-foreground">
                                {item}
                            </span>
                            <span className="text-primary font-black text-base">✦</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Main content ── */}
            <div className="perform-content py-28 md:py-36 xl:py-44 max-w-[2200px] mx-auto w-full px-6 md:px-12 lg:px-20 xl:px-32">
                {/* Label */}
                <p className="perform-label font-serif italic text-muted-foreground text-base md:text-lg mb-10 md:mb-14">
                    02 — Platforms &amp; Stats
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-y-16 gap-x-8">

                    {/* Left */}
                    <div className="lg:col-span-4 xl:col-span-5 lg:pr-10 xl:pr-16">
                        <h2 className="perform-left-reveal font-sans text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-[5.5rem] font-black uppercase tracking-tighter text-foreground leading-[0.9]">
                            Platforms <br />
                            <span className="font-serif italic font-normal tracking-normal lowercase text-[0.85em] opacity-80">
                                &amp; Stats
                            </span>
                        </h2>
                        <p className="perform-left-reveal font-serif mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
                            A breakdown of reach, engagement, and audience alignment across key social channels. Story-driven content that fosters deep connection and consistent discovery.
                        </p>
                        <div className="perform-left-reveal mt-8 md:mt-10">
                            <a
                                href="mailto:hello@abiemaxey.com"
                                className="inline-flex items-center gap-4 bg-primary text-primary-foreground rounded-full pl-6 pr-1.5 py-1.5 hover:bg-primary/90 transition-all hover:scale-105 group"
                            >
                                <span className="font-sans uppercase tracking-widest font-bold text-xs sm:text-sm">Let&apos;s Work Together</span>
                                <div className="w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center">
                                    <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: stat grid */}
                    <div className="perform-stats-grid lg:col-span-8 xl:col-span-7 w-full lg:border-l border-border/80 lg:pl-4">
                        <div className="grid grid-cols-2 w-full">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`perform-stat-box flex flex-col justify-center py-10 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 border-border/80
                                    ${index % 2 === 0 ? 'border-r' : ''}
                                    ${index < stats.length - 2 ? 'border-b' : ''}
                                    group cursor-default hover:bg-secondary/30 transition-colors duration-300`}
                                >
                                    <h3 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-black tracking-tighter text-foreground mb-2 truncate sm:overflow-visible group-hover:text-primary transition-colors duration-300">
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
