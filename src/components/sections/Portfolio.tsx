"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import Script from 'next/script';

gsap.registerPlugin(ScrollTrigger);

const viralVideos = [
    {
        title: "Cultural Surprises: Croatia",
        embedUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
    },
    {
        title: "Cultural Surprises: Albania",
        embedUrl: "https://www.instagram.com/reel/DLMznGTs7Ux/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Using the same link as placeholder until provided
    },
    {
        title: "Realities of Travelling",
        embedUrl: "https://www.instagram.com/reel/DQfEfVDgsct/", // Using the same link as placeholder until provided
    }
];

const InstagramEmbed = ({ url }: { url: string }) => {
    useEffect(() => {
        // Trigger Instagram script to process the dom
        if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
        }
    }, [url]);

    return (
        <div className="flex justify-center w-full h-full pb-4">
            <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '400px',
                    minWidth: '326px',
                    padding: '0',
                    width: '100%',
                }}
            >
            </blockquote>
        </div>
    );
};

export default function Portfolio() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Fade in the entire grid container safely
        gsap.fromTo('.portfolio-grid',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.portfolio-grid',
                    start: "top 85%",
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="portfolio" className="relative w-full bg-background pt-24 md:pt-40 pb-12 md:pb-20 px-8 md:px-12 lg:px-20 xl:px-32 z-30">
            {/* Load Instagram Embed Script */}
            <Script async src="//www.instagram.com/embed.js" strategy="lazyOnload" />

            <div className="max-w-[2200px] mx-auto w-full">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-3xl">
                        <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">04 — Proof of Work</span>
                        <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground mb-6">
                            Portfolio &<br />Viral Content
                        </h2>
                        <p className="font-serif italic text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                            Visual evidence of reach, aesthetic realism, and high-converting storytelling.
                        </p>
                    </div>
                </div>

                {/* Video Grid */}
                <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-32 items-start opacity-0">
                    {viralVideos.map((video, index) => (
                        <div key={index} className="w-full transform transition-transform hover:scale-[1.02] duration-500">
                            <InstagramEmbed url={video.embedUrl} />
                        </div>
                    ))}
                </div>

                <div className="w-full h-px bg-border/50 mb-32"></div>

                {/* Engineering Case Studies / Blog Snippets */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Engineering Column */}
                    <div>
                        <h3 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12 flex items-center gap-4">
                            Engineering Impact
                        </h3>
                        <div className="space-y-12">
                            <div className="group relative border-l-2 border-primary/20 pl-8 hover:border-primary transition-colors">
                                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-background border-2 border-primary"></span>
                                <h4 className="font-sans text-2xl font-bold text-foreground mb-2">Appetiser Apps</h4>
                                <p className="font-sans font-bold text-sm uppercase tracking-widest text-primary mb-3">Service Delivery Scaling</p>
                                <p className="font-serif italic text-muted-foreground text-lg mb-4">
                                    Engineered the scalable systems backbone that supported revenue growth from $300k to $1M+ monthly.
                                </p>
                            </div>

                            <div className="group relative border-l-2 border-primary/20 pl-8 hover:border-primary transition-colors">
                                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-background border-2 border-primary"></span>
                                <h4 className="font-sans text-2xl font-bold text-foreground mb-2">Ohmyhome <span className="text-muted-foreground text-lg font-normal">(Nasdaq: OMH)</span></h4>
                                <p className="font-sans font-bold text-sm uppercase tracking-widest text-primary mb-3">Founding iOS Engineer</p>
                                <p className="font-serif italic text-muted-foreground text-lg mb-4">
                                    Built extreme-scale mobile infrastructure from the ground up, handling high-volume property transactions leading to Nasdaq listing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Column */}
                    <div>
                        <h3 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12 flex items-center gap-4">
                            Essays & Thinking
                        </h3>
                        <div className="space-y-8">
                            <a href="https://abiemaxey.com" target="_blank" rel="noopener noreferrer" className="block p-8 border border-border/50 rounded-2xl hover:border-primary/50 hover:bg-secondary/30 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-sans font-bold text-xs uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Systems</span>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <h4 className="font-sans text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Digital Identity & Restarting</h4>
                                <p className="font-serif italic text-muted-foreground text-base">Long-form narrative on digital nomad life, visas, identity, and the systems required to sustain it.</p>
                            </a>

                            <a href="https://abiemaxey.com" target="_blank" rel="noopener noreferrer" className="block p-8 border border-border/50 rounded-2xl hover:border-primary/50 hover:bg-secondary/30 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-sans font-bold text-xs uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Reality</span>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <h4 className="font-sans text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Quiet Ambition over Hustle</h4>
                                <p className="font-serif italic text-muted-foreground text-base">An analytical take on building continuity abroad rather than just 'traveling'.</p>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
