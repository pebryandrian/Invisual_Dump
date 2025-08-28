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

  // swipe detection
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    setProgressKey((prev) => prev + 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
    setProgressKey((prev) => prev + 1);
  };

  // handle swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      // swipe kiri
      goToNextSlide();
    } else if (diff < -50) {
      // swipe kanan
      goToPrevSlide();
    }
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
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* TEXT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center md:items-end md:justify-end md:pb-20 md:pr-10 text-center md:text-right text-white px-4">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-neutral-200 drop-shadow-md max-w-xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* NAV BUTTONS */}
      <div className="absolute right-2 sm:right-4 top-1/2 flex flex-col gap-3 -translate-y-1/2 z-20">
        <button
          onClick={goToNextSlide}
          className="p-1 sm:p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition"
        >
          <ChevronRight size={22} className="sm:w-7 sm:h-7" />
        </button>
        <button
          onClick={goToPrevSlide}
          className="p-1 sm:p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition"
        >
          <ChevronLeft size={22} className="sm:w-7 sm:h-7" />
        </button>
      </div>

      {/* SLIDE INDICATOR + PROGRESS BAR */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-10 text-white text-xs sm:text-sm tracking-wider z-20 font-light">
        <div className="flex flex-col items-end">
          <span>
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <div className="relative mt-2 w-16 sm:w-24 h-[2px] bg-white/30 overflow-hidden">
            <div
              key={progressKey}
              className="absolute left-0 top-0 h-full bg-white animate-progress"
              style={{ animationDuration: `${SLIDE_DURATION}ms` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
