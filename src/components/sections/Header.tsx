"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { cn } from '@/lib/utils';

export default function Header() {


    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out pointer-events-none pt-6 md:pt-8",

        )}>
            <div className={cn(
                "max-w-[2200px] mx-auto w-full flex items-center justify-between transition-all duration-300 px-8 md:px-12 lg:px-20 xl:px-32",

            )}>

                {/* Logo - Always Left */}
                <div className="flex items-center gap-3 tracking-widest text-lg md:text-base font-bold uppercase pointer-events-auto">
                    <Image src="/logo.png" alt="Abie Maxey Logo" width={150} height={50} className="w-auto h-8 md:h-10 object-contain" priority />
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 md:gap-3 pointer-events-auto">
                    <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full text-secondary-foreground transition-all hover:scale-105 cursor-pointer">
                        <AnimatedThemeToggler className="w-5 h-5 md:w-5 md:h-5 text-current" />
                    </div>

                    {/* <button className="flex items-center gap-2 md:gap-3 text-secondary-foreground rounded-full px-5 py-2 md:px-6 md:py-2.5 hover:bg-secondary/80 transition-all hover:scale-105 cursor-pointer">
                        <span className="font-sans uppercase tracking-widest font-semibold text-xs">Menu</span>
                        <Menu size={16} />
                    </button> */}
                </div>

            </div>
        </header>
    );
}
