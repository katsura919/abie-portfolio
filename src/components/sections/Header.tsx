"use client"

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { cn } from '@/lib/utils';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out pointer-events-none lg:px-30 md:px-10 px-5",
            scrolled ? "bg-background shadow-none pointer-events-auto" : "bg-transparent"
        )}>
            <div className={cn(
                "max-w-[2200px] mx-auto w-full flex items-center justify-between transition-all duration-300 px-8 md:px-16 lg:px-24 xl:px-32",
                scrolled ? "py-3 md:py-3" : "py-3 md:py-3"
            )}>

                {/* Logo - Always Left */}
                <div className="flex items-center gap-3 tracking-widest text-lg md:text-base font-bold uppercase pointer-events-auto">
                    <div className="hidden md:block w-4 h-4 bg-foreground rounded-full"></div>
                    Abie Maxey
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 md:gap-4 pointer-events-auto">
                    <AnimatedThemeToggler className="flex items-center justify-center p-2 md:p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all hover:scale-105" />
                    <button className="flex items-center gap-2 md:gap-3 bg-secondary text-secondary-foreground rounded-full px-5 py-2.5 md:px-6 md:py-3 hover:bg-secondary/80 transition-all hover:scale-105">
                        <span className="font-sans uppercase tracking-widest font-semibold text-xs">Menu</span>
                        <Menu size={16} />
                    </button>
                </div>

            </div>
        </header>
    );
}
