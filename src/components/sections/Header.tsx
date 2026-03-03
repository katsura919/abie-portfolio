"use client"

import { useState } from 'react';
import Image from 'next/image';
import { X, Menu, ArrowRight } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { cn } from '@/lib/utils';

const navLinks = [
    { label: 'Home', target: '#hero' },
    { label: 'About', target: '#about' },
    { label: 'Work', target: '#portfolio' },
    { label: 'Services', target: '#services' },
    { label: 'Contact', target: '#contact' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const lenis = useLenis();

    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        lenis?.scrollTo(target, {
            offset: -40,
            duration: 1.4,
            easing: (t: number) => 1 - Math.pow(1 - t, 4),
        });
        setMobileOpen(false);
    };

    return (
        <>
            {/* ═══════════════════════════════════════════════
                DESKTOP — Floating Glass Pill (Dock)
            ═══════════════════════════════════════════════ */}
            <header className="hidden lg:flex fixed top-8 left-1/2 -translate-x-1/2 z-[100] items-center gap-2 bg-background/60 backdrop-blur-xl border border-border/40 rounded-full pl-6 pr-2 py-2 shadow-2xl transition-all duration-300 hover:bg-background/80">
                {/* Logo */}
                <div className="cursor-pointer shrink-0">
                    <Image
                        src="/logo.png"
                        alt="Abie Maxey"
                        width={180}
                        height={60}
                        className="w-auto h-10 object-contain shrink-0"
                        priority
                    />
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-4 bg-border/60 mx-1" />

                {/* Nav links */}
                <nav className="flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.target}
                            onClick={(e) => handleNav(e, link.target)}
                            className="px-4 py-2 font-sans text-[10px] font-black uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Vertical Divider */}
                <div className="w-px h-4 bg-border/60 mx-1" />

                {/* Theme toggler */}
                <div className="px-2 flex items-center justify-center text-foreground/70 hover:text-primary transition-colors cursor-pointer shrink-0">
                    <AnimatedThemeToggler className="w-5 h-5 text-current shrink-0" />
                </div>
            </header>

            {/* ═══════════════════════════════════════════════
                MOBILE / TABLET — Top bar with slide-in drawer
            ═══════════════════════════════════════════════ */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 py-4 bg-background/80 backdrop-blur-md border-b border-border/30">
                {/* Logo */}
                <Image
                    src="/logo.png"
                    alt="Abie Maxey"
                    width={180}
                    height={60}
                    className="w-auto h-10 object-contain shrink-0"
                    priority
                />

                {/* Right controls */}
                <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 text-foreground cursor-pointer shrink-0">
                        <AnimatedThemeToggler className="w-5 h-5 text-current shrink-0" />
                    </div>
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors shrink-0"
                        aria-label="Open menu"
                    >
                        <Menu size={24} className="shrink-0" />
                    </button>
                </div>
            </div>

            {/* ── Mobile drawer overlay ── */}
            <div
                className={cn(
                    "lg:hidden fixed inset-0 z-[200] transition-all duration-500",
                    mobileOpen ? "pointer-events-auto" : "pointer-events-none"
                )}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                        "absolute inset-0 bg-foreground/30 backdrop-blur-sm transition-opacity duration-500",
                        mobileOpen ? "opacity-100" : "opacity-0"
                    )}
                />

                {/* Drawer panel — slides in from right */}
                <div
                    className={cn(
                        "absolute top-0 right-0 h-full w-72 bg-background flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.67,0)]",
                        mobileOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    {/* Drawer header */}
                    <div className="flex items-center justify-between px-7 py-5 border-b border-border/40 shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Abie Maxey"
                            width={180}
                            height={60}
                            className="w-auto h-10 object-contain shrink-0"
                        />
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors shrink-0"
                            aria-label="Close menu"
                        >
                            <X size={24} className="shrink-0" />
                        </button>
                    </div>

                    {/* Nav links */}
                    <nav className="flex-1 flex flex-col justify-center px-7 gap-2">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.label}
                                href={link.target}
                                onClick={(e) => handleNav(e, link.target)}
                                className={cn(
                                    "group flex items-center gap-4 py-4 border-b border-border/30 transition-colors",
                                    "hover:text-primary"
                                )}
                                style={{
                                    transitionDelay: mobileOpen ? `${i * 60 + 100}ms` : '0ms',
                                    opacity: mobileOpen ? 1 : 0,
                                    transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)',
                                    transition: 'opacity 0.4s ease, transform 0.4s ease, color 0.2s ease',
                                }}
                            >
                                <span className="font-serif italic text-muted-foreground text-sm">0{i + 1}</span>
                                <span className="font-sans text-2xl font-black uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors">
                                    {link.label}
                                </span>
                            </a>
                        ))}
                    </nav>

                    {/* Drawer footer */}
                    <div className="px-7 pb-8">
                        <a
                            href="mailto:hello@abiemaxey.com"
                            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full py-3 font-sans uppercase tracking-widest font-bold text-xs hover:bg-primary/80 transition-all"
                        >
                            Work with me
                        </a>
                        <p className="font-serif italic text-xs text-muted-foreground text-center mt-4">
                            hello@abiemaxey.com
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
