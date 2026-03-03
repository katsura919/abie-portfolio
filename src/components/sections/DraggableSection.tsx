"use client";

import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";

export default function DraggableSection() {
    const items = [
        {
            title: "Italy",
            image: "https://res.cloudinary.com/drpxke63n/image/upload/v1772542212/IMG_7252_qzvnsq.jpg",
            className: "absolute top-[5%] left-[5%] md:top-[15%] md:left-[30%] rotate-[-4deg] cursor-pointer",
        },
        {
            title: "New York City",
            image: "https://res.cloudinary.com/drpxke63n/image/upload/v1772542399/IMG_0688_rbqvvv.jpg",
            className: "absolute top-[45%] left-[2%] md:top-[25%] md:left-[25%] rotate-[6deg] cursor-pointer",
        },
        {
            title: "Tirana",
            image: "https://res.cloudinary.com/drpxke63n/image/upload/v1772542545/IMG_0500_stjq1x.jpg",
            className: "absolute top-[8%] left-[30%] md:top-[35%] md:left-[20%] rotate-[-6deg] cursor-pointer",
        },
        {
            title: "Tulum",
            image: "https://res.cloudinary.com/drpxke63n/image/upload/v1772542642/IMG_0203_rosnyf.jpg",
            className: "absolute top-[40%] left-[50%] -translate-x-1/2 md:top-[45%] md:left-[50%] md:-translate-x-1/2 rotate-[3deg] cursor-pointer",
        },
        {
            title: "US",
            image: "https://res.cloudinary.com/drpxke63n/image/upload/v1772542908/IMG_5024_j2d33z.jpg",
            className: "absolute top-[15%] right-[25%] md:top-[12%] md:right-[30%] rotate-[-5deg] cursor-pointer",
        },
        {
            title: "USA",
            image: "https://res.cloudinary.com/drpxke63n/image/upload/v1772543045/IMG_5010_aewh4r.jpg",
            className: "absolute top-[50%] right-[5%] md:top-[28%] md:right-[22%] rotate-[8deg] cursor-pointer",
        },
        {
            title: "Girokaster, Albania",
            image: "https://res.cloudinary.com/drpxke63n/image/upload/v1772542030/IMG_2262_k3l8dl.jpg",
            className: "absolute top-[5%] right-[5%] md:top-[40%] md:right-[18%] rotate-[4deg] cursor-pointer",
        },
    ];

    return (
        <section className="relative w-full bg-background border-y border-border/50 z-30 overflow-hidden md:h-[100vh] md:min-h-[600px]">

            {/* ── MOBILE: Horizontal Snap-Scroll Carousel ── */}
            <div className="md:hidden w-full py-12">
                {/* Section label */}
                <p className="text-center font-serif italic text-muted-foreground/60 text-base mb-8 px-6">
                    Let&apos;s build your dream nomad lifestyle.
                </p>

                {/* Scrollable strip */}
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="snap-center shrink-0 flex flex-col overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 shadow-lg"
                            style={{ width: "200px" }}
                        >
                            <div className="w-full aspect-[3/4] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <p className="py-3 px-3 text-center text-sm font-bold text-neutral-700 dark:text-neutral-300 leading-tight">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Scroll hint dots */}
                <div className="flex justify-center gap-1.5 mt-5">
                    {items.map((item, i) => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                    ))}
                </div>
            </div>

            {/* ── DESKTOP: Draggable Scatter Layout ── */}
            <div className="hidden md:block absolute inset-0 w-full h-full">
                <DraggableCardContainer className="relative flex h-full w-full items-center justify-center overflow-clip bg-secondary/10">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl font-serif italic text-muted-foreground/30 pointer-events-none mix-blend-difference z-0 px-4">
                        Let&apos;s build your dream nomad lifestyle.
                    </p>
                    {items.map((item) => (
                        <DraggableCardBody key={item.title} className={item.className}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                            />
                            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                                {item.title}
                            </h3>
                        </DraggableCardBody>
                    ))}
                </DraggableCardContainer>
            </div>

        </section>
    );
}
