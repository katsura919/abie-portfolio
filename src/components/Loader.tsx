"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Fallback: hide loader after a max duration in case video doesn't fire onEnded
    useEffect(() => {
        // If the video takes more than 5 seconds (or if it's very long), we auto-hide it.
        // Adjust this timeout if your animation is longer.
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    // For iOS low power mode or instances where autoplay is blocked,
    // we check if the video is actually playing, otherwise we can optionally 
    // play it or just let the fallback timeout handle it.
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay may be blocked by browser on some occasions until interacted.
                // It should work since the video is muted, but just in case, we log or ignore.
            });
        }
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-white pointer-events-none"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <video
                            ref={videoRef}
                            src="/assets/animated-logo.mp4"
                            autoPlay
                            muted
                            playsInline
                            onEnded={() => setIsLoading(false)}
                            className="w-48 h-auto sm:w-64 md:w-80 object-contain"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
