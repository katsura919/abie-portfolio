"use client"

import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScrolling({ children }: { children: ReactNode }) {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        // Sync Lenis RAF with GSAP ticker so ScrollTrigger stays in perfect sync
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }

        gsap.ticker.add(update)
        gsap.ticker.lagSmoothing(0)

        return () => gsap.ticker.remove(update)
    }, [])

    return (
        <ReactLenis
            root
            ref={lenisRef}
            options={{
                lerp: 0.08,
                smoothWheel: true,
                autoRaf: false,
            }}
        >
            {children}
        </ReactLenis>
    )
}
