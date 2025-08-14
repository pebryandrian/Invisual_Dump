"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomeSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 bg-background overflow-hidden"
        >
            {/* 🔵 Background Glow */}
            <div
                className="absolute -z-10 top-[-25%] left-1/2 w-[800px] h-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
                aria-hidden="true"
            />

            {/* 🟦 Dot Grid */}
            <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_rgba(4,87,255,0.07)_1px,_transparent_1px)] [background-size:32px_32px]"
                aria-hidden="true"
            />

            {/* 🌟 Content */}
            <div className="w-full max-w-5xl text-center">
                <span className="text-sm font-semibold text-primary tracking-widest uppercase">
                    Creative. Impactful. Scalable.
                </span>

                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                    Elevate Your Brand with <br />
                    <span className="text-primary">Strategic Design</span>
                </h1>

                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                    We design brand identities, digital interfaces, and visual systems
                    that drive growth and trust — tailored to your business goals.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        See Our Work
                    </Button>
                    <Button variant="outline" size="lg">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
