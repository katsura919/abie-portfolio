"use client";

import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";

export default function DraggableSection() {
    const items = [
        {
            title: "Bali, Indonesia",
            image: "/hero-image.jpg",
            className: "absolute top-[5%] left-[5%] md:top-[15%] md:left-[30%] rotate-[-4deg] cursor-pointer",
        },
        {
            title: "Lisbon, Portugal",
            image: "/hero-image.jpg",
            className: "absolute top-[45%] left-[2%] md:top-[25%] md:left-[25%] rotate-[6deg] cursor-pointer",
        },
        {
            title: "Split, Croatia",
            image: "/hero-image.jpg",
            className: "absolute top-[8%] left-[30%] md:top-[35%] md:left-[20%] rotate-[-6deg] cursor-pointer",
        },
        {
            title: "Tirana, Albania",
            image: "/hero-image.jpg",
            className: "absolute top-[40%] left-[50%] -translate-x-1/2 md:top-[45%] md:left-[50%] md:-translate-x-1/2 rotate-[3deg] cursor-pointer",
        },
        {
            title: "Cape Town, South Africa",
            image: "/hero-image.jpg",
            className: "absolute top-[15%] right-[25%] md:top-[12%] md:right-[30%] rotate-[-5deg] cursor-pointer",
        },
        {
            title: "Chiang Mai, Thailand",
            image: "/hero-image.jpg",
            className: "absolute top-[50%] right-[5%] md:top-[28%] md:right-[22%] rotate-[8deg] cursor-pointer",
        },
        {
            title: "Medellín, Colombia",
            image: "/hero-image.jpg",
            className: "absolute top-[5%] right-[5%] md:top-[40%] md:right-[18%] rotate-[4deg] cursor-pointer",
        },
    ];

    return (
        <section className="relative w-full h-[100vh] min-h-[600px] bg-background border-y border-border/50 z-30 overflow-hidden">
            {/* Draggable Cards Full Width Container */}
            <div className="absolute inset-0 w-full h-full">
                <DraggableCardContainer className="relative flex h-full w-full items-center justify-center overflow-clip bg-secondary/10">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-3xl md:text-5xl font-serif italic text-muted-foreground/30 pointer-events-none mix-blend-difference z-0 px-4">
                        Let&apos;s build your dream nomad lifestyle.
                    </p>
                    {items.map((item, index) => (
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
