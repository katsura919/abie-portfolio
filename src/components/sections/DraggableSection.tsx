"use client";

import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";

export default function DraggableSection() {
    const items = [
        {
            title: "Viral Aesthetics",
            image: "/hero-image.jpg",
            className: "absolute top-40 left-[20%] rotate-[-5deg]",
        },
        {
            title: "Systems & Visas",
            image: "/hero-image.jpg",
            className: "absolute top-45 left-[25%] rotate-[-7deg]",
        },
        {
            title: "Croatia Realities",
            image: "/hero-image.jpg",
            className: "absolute top-35 left-[40%] rotate-[8deg]",
        },
        {
            title: "Albania Growth",
            image: "/hero-image.jpg",
            className: "absolute top-50 left-[55%] rotate-[10deg]",
        },
        {
            title: "Nomad Logistics",
            image: "/hero-image.jpg",
            className: "absolute top-59 right-[35%] rotate-[2deg]",
        },
        {
            title: "High Saves Content",
            image: "/hero-image.jpg",
            className: "absolute top-60 left-[45%] rotate-[-7deg]",
        },
        {
            title: "Brand Alignment",
            image: "/hero-image.jpg",
            className: "absolute top-65 left-[30%] rotate-[4deg]",
        },
    ];

    return (
        <section className="relative w-full h-[100vh] min-h-[600px] bg-background border-y border-border/50 z-30 overflow-hidden">
            {/* Draggable Cards Full Width Container */}
            <div className="absolute inset-0 w-full h-full">
                <DraggableCardContainer className="relative flex h-full w-full items-center justify-center overflow-clip bg-secondary/10">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-3xl md:text-5xl font-serif italic text-muted-foreground/30 pointer-events-none mix-blend-difference z-0 px-4">
                        Drag to explore visual mood board.
                    </p>
                    {items.map((item, index) => (
                         <DraggableCardBody className={item.className}>
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
