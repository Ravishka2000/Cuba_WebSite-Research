import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { button } from "framer-motion/client";
import Link from "next/link";

const Hero = () => {
    const words = [
        {
            text: "Enhance",
        },
        {
            text: "Your",
        },
        {
            text: "Inner",
        },
        {
            text: "Development",
        },
        {
            text: "Skills.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <div className="bg-black">
            <AuroraBackground>
                <div className="text-center">
                    <h1 className="text-9xl font-extrabold text-white">CUBA</h1>
                    <TypewriterEffect words={words} className="mt-4" />
                    <Link href="#scope" className="mt-8 inline-flex h-16 px-20 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-bold text-2xl text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Learn More
                    </Link>
                </div>
            </AuroraBackground>
        </div>
    );
};

export default Hero;
