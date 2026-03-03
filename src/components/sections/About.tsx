"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const pillars = [
    {
        title: 'Storytelling',
        body: 'I speak to people who don\'t just travel, they move, adapt, and build continuity abroad.',
    },
    {
        title: 'Practical Insight',
        body: 'Navigating visas, relocation, systems, and identity — without pretending the process is frictionless.',
    },
    {
        title: 'Aesthetic Realism',
        body: 'I create content that feels human, thoughtful, and credible — not over-polished ads.',
    },
];

export default function About() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Section label + headline scroll-scrub reveal
        gsap.fromTo('.about-label',
            { opacity: 0, y: 20 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: container.current, start: 'top 82%' }
            }
        );

        // Large body text: each word clips up as you scroll
        const words = gsap.utils.toArray<HTMLElement>('.about-word');
        gsap.fromTo(words,
            { opacity: 0.1 },
            {
                opacity: 1,
                ease: 'none',
                stagger: 0.04,
                scrollTrigger: {
                    trigger: '.about-body-text',
                    start: 'top 75%',
                    end: 'bottom 60%',
                    scrub: 0.8,
                },
            }
        );

        // Pillars stagger
        gsap.fromTo('.about-pillar',
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.about-pillars', start: 'top 80%' }
            }
        );

        // Image reveal
        gsap.fromTo('.about-img-reveal',
            { scale: 1.06, opacity: 0 },
            {
                scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out',
                scrollTrigger: { trigger: container.current, start: 'top 75%' }
            }
        );
    }, { scope: container });

    // Split text into individual word spans for the opacity scrub
    const paragraph = "I'm a digital nomad creator and systems engineer documenting how people actually rebuild their lives across borders. Visas, relocation, remote systems, and identity — without pretending the process is frictionless.";
    const words = paragraph.split(' ');

    return (
        <section
            ref={container}
            id="about"
            className="relative w-full py-28 md:py-36 xl:py-44 bg-background overflow-hidden z-10"
        >
            <div className="max-w-[2200px] mx-auto w-full px-6 md:px-12 lg:px-20 xl:px-32">

                {/* Section label */}
                <p className="about-label font-serif italic text-muted-foreground text-base md:text-lg mb-10 md:mb-14">
                    01 — About
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left col */}
                    <div className="lg:col-span-7">
                        {/* Headline */}
                        <h2 className="font-sans text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-black uppercase tracking-tighter text-foreground leading-[0.9] max-w-3xl">
                            Digital Nomad <br />
                            <span className="font-serif italic font-normal tracking-normal lowercase opacity-80">
                                &amp; Systems
                            </span>{' '}
                            Engineer
                        </h2>

                        {/* Scroll-scrubbed body text */}
                        <p className="about-body-text mt-8 md:mt-10 font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-snug max-w-2xl">
                            {words.map((word, i) => (
                                <span key={i} className="about-word inline-block mr-[0.28em]">
                                    {word}
                                </span>
                            ))}
                        </p>

                        {/* Pillars */}
                        <div className="about-pillars mt-16 md:mt-20 w-full">
                            <div className="w-full h-px bg-border/80" />
                            {pillars.map((p, i) => (
                                <React.Fragment key={i}>
                                    <div className="about-pillar py-6 md:py-8 group cursor-default">
                                        <h3 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-tighter text-foreground mb-2">
                                            {p.title}
                                        </h3>
                                        <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl transition-colors duration-300 group-hover:text-foreground">
                                            {p.body}
                                        </p>
                                    </div>
                                    <div className="w-full h-px bg-border/80" />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Right: sticky image */}
                    <div className="lg:col-span-5 relative w-full pb-10">
                        <div className="about-img-reveal lg:sticky lg:top-32 w-full aspect-[4/5] sm:aspect-[3/4] lg:h-[80vh] max-h-[820px] ml-auto rounded-2xl md:rounded-[32px] overflow-hidden bg-muted">
                            <img
                                src="https://res.cloudinary.com/drpxke63n/image/upload/v1772558718/about_1_aa14bj.jpg"
                                alt="Abie Maxey"
                                className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-100"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
