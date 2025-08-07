'use client';

import { useRef, useState, useEffect } from "react";
import { Newsreader } from "next/font/google";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';

import ProjectsList from "@/components/project-list";
import ExperienceList from "@/components/experience-list";

const inter = Inter({
    subsets: ["latin"],
    weight: ['400', '500']
});

const newsreader = Newsreader({
    subsets: ["latin"],
    style: ["normal", "italic"],
});

const sohne = localFont({
    src: '../fonts/Sohne.woff2',
});

export default function Home() {
    const [showLeftFade, setShowLeftFade] = useState(false);
    const [showRightFade, setShowRightFade] = useState(false);
    const [usedScroll, setUsedScroll] = useState(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const updateFades = () => {
            const { scrollLeft, clientWidth, scrollWidth } = el;
            setShowLeftFade(scrollLeft > 0);
            setShowRightFade(scrollLeft + clientWidth < scrollWidth);
        };

        const onScroll = () => {
            updateFades();
            setUsedScroll(true);

            if (timerId) clearTimeout(timerId);
            const id = setTimeout(() => {
                setUsedScroll(false);
            }, 10000);
            setTimerId(id);
        };

        updateFades();
        el.addEventListener("scroll", onScroll);
        window.addEventListener("resize", updateFades);

        return () => {
            el.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", updateFades);
            if (timerId) clearTimeout(timerId);
        };
    }, [timerId]);

    const scrollBy = (distance: number) => {
        scrollRef.current?.scrollBy({ left: distance, behavior: 'smooth' });
        setUsedScroll(true);

        if (timerId) clearTimeout(timerId);
        const id = setTimeout(() => {
            setUsedScroll(false);
        }, 10000);
        setTimerId(id);
    };

    return (
        <main className={`${sohne.className} opacity-90`}>
            {/* My name */}
            <div className="sm:pt-[128px] pt-[64px] text-lg font-medium">
                <span className={`${inter.className} font-medium`} >Mohammad Amin Shahbazi</span>
            </div>

            {/* About secion */}
            <div className="mt-3 text-justify">
                <span className={`${newsreader.className} italic`}>
                    Crafting robust backends.
                </span>{" "}
                Building reliable, maintainable services with Asp.Net Core. Detail‑driven and
                team‑focused, grounded in software architecture and proven design
                patterns.
            </div>

            {/* Projects section */}
            <div className="mt-6">
                <div className="relative w-full">
                    {/* Left arrow */}
                    <button
                        onClick={() => scrollBy(-250)}
                        className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 bg-white/75 hover:bg-white transition-opacity duration-300 ${showLeftFade && !usedScroll ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    >
                        <img
                            src="/icons/chevron-left.svg"
                            alt="Scroll left"
                            className="h-5 w-5 opacity-50"
                        />
                    </button>

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
                    >
                        <div className="flex w-max space-x-5 pb-2">
                            <ExperienceList />
                            <ProjectsList />
                        </div>
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={() => scrollBy(250)}
                        className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 bg-white/75 hover:bg-white transition-opacity duration-300 ${showRightFade && !usedScroll ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    >
                        <img
                            src="/icons/chevron-right.svg"
                            alt="Scroll right"
                            className="h-5 w-5 opacity-50"
                        />
                    </button>

                    {/* Fading gradients */}
                    <div
                        className={`pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent transition-opacity duration-150 ${showRightFade ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <div
                        className={`pointer-events-none absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white to-transparent transition-opacity duration-150 ${showLeftFade ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
            </div>

            {/* Now section */}
            <div className="mt-10 text-justify">
                <div className="text-lg mb-3">Now</div>
                <div>
                    Learning and growing as a Backend Developer with a focus on C# and ASP.NET Core, always aiming for clean, maintainable APIs and solid architecture.I recharge through psychology books and  <span className={`${newsreader.className} italic`}>classic novels</span> and I enjoy immersive story-driven games — with a bit of Souls-like challenge on the side.If you believe it, I am actually Elden Lord.
                </div>
                <div className="my-3">
                    Exploring software beyond just code — studying system design, architecture patterns, and the quiet elegance that makes great software feel effortless.
                </div>
                <div>Always learning, always building.</div>
            </div>


            {/* Contact secion */}
            <div className="mt-10 mb-15 space-y-3">
                <div className="text-lg">Contact</div>
                <div>
                    Reach me at{" "}
                    <span className="underline">iamaminsh@gmail.com</span>
                </div>
            </div>
        </main>
    );
}
