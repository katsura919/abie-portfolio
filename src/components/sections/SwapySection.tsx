'use client';

import { useMemo, useState } from 'react';
import { SlotItemMapArray, utils } from 'swapy';
import { SwapyItem, SwapyLayout, SwapySlot, DragHandle } from '@/components/ui/swapy';
import Image from 'next/image';

// ─── Travel Photo Cards ─────────────────────────────────────────────────────

function TravelCard({
    image,
    title,
    subtitle,
}: {
    image: string;
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden group shadow-lg cursor-grab active:cursor-grabbing">
            {/* Photo */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Drag handle */}
            <DragHandle className="top-3 right-3 left-auto bg-white/20 backdrop-blur-sm rounded-lg p-1 text-white" />

            {/* Labels */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-lg leading-tight">{title}</p>
                {subtitle && (
                    <p className="text-white/70 text-sm mt-0.5">{subtitle}</p>
                )}
            </div>
        </div>
    );
}

// ─── Item definitions ────────────────────────────────────────────────────────

type Item = {
    id: string;
    card: React.ReactNode;
    className: string;
};

const initialItems: Item[] = [
    {
        id: '1',
        className: 'col-span-12 sm:col-span-6 lg:col-span-4 row-span-2',
        card: (
            <TravelCard
                image="https://res.cloudinary.com/drpxke63n/image/upload/v1772542212/IMG_7252_qzvnsq.jpg"
                title="Italy"
                subtitle="Sun-drenched streets & timeless beauty"
            />
        ),
    },
    {
        id: '2',
        className: 'col-span-12 sm:col-span-6 lg:col-span-4',
        card: (
            <TravelCard
                image="https://res.cloudinary.com/drpxke63n/image/upload/v1772542399/IMG_0688_rbqvvv.jpg"
                title="New York City"
                subtitle="The city that never sleeps"
            />
        ),
    },
    {
        id: '3',
        className: 'col-span-12 sm:col-span-6 lg:col-span-4',
        card: (
            <TravelCard
                image="https://res.cloudinary.com/drpxke63n/image/upload/v1772542045/IMG_0500_stjq1x.jpg"
                title="Tirana"
                subtitle="Albania's vibrant capital"
            />
        ),
    },
    {
        id: '4',
        className: 'col-span-12 sm:col-span-6 lg:col-span-5',
        card: (
            <TravelCard
                image="https://res.cloudinary.com/drpxke63n/image/upload/v1772542642/IMG_0203_rosnyf.jpg"
                title="Tulum"
                subtitle="Jungle meets Caribbean coast"
            />
        ),
    },
    {
        id: '5',
        className: 'col-span-12 sm:col-span-6 lg:col-span-4',
        card: (
            <TravelCard
                image="https://res.cloudinary.com/drpxke63n/image/upload/v1772542908/IMG_5024_j2d33z.jpg"
                title="United States"
                subtitle="Coast-to-coast adventures"
            />
        ),
    },
    {
        id: '6',
        className: 'col-span-12 sm:col-span-6 lg:col-span-3',
        card: (
            <TravelCard
                image="https://res.cloudinary.com/drpxke63n/image/upload/v1772543045/IMG_5010_aewh4r.jpg"
                title="USA"
                subtitle="Open roads & wide skies"
            />
        ),
    },
    {
        id: '7',
        className: 'col-span-12 sm:col-span-6 lg:col-span-4',
        card: (
            <TravelCard
                image="https://res.cloudinary.com/drpxke63n/image/upload/v1772542030/IMG_2262_k3l8dl.jpg"
                title="Gjirokastër, Albania"
                subtitle="A stone city frozen in time"
            />
        ),
    },
];

// ─── Section ─────────────────────────────────────────────────────────────────

export default function SwapySection() {
    const [slotItemMap, setSlotItemMap] = useState<SlotItemMapArray>(
        utils.initSlotItemMap(initialItems, 'id')
    );

    const slottedItems = useMemo(
        () => utils.toSlottedItems(initialItems, 'id', slotItemMap),
        [slotItemMap]
    );

    return (
        <section className="relative w-full bg-background border-y border-border/50 py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">

            {/* Section header */}
            <div className="max-w-5xl mx-auto mb-12 text-center">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-medium">
                    Places I&apos;ve Roamed
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                    Drag &amp; Rearrange My World
                </h2>
                <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
                    Every slot tells a story. Grab any card and swap it to reorder the journey.
                </p>
            </div>

            {/* Swapy grid */}
            <SwapyLayout
                id="swapy-travel"
                className="max-w-5xl mx-auto"
                config={{ swapMode: 'hover', animation: 'spring' }}
                onSwap={(event) => setSlotItemMap(event.newSlotItemMap.asArray)}
            >
                <div className="grid grid-cols-12 gap-3 sm:gap-4 auto-rows-[220px]">
                    {slottedItems.map(({ slotId, itemId }) => {
                        const item = initialItems.find((i) => i.id === itemId);
                        return (
                            <SwapySlot
                                key={slotId}
                                id={slotId}
                                className={item?.className ?? 'col-span-12'}
                            >
                                <SwapyItem
                                    id={itemId ?? ''}
                                    className="w-full h-full"
                                    dragItemOpacity={70}
                                >
                                    {item?.card}
                                </SwapyItem>
                            </SwapySlot>
                        );
                    })}
                </div>
            </SwapyLayout>

            {/* Hint */}
            <p className="mt-8 text-center text-xs text-muted-foreground/50 tracking-wide">
                ✦ Hover over a card and drag to swap positions
            </p>
        </section>
    );
}
