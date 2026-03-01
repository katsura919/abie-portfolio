"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Instagram, Play } from 'lucide-react';
import Script from 'next/script';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const viralVideos = [
    {
        title: "Cultural Surprises: Croatia",
        embedUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
        imageUrl: "/hero-image.jpg" // Placeholder
    },
    {
        title: "Cultural Surprises: Albania",
        embedUrl: "https://www.instagram.com/reel/DLMznGTs7Ux/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        imageUrl: "/hero-image.jpg" // Placeholder
    },
    {
        title: "Realities of Travelling",
        embedUrl: "https://www.instagram.com/reel/DQfEfVDgsct/",
        imageUrl: "/hero-image.jpg" // Placeholder
    }
];

const VideoCard = ({ video }: { video: typeof viralVideos[0] }) => {
    return (
        <a
            href={video.embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] border border-border/50 hover:border-primary/50"
        >
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={video.imageUrl}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-black/40 transition-opacity duration-500 group-hover:opacity-80"></div>

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Instagram size={14} className="text-white" />
                <span className="text-white text-xs font-semibold tracking-wide">Reel</span>
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/80 group-hover:border-primary">
                    <Play fill="currentColor" size={24} className="text-white ml-1" />
                </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
                <h3 className="text-white font-sans text-xl lg:text-2xl font-bold leading-tight line-clamp-2 shadow-sm">{video.title}</h3>
                <div className="mt-3 flex items-center gap-2 text-white/70 text-sm group-hover:text-primary transition-colors font-medium">
                    <span>Watch on Instagram</span>
                    <ArrowUpRight size={16} />
                </div>
            </div>
        </a>
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
                <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-32 items-start opacity-0 px-4 sm:px-0 max-w-7xl mx-auto">
                    {viralVideos.map((video, index) => (
                        <div key={index} className="w-full sm:max-w-md mx-auto relative z-20">
                            <VideoCard video={video} />
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
