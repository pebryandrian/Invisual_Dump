"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slide6 from "@/assets/slide6.jpg";
import slide7 from "@/assets/slide7.jpg";
import slide8 from "@/assets/slide8.jpg";
import slide9 from "@/assets/slide9.jpg";

const slides = [
  {
    image: slide6,
    title: "A Journey to be Financially Fit",
    subtitle: "Financial Fitness Gym by OCBC NISP",
  },
  {
    image: slide7,
    title: "Designing Future Experiences",
    subtitle: "Exploring creativity and innovation",
  },
  {
    image: slide8,
    title: "Bringing Ideas to Life",
    subtitle: "Turning visions into reality",
  },
  {
    image: slide9,
    title: "Crafting Meaningful Stories",
    subtitle: "Through visual and brand identity",
  },
];

const SLIDE_DURATION = 6000; // 6s

export default function HomeSection({ id }: { id?: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgressKey((prev) => prev + 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setProgressKey((prev) => prev + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) goToNextSlide();
    else if (diff < -50) goToPrevSlide();

    setTouchStartX(null);
  };

  return (
    <section
      id={id}
      className="relative w-full min-h-[70vh] md:min-h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
  src={slide.image}
  alt={slide.title}
  fill
  className="object-contain bg-black"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* TEXT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center md:items-end md:justify-end md:pb-24 md:pr-14 text-center md:text-right text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl tracking-tight">
              {slide.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-neutral-200/90 drop-shadow-md max-w-xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* NAV BUTTONS */}
      <div className="absolute right-2 sm:right-6 top-1/2 flex flex-col gap-3 -translate-y-1/2 z-20">
        <button
          onClick={goToNextSlide}
          className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all duration-300 shadow-lg"
        >
          <ChevronRight size={24} className="sm:w-7 sm:h-7" />
        </button>
        <button
          onClick={goToPrevSlide}
          className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all duration-300 shadow-lg"
        >
          <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
        </button>
      </div>

      {/* SLIDE INDICATOR + PROGRESS BAR */}
      <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-14 text-white text-xs sm:text-sm tracking-wider z-20 font-light">
        <div className="flex flex-col items-end">
          <span className="font-medium">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <div className="relative mt-2 w-20 sm:w-28 h-[3px] bg-white/30 overflow-hidden rounded-full">
            <div
              key={progressKey}
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#0457ff] to-[#0099ff] animate-progress"
              style={{ animationDuration: `${SLIDE_DURATION}ms` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
