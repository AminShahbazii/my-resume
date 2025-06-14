'use client';

import { useRef, useState, useEffect } from "react";
import { Newsreader } from "next/font/google";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'

import ProjectsList from "@/components/project-list";
import ExperienceList from "@/components/experience-list";

const inter = Inter({
    subsets: ["latin"],
    weight: ['400', '500']
})

const newsreader = Newsreader({
    subsets: ["latin"],
    style: ["normal", "italic"],
});

const sohne = localFont({
    src: '../fonts/Sohne.woff2',
})


export default function Home() {
    const [showLeftFade, setShowLeftFade] = useState(false);
    const [showRightFade, setShowRightFade] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const updateFades = () => {
            setShowLeftFade(el.scrollLeft > 0);
            setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth);
        };

        updateFades();
        el.addEventListener("scroll", updateFades);
        window.addEventListener("resize", updateFades);

        return () => {
            el.removeEventListener("scroll", updateFades);
            window.removeEventListener("resize", updateFades);
        };
    }, []);

    return (
        <main className={`${sohne.className} opacity-90`}>
            <div className="sm:pt-[128px] pt-[64px] text-base font-medium">
                <span className={`${inter.className} font-medium`} >Abolfazl Shahbazi</span>
            </div>

            <div className="mt-8">
                <span className={`${newsreader.className} italic`}>
                    Crafting robust backends.
                </span>{" "}
                Building reliable, maintainable services with Go. Detail‑driven and
                team‑focused, grounded in software architecture and proven design
                patterns.
            </div>

            <div className="mt-10">
                <div className="relative w-full">
                    {/* Scrollable Area */}
                    <div ref={scrollRef} className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <div className="flex w-max space-x-5 pb-2">
                            <div>
                                <ExperienceList />
                            </div>
                            <div>
                                <ProjectsList />
                            </div>
                        </div>
                    </div>

                    {/* Right Fade */}
                    <div
                        className={`pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent transition-opacity duration-150 ${showRightFade ? "opacity-100" : "opacity-0"
                            }`}
                    />

                    {/* Left Fade */}
                    <div
                        className={`pointer-events-none absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white to-transparent transition-opacity duration-150 ${showLeftFade ? "opacity-100" : "opacity-0"
                            }`}
                    />

                </div>
            </div>

            <div className="mt-15">
                <div className="text-lg mb-5">Now</div>
                <div>
                    Freelancing as a Backend Developer, sharpening Go‑based architectures and scalable API design. Recharging on psychology and <span className={`${newsreader.className} italic`}>history</span> reads, and leveling up strategic thinking through narrative‑driven video games.
                </div>
                <div className="my-3">
                    Exploring software craftsmanship beyond code—studying architecture patterns, systems design, and the invisible elegance that makes software feel seamless.
                </div>
                <div>Always learning, always building.</div>
            </div>

            <div className="mt-10 mb-20">
                <div className="text-lg mb-5">Contact</div>
                Reach me at{" "}
                <span className="underline">rodia2559@gmail.com</span>
            </div>
        </main>
    );
}
