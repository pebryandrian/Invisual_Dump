<<<<<<< HEAD
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
=======
// src/app/_sections/home.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Impor logo untuk hero section
import logo2 from "@/assets/logo2.png"; 
import logo1 from "@/assets/logo1.png"; // Impor gambar background

// Impor semua gambar untuk slider
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";
import slide4 from "@/assets/slide4.png";

// Array yang berisi semua gambar
const slides = [slide1, slide2, slide3, slide4];

export default function HomeSection({ id }: { id?: string }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect untuk mengubah slide setiap 3 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    return (
        <section id="home" className="relative overflow-hidden">
            {/* BACKGROUND LOOOPING DARI LOGO1.PNG */}
            <div 
                className="absolute inset-0 z-0 bg-center" 
                style={{ backgroundImage: `url(${logo1.src})`, backgroundRepeat: 'repeat', backgroundSize: '150px', opacity: 0.05 }}
            />

            <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24">
                {/* BAGIAN HERO ATAS */}
                <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                            <span className="h-2 w-2 rounded-full bg-[#0457ff]" /> Trusted Design Partner
                        </div>
                        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
                            Elevate your brand with{" "}
                            <span className="underline decoration-[#0457ff]/50 underline-offset-4">precise design</span>
                        </h1>
                        <p className="mt-4 text-base text-muted-foreground md:text-lg">
                            We craft identity, interfaces, and visuals that move people and grow businesses.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="#projects"
                                className="rounded-md bg-[#0457ff] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:translate-y-[1px]"
                            >
                                See Projects
                            </a>
                            <a
                                href="#contact"
                                className="rounded-md border px-4 py-2 text-sm font-medium"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* FOTO PLACEHOLDER DIGANTI DENGAN LOGO BARU */}
                    <div className="mt-10 w-full md:mt-0 md:w-[42%]">
                        <div className="relative aspect-[4/3] w-full rounded-xl border bg-muted/30 p-1">
                            <Image
                                src={logo2}
                                alt="Invisual Logo"
                                layout="fill"
                                objectFit="contain"
                                className="p-8"
                            />
                        </div>
                    </div>
                </div>

                {/* GARIS AKSEN TEPAT DI BAWAH HERO */}
                <div className="mt-12 h-[2px] w-24 rounded-full bg-[#0457ff]/70" />
>>>>>>> dummy
            </div>

            {/* BAGIAN SLIDER BARU DENGAN NAVIGASI DAN INDIKATOR */}
            <div className="mt-40 mb-24 relative z-10">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="relative aspect-[24/9] w-full rounded-2xl border bg-muted/30 p-1 overflow-hidden shadow-2xl">
                        {slides.map((slide, index) => (
                            <Image
                                key={index}
                                src={slide}
                                alt={`Slider Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className={`absolute inset-0 transition-opacity duration-1000 ${
                                    index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        ))}
                        
                        {/* Tombol Navigasi Prev/Next */}
                        <button
                            onClick={goToPrevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-10"
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={goToNextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-10"
                            aria-label="Next Slide"
                        >
                        </button>
                    </div>

                    {/* INDIKATOR NAVIGASI (DOTS) */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentSlide ? "bg-[#0457ff]" : "bg-gray-600 hover:bg-gray-400"
                                }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
