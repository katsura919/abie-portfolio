"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Video, Mic, Clapperboard, PenTool, Smartphone,
    Settings, Code, Database, TrendingUp, Presentation,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const creatorServices = [
    {
        icon: Video,
        label: "UGC-style vertical videos",
        desc: "Authentic, scroll-stopping short-form content that feels native to the platform and drives real engagement.",
    },
    {
        icon: Mic,
        label: "Voiceover storytelling",
        desc: "Narrative-driven content that builds emotional connection and holds attention from the first second.",
    },
    {
        icon: Clapperboard,
        label: "Aesthetic B-roll + talking head",
        desc: "Cinematic visuals paired with direct-to-camera delivery — polished but personal.",
    },
    {
        icon: PenTool,
        label: "Scripted & semi-scripted content",
        desc: "Every word earns its place. Scripts that convert without sounding like a script.",
    },
    {
        icon: Smartphone,
        label: "Native-feeling conversion ads",
        desc: "Ads that blend into feeds, build trust, and get people to take action without feeling sold to.",
    },
];

const engineerServices = [
    {
        icon: Database,
        label: "Systems Architecture",
        desc: "Designing the operational backbone that lets companies scale without breaking — from CRM structure to delivery workflows.",
    },
    {
        icon: Code,
        label: "Custom CRM-to-Delivery Automation",
        desc: "End-to-end automation pipelines that eliminate manual handoffs and keep client projects moving.",
    },
    {
        icon: TrendingUp,
        label: "Revenue Operations (RevOps)",
        desc: "Aligning sales, marketing, and delivery into a single revenue engine with measurable output at every stage.",
    },
    {
        icon: Presentation,
        label: "Product Discovery & Client Success",
        desc: "Structuring onboarding and discovery processes that reduce churn and accelerate time-to-value.",
    },
    {
        icon: Settings,
        label: "Low-code Applications (Coda, Zapier)",
        desc: "Custom no-code/low-code tooling that gives teams superpowers without bloated software budgets.",
    },
];

/* ─────────────────────────────────────────────
   Desktop: Sticky left + scroll-up right
───────────────────────────────────────────── */
function DesktopServiceSection({
    sectionId,
    eyebrow,
    heading,
    stat,
    tagline,
    services,
    bg,
}: {
    sectionId: string;
    eyebrow: string;
    heading: React.ReactNode;
    stat: string;
    tagline: string;
    services: { icon: React.ElementType; label: string; desc: string }[];
    bg: string;
}) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!wrapRef.current || !rightRef.current || !innerRef.current) return;

        // Left column: staggered reveal on scroll entry
        gsap.fromTo(
            leftRef.current!.querySelectorAll('.left-reveal'),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: wrapRef.current,
                    start: 'top 85%',
                },
            }
        );

        // Right column: physical scroll-up through clip
        const containerH = rightRef.current.clientHeight;
        const totalY = containerH * (services.length - 1);
        const PX_PER_ITEM = 700;
        const totalPx = (services.length - 1) * PX_PER_ITEM;

        gsap.to(innerRef.current, {
            y: -totalY,
            ease: 'none',
            scrollTrigger: {
                trigger: wrapRef.current,
                start: 'top top',
                end: `+=${totalPx}`,
                pin: true,
                scrub: 1.5,
                invalidateOnRefresh: true,
            },
        });

    }, { scope: wrapRef });

    return (
        <div
            id={sectionId}
            ref={wrapRef}
            className={`relative w-full h-screen overflow-hidden ${bg}`}
        >
            <div className="max-w-7xl mx-auto h-full flex">
                {/* Left: stays in place while right scrolls */}
                <div
                    ref={leftRef}
                    className="w-5/12 flex flex-col justify-center px-8 xl:px-16 py-16 flex-shrink-0"
                >
                    <span className="left-reveal font-serif italic text-sm text-muted-foreground mb-4 block">
                        {eyebrow}
                    </span>
                    <h2 className="left-reveal font-sans text-5xl xl:text-7xl font-black tracking-tighter uppercase leading-[0.85] text-foreground mb-6">
                        {heading}
                    </h2>
                    <p className="left-reveal font-sans font-bold text-primary text-lg xl:text-xl mb-4">
                        {stat}
                    </p>
                    <p className="left-reveal font-serif italic text-muted-foreground text-base xl:text-lg leading-relaxed max-w-sm">
                        {tagline}
                    </p>
                </div>

                {/* Right: clipping window */}
                <div ref={rightRef} className="relative flex-1 overflow-hidden">
                    {/* Inner column — GSAP scrolls this up */}
                    <div ref={innerRef} className="flex flex-col">
                        {services.map(({ icon: Icon, label, desc }) => (
                            <div
                                key={label}
                                className="flex items-center px-8 xl:px-16"
                                style={{ height: '100vh' }}
                            >
                                <div className="flex items-start gap-6 max-w-xl">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mt-1">
                                        <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-sans text-2xl xl:text-3xl font-black tracking-tighter uppercase text-foreground mb-3">
                                            {label}
                                        </h4>
                                        <p className="font-serif italic text-muted-foreground text-base xl:text-lg leading-relaxed">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Mobile: Simple stacked card list
───────────────────────────────────────────── */
function MobileServiceSection({
    sectionId,
    eyebrow,
    heading,
    stat,
    tagline,
    services,
    bg,
}: {
    sectionId: string;
    eyebrow: string;
    heading: React.ReactNode;
    stat: string;
    tagline: string;
    services: { icon: React.ElementType; label: string; desc: string }[];
    bg: string;
}) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        // Header stagger
        gsap.fromTo(
            sectionRef.current.querySelectorAll('.mob-reveal'),
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                },
            }
        );

        // Service cards stagger
        gsap.fromTo(
            sectionRef.current.querySelectorAll('.mob-card'),
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            }
        );
    }, { scope: sectionRef });

    return (
        <div
            id={`${sectionId}-mobile`}
            ref={sectionRef}
            className={`w-full px-5 pt-16 pb-12 ${bg}`}
        >
            <div className="max-w-lg mx-auto">
                {/* Header block */}
                <div className="mb-10">
                    <span className="mob-reveal font-serif italic text-sm text-muted-foreground mb-3 block">
                        {eyebrow}
                    </span>
                    <h2 className="mob-reveal font-sans text-4xl font-black tracking-tighter uppercase leading-[0.85] text-foreground mb-4">
                        {heading}
                    </h2>
                    <p className="mob-reveal font-sans font-bold text-primary text-base mb-3">
                        {stat}
                    </p>
                    <p className="mob-reveal font-serif italic text-muted-foreground text-sm leading-relaxed">
                        {tagline}
                    </p>
                </div>

                {/* Service list */}
                <ul className="space-y-5">
                    {services.map(({ icon: Icon, label, desc }) => (
                        <li
                            key={label}
                            className="mob-card flex items-start gap-4 p-5 rounded-2xl bg-background/50 border border-border/30"
                        >
                            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5">
                                <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                            </div>
                            <div>
                                <h4 className="font-sans text-base font-bold tracking-tight text-foreground mb-1">
                                    {label}
                                </h4>
                                <p className="font-serif italic text-muted-foreground text-sm leading-relaxed">
                                    {desc}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Exported section — renders the right version
───────────────────────────────────────────── */
const sections = [
    {
        sectionId: "services-creator",
        eyebrow: "03 — Content Creation",
        heading: <>UGC &amp;<br />Storytelling</>,
        stat: "1.7M+ Threads Reach · 800k+ IG Reach",
        tagline: "In a sea of over-polished, fake-feeling ads, my content builds credibility through aesthetic realism.",
        services: creatorServices,
        bg: "bg-secondary",
    },
    {
        sectionId: "services-engineer",
        eyebrow: "03 — Systems Engineering",
        heading: <>Revenue<br />Architecture</>,
        stat: "Scaled systems to support $12M ARR",
        tagline: "I don't just 'manage' processes. I engineer the infrastructure that allows companies to scale.",
        services: engineerServices,
        bg: "bg-background",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative w-full bg-background text-foreground z-20">

            {/* ── Desktop layout: hidden on mobile ── */}
            <div className="hidden lg:block">
                {sections.map((s) => (
                    <DesktopServiceSection key={s.sectionId} {...s} />
                ))}
            </div>

            {/* ── Mobile layout: hidden on desktop ── */}
            <div className="lg:hidden">
                {sections.map((s) => (
                    <MobileServiceSection key={s.sectionId} {...s} />
                ))}
            </div>

        </section>
    );
}
