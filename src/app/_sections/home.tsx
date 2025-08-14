"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const banners = [
    "/banners/banner1.webp",
    "/banners/banner2.webp",
    "/banners/banner3.webp",
    "/banners/banner4.webp",
];

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextIndex = (activeIndex + 1) % banners.length;

    return (
        <section className="w-full min-h-screen bg-background flex flex-col lg:flex-row items-center justify-center overflow-hidden">
            {/* 📸 Banner Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center justify-center p-4">
                <div className="w-full max-w-[1620px] aspect-[2.6] relative">
                    <Image
                        src={banners[activeIndex]}
                        alt={`Banner ${activeIndex + 1}`}
                        width={1620}
                        height={624}
                        className="w-full h-auto object-cover rounded-md"
                        priority
                    />
                </div>

                <div className="w-full max-w-[1620px] aspect-[2.6] relative">
                    <Image
                        src={banners[nextIndex]}
                        alt={`Banner ${nextIndex + 1}`}
                        width={1620}
                        height={624}
                        className="w-full h-auto object-cover rounded-md transition-all duration-700 ease-in-out"
                    />
                </div>
            </div>

            {/* ✍️ Text Section */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 text-center lg:text-left">
                <span className="text-sm font-semibold text-primary tracking-widest uppercase">
                    Creative. Impactful. Scalable.
                </span>

                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                    Strategic Design <br className="hidden sm:block" />
                    That Builds <span className="text-primary">Real Brands</span>
                </h1>

                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                    We craft brand identities, visual assets, and interfaces that connect with your audience and elevate your business presence.
                </p>

                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Start Your Project
                    </Button>
                    <Button variant="outline" size="lg">
                        Explore Our Works
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
