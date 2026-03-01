"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// ---------------------------------------------------------------------------
// Data – all cards share the same hero image from /public
// ---------------------------------------------------------------------------
const projects = [
    { id: 1, name: "Vestwell", year: 2025 },
    { id: 2, name: "C2MTL", year: 2023 },
    { id: 3, name: "Jitter", year: 2025 },
    { id: 4, name: "Opal Tadpole", year: 2024 },
    { id: 5, name: "MetaMask Learn", year: 2023 },
    { id: 6, name: "KIKK Festival", year: 2022 },
    { id: 7, name: "Fix", year: 2022 },
    { id: 8, name: "FOAM Talent", year: 2021 },
    { id: 9, name: "Motto", year: 2023 },
    { id: 10, name: "ATID", year: 2021 },
    { id: 11, name: "Dayos", year: 2024 },
    { id: 12, name: "Due", year: 2023 },
    { id: 13, name: "Nzero", year: 2023 },
    { id: 14, name: "Sturdy", year: 2023 },
];

const HERO_IMAGE = "/hero-image.jpg";

// Distribute projects across 5 columns in round-robin fashion
const columnCount = 5;
const columns: (typeof projects)[] = Array.from({ length: columnCount }, () => []);
projects.forEach((p, i) => columns[i % columnCount].push(p));

// Each column gets a different animation duration (seconds) & vertical offset
const columnConfig = [
    { duration: 20, offsetPx: 0 },
    { duration: 25, offsetPx: 80 },
    { duration: 18, offsetPx: 40 },
    { duration: 22, offsetPx: 120 },
    { duration: 23, offsetPx: 60 },
];

// ---------------------------------------------------------------------------
// Card component
// ---------------------------------------------------------------------------
function ProjectCard({ name, year }: { name: string; year: number }) {
    return (
        <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-sm">
                <img
                    src={HERO_IMAGE}
                    alt={name}
                    className="w-full aspect-[3/4] object-cover transition-all duration-500
                     group-hover:brightness-110 group-hover:scale-[1.03]"
                    loading="lazy"
                    draggable={false}
                />
            </div>
            <div className="mt-2 px-0.5">
                <p className="text-[11px] font-sans font-medium text-white/70 leading-tight tracking-wide">
                    {name}
                </p>
                <p className="text-[10px] font-sans text-white/40 leading-tight tracking-wider">
                    ../{year}
                </p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Main marquee section
// ---------------------------------------------------------------------------
export default function ProjectsMarquee() {
    const sectionRef = useRef<HTMLElement>(null);
    const columnRefs = useRef<(HTMLDivElement | null)[]>([]);
    const tweensRef = useRef<gsap.core.Tween[]>([]);

    useEffect(() => {
        const tweens: gsap.core.Tween[] = [];

        columnRefs.current.forEach((el, i) => {
            if (!el) return;

            const tween = gsap.to(el, {
                y: "-50%",
                duration: columnConfig[i].duration,
                ease: "none",
                repeat: -1,
            });

            tweens.push(tween);
        });

        tweensRef.current = tweens;

        return () => {
            tweens.forEach((t) => t.kill());
        };
    }, []);

    // Hover handlers — slow / restore all columns
    const handleMouseEnter = () => {
        tweensRef.current.forEach((t) =>
            gsap.to(t, { timeScale: 0.3, duration: 0.8, ease: "power2.out" })
        );
    };

    const handleMouseLeave = () => {
        tweensRef.current.forEach((t) =>
            gsap.to(t, { timeScale: 1, duration: 0.8, ease: "power2.out" })
        );
    };

    return (
        <section
            ref={sectionRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full overflow-hidden py-16 md:py-24"
            style={{ backgroundColor: "#111" }}
        >
            {/* Optional top/bottom gradient fades */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 z-10 bg-gradient-to-b from-[#111] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 z-10 bg-gradient-to-t from-[#111] to-transparent" />

            {/* Column grid */}
            <div
                className="mx-auto max-w-[1400px] px-4"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
                    gap: "6px",
                    overflow: "hidden",
                    maxHeight: "90vh",
                }}
            >
                {columns.map((colProjects, colIdx) => (
                    <div
                        key={colIdx}
                        className="relative overflow-hidden"
                        style={{ paddingTop: columnConfig[colIdx].offsetPx }}
                    >
                        {/* Inner wrapper — contains the list ×2 for seamless loop */}
                        <div
                            ref={(el) => {
                                columnRefs.current[colIdx] = el;
                            }}
                            className="flex flex-col"
                            style={{ gap: "6px" }}
                        >
                            {/* First copy */}
                            {colProjects.map((project) => (
                                <ProjectCard
                                    key={`a-${project.id}`}
                                    name={project.name}
                                    year={project.year}
                                />
                            ))}
                            {/* Second copy (duplicate for seamless loop) */}
                            {colProjects.map((project) => (
                                <ProjectCard
                                    key={`b-${project.id}`}
                                    name={project.name}
                                    year={project.year}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
