"use client";

import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Text reveal animation
        gsap.fromTo('.about-text-reveal',
            { y: 50, opacity: 0 },
            {
                y: 0,
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

        // Image reveal animation
        gsap.fromTo('.about-img-reveal',
            { scale: 0.95, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.2,
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
        <section ref={container} id="about" className="relative w-full py-24 md:py-32 xl:py-40 bg-background overflow-hidden z-10 shadow-top rounded-t-3xl min-h-screen">
            <div className="max-w-[2200px] mx-auto w-full px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Content */}
                    <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
                        <h2 className="about-text-reveal font-sans text-5xl sm:text-6xl md:text-7xl xl:text-[5rem] font-bold uppercase tracking-tighter text-foreground leading-[0.95] max-w-4xl text-balance">
                            I'm a Digital Nomad Creator & Systems Engineer
                        </h2>
                        <p className="about-text-reveal font-serif mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            Documenting how people actually rebuild their lives across borders.
                        </p>

                        <div className="w-full lg:max-w-3xl">
                            {/* Top Border */}
                            <div className="w-full h-[1px] bg-border/80"></div>

                            {/* Item 1 */}
                            <div className="about-text-reveal py-3 group cursor-default">
                                <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-3">
                                    Storytelling
                                </h3>
                                <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl transition-colors duration-300 group-hover:text-foreground">
                                    I speak to people who don’t just travel, they move, adapt, and build continuity abroad.
                                </p>
                            </div>

                            <div className="w-full h-[1px] bg-border/80"></div>

                            {/* Item 2 */}
                            <div className="about-text-reveal py-3  group cursor-default">
                                <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-3">
                                    Practical Insight
                                </h3>
                                <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl transition-colors duration-300 group-hover:text-foreground">
                                    Navigating visas, relocation, systems, and identity ~ without pretending the process is frictionless.
                                </p>
                            </div>

                            <div className="w-full h-[1px] bg-border/80"></div>

                            {/* Item 3 */}
                            <div className="about-text-reveal py-3 group cursor-default">
                                <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-tighter text-foreground mb-3">
                                    Aesthetic Realism
                                </h3>
                                <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl transition-colors duration-300 group-hover:text-foreground">
                                    I create content that feels human, thoughtful, and credible ..not over-polished ads.
                                </p>
                            </div>

                            <div className="w-full h-[1px] bg-border/80"></div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:col-span-5 xl:col-span-5 relative w-full h-full pb-10">
                        {/* We use sticky to allow the image to stay in view while the left side scrolls if it's longer */}
                        <div className="about-img-reveal lg:sticky lg:top-32 w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] lg:h-[80vh] max-h-[850px] ml-auto">
                            <div className="w-full h-full rounded-2xl md:rounded-[32px] overflow-hidden bg-muted">
                                <img
                                    src="/assets/about.jpg"
                                    alt="Abie Maxey"
                                    className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-100"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
