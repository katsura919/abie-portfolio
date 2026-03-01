"use client";

import React, { useRef } from 'react';
import { ArrowUpRight, Instagram, Linkedin, FileText, Shield } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// TikTok icon (custom SVG since Lucide doesn't have it built-in)
const TikTok = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

export default function Footer() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Main Contact Header Animation
        gsap.fromTo('.contact-reveal',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.contact-section',
                    start: 'top 85%',
                }
            }
        );

        // Footer Bottom Links Animation
        gsap.fromTo('.footer-link-reveal',
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.05,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.footer-bottom',
                    start: 'top 95%',
                }
            }
        );
    }, { scope: container });

    return (
        <section ref={container} id="contact" className="relative w-full bg-background pt-24 md:pt-40 pb-8 z-30 overflow-hidden">
            <div className="max-w-[2200px] mx-auto w-full px-8 md:px-12 lg:px-20 xl:px-32">

                {/* Contact Section */}
                <div className="contact-section mb-24 md:mb-32">
                    <div className="contact-reveal mb-8">
                        <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">06 — Get In Touch</span>
                        <h2 className="font-sans text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.85] text-foreground transition-all duration-300 hover:text-primary">
                            <a href="mailto:hello@abiemaxey.com">Let's Talk.</a>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mt-16 lg:mt-24">
                        <div className="contact-reveal">
                            <p className="font-serif italic text-2xl md:text-3xl text-foreground leading-relaxed max-w-xl">
                                "I’m a digital nomad creator focused on visas, remote work, and rebuilding life abroad. I create UGC that feels real, thoughtful, and conversion-driven."
                            </p>
                        </div>

                        <div className="contact-reveal flex justify-start md:justify-end items-end">
                            <a
                                href="mailto:hello@abiemaxey.com"
                                className="group inline-flex items-center gap-4 border-b-2 border-primary pb-2 hover:border-foreground transition-colors"
                            >
                                <span className="font-sans text-2xl md:text-4xl font-bold text-foreground">hello@abiemaxey.com</span>
                                <ArrowUpRight className="w-8 h-8 text-primary group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Setup */}
                <div className="footer-bottom">
                    <div className="h-px w-full bg-border/50 mb-12"></div>

                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">

                        {/* Copyright */}
                        <div className="footer-link-reveal font-sans text-sm md:text-base font-medium text-muted-foreground order-3 lg:order-1">
                            © {new Date().getFullYear()} Abie Maxey. All rights reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-8 order-1 lg:order-2">
                            <a href="https://instagram.com/abiemaxey" target="_blank" rel="noopener noreferrer" className="footer-link-reveal group flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                                <span className="font-sans text-sm font-bold uppercase tracking-widest hidden sm:inline-block">Instagram</span>
                            </a>
                            <a href="https://tiktok.com/@happyvoyager" target="_blank" rel="noopener noreferrer" className="footer-link-reveal group flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                                <TikTok className="w-5 h-5" />
                                <span className="font-sans text-sm font-bold uppercase tracking-widest hidden sm:inline-block">TikTok</span>
                            </a>
                            <a href="https://linkedin.com/in/abiemaxey/" target="_blank" rel="noopener noreferrer" className="footer-link-reveal group flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                                <span className="font-sans text-sm font-bold uppercase tracking-widest hidden sm:inline-block">LinkedIn</span>
                            </a>
                        </div>

                        {/* Legal / Secondary Links */}
                        <div className="flex flex-wrap gap-6 lg:gap-8 order-2 lg:order-3">
                            <Link href="https://abiemaxey.com" target="_blank" className="footer-link-reveal group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                                <FileText className="w-4 h-4" />
                                <span className="font-sans text-sm font-medium">Blog</span>
                            </Link>
                            <Link href="/privacy" className="footer-link-reveal group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                                <Shield className="w-4 h-4" />
                                <span className="font-sans text-sm font-medium">Privacy Policy</span>
                            </Link>
                            <Link href="/terms" className="footer-link-reveal group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                                <FileText className="w-4 h-4" />
                                <span className="font-sans text-sm font-medium">Terms</span>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
