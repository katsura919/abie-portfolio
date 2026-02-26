import React from 'react';
import { ArrowRight } from 'lucide-react';

const stats = [
    { value: "800K", label: "IG Reach (30d)" },
    { value: "1.7M", label: "Threads Reach" },
    { value: "High", label: "Saves & Shares" },
    { value: "Max", label: "Repost Velocity" },
    { value: "Strong", label: "TikTok Discovery" },
    { value: "Nomad", label: "Storytelling Niche" }
];

export default function Performance() {
    return (
        <section className="relative w-full py-24 md:py-32 xl:py-40 bg-background overflow-hidden z-10">
            <div className="max-w-[2200px] mx-auto w-full px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-16">

                    {/* Left Headline */}
                    <div className="lg:col-span-5 xl:col-span-5 lg:pr-12 xl:pr-20">
                        <h2 className="font-sans text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-bold uppercase tracking-tighter text-foreground leading-[0.9] text-balance">
                            Platforms <br className="hidden lg:block" />& Performance
                        </h2>
                        <p className="font-serif mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
                            A breakdown of reach, engagement, and audience alignment across key social channels. From long-form written storytelling to story-driven video content, my platforms foster deep connection and consistent discovery.
                        </p>
                        <div className="mt-10">
                            <a href="mailto:contact@example.com" className="inline-flex items-center gap-4 bg-[#1a1a1a] text-white dark:bg-foreground dark:text-background px-6 py-3 rounded-[2rem] font-sans text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                                Contact Me
                                <div className="bg-white text-black dark:bg-background dark:text-foreground rounded-full p-1">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Content Grid */}
                    <div className="lg:col-span-7 xl:col-span-7 w-full lg:border-l border-border/80">
                        <div className="grid grid-cols-2 w-full">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col justify-center py-12 lg:py-16 px-6 sm:px-10 lg:px-16 xl:px-20 border-border/80
                                    ${index % 2 === 0 ? 'border-r' : ''} 
                                    ${index < stats.length - 2 ? 'border-b' : ''}
                                    `}
                                >
                                    <h3 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-3 pb-1">
                                        {stat.value}
                                    </h3>
                                    <p className="font-serif text-base lg:text-lg text-muted-foreground">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
