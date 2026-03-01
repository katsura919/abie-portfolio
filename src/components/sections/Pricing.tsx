"use client";

import React, { useRef } from 'react';
import { ArrowRight, Check, Star, Shield, Zap, Mail } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ugcPackages = [
    {
        name: "Single Story",
        price: "$150",
        description: "Perfect for testing the waters or a quick brand shoutout.",
        features: ["1 UGC Video (up to 30s)", "Scripting & Hook Research", "1 Revision Included", "7-Day Delivery"],
        highlight: false
    },
    {
        name: "Triple Impact",
        price: "$400",
        description: "Standard bundle for testing hooks and variety.",
        features: ["3 UGC Videos", "Strategic Content Roadmap", "Raw Footage Access", "Commercial Usage Rights"],
        highlight: true
    },
    {
        name: "Authority Bundle",
        price: "Custom",
        description: "5+ videos or long-term content partnership.",
        features: ["Whitelisting Rights", "Recurring Monthly Content", "Priority Scheduling", "Dedicated Strategy Call"],
        highlight: false
    }
];

export default function Pricing() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Section Header Animation
        gsap.fromTo('.pricing-header',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.pricing-header',
                    start: 'top 85%',
                }
            }
        );

        // Cards Animation
        gsap.fromTo('.pricing-card',
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.pricing-grid',
                    start: 'top 80%',
                }
            }
        );

        // Engineering Block Animation
        gsap.fromTo('.engineering-block',
            { x: -40, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.engineering-block',
                    start: 'top 85%',
                }
            }
        );

    }, { scope: container });

    return (
        <section ref={container} id="pricing" className="relative w-full py-24 md:py-40 bg-background overflow-hidden z-20 border-t border-border/50">
            <div className="max-w-[2200px] mx-auto w-full px-8 md:px-16 lg:px-24 xl:px-32">

                {/* Section Header */}
                <div className="pricing-header max-w-4xl mb-16 md:mb-32">
                    <span className="font-serif italic text-xl md:text-2xl text-muted-foreground mb-4 block">05 — Services & Pricing</span>
                    <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground mb-8">
                        The<br />Pitch
                    </h2>
                    <p className="font-serif italic text-xl md:text-3xl text-foreground leading-snug max-w-2xl">
                        "I don’t sound like an ad. I understand systems deeply. I bring calm authority, not noise."
                    </p>
                </div>

                {/* Path A: UGC Services */}
                <div className="mb-24 md:mb-40">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-border/50"></div>
                        <h3 className="font-sans text-sm md:text-base font-bold uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
                            Path A: UGC Content Services
                        </h3>
                        <div className="h-px flex-1 bg-border/50"></div>
                    </div>

                    <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                        {ugcPackages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`pricing-card relative p-8 md:p-10 rounded-3xl border transition-all duration-500 hover:scale-[1.02]
                                ${pkg.highlight
                                        ? 'bg-secondary border-primary/50 shadow-2xl shadow-primary/5'
                                        : 'bg-background hover:bg-secondary/30 border-border/50'}
                                `}
                            >
                                {pkg.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h4 className="font-sans text-2xl font-bold text-foreground mb-2">{pkg.name}</h4>
                                    <div className="flex items-baseline gap-1">
                                        <span className="font-sans text-4xl font-bold text-primary">{pkg.price}</span>
                                        {pkg.price !== "Custom" && <span className="text-muted-foreground text-sm font-medium">/ bundle</span>}
                                    </div>
                                    <p className="mt-4 font-serif italic text-muted-foreground text-base leading-relaxed h-12">
                                        {pkg.description}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {pkg.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3 text-foreground/80 font-sans text-sm md:text-base">
                                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="mailto:hello@abiemaxey.com"
                                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 font-sans font-bold uppercase tracking-widest text-xs transition-all
                                    ${pkg.highlight
                                            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                            : 'bg-secondary text-foreground hover:bg-border/50 border border-border/50'}
                                    `}
                                >
                                    Select Package
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Path B: Systems Engineering */}
                <div className="engineering-block bg-secondary/50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 border border-border/50 relative overflow-hidden">
                    {/* Visual background element */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
                        <div>
                            <h3 className="font-sans text-sm md:text-base font-bold uppercase tracking-[0.3em] text-primary mb-8 block">
                                Path B: Systems Engineering
                            </h3>
                            <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground mb-8">
                                RevOps &<br />Automation
                            </h2>
                            <p className="font-serif italic text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                                Scalable infrastructure for companies at or near the $1M/mo milestone. Audits, custom CRM architecture, and automated delivery pipelines.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Zap size={20} />
                                    </div>
                                    <span className="font-sans font-bold text-sm">System Audits</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Shield size={20} />
                                    </div>
                                    <span className="font-sans font-bold text-sm">Revenue Ops</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Star size={20} />
                                    </div>
                                    <span className="font-sans font-bold text-sm">Custom Tooling</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <span className="font-sans font-bold text-sm">Async Delivery</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="bg-background/80 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-border/50 shadow-xl">
                                <h4 className="font-sans text-xl font-bold text-foreground mb-4">Inquire About Consulting</h4>
                                <p className="font-serif italic text-muted-foreground mb-8">
                                    Engineering projects are custom-scoped. I work with a limited number of high-impact clients per quarter to ensure deep architectural integrity.
                                </p>
                                <a
                                    href="mailto:hello@abiemaxey.com"
                                    className="inline-flex items-center gap-4 bg-primary text-primary-foreground rounded-full pl-8 pr-2 py-2 hover:bg-primary/90 transition-all hover:scale-105 group"
                                >
                                    <span className="font-sans uppercase tracking-[0.2em] font-bold text-xs">Request Audit</span>
                                    <div className="w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center">
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>
                            </div>

                            <p className="mt-8 font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                Partnership Flexibility: Paid UGC, Affiliates, & Custom Contracts.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
