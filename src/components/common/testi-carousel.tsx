"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Mendefinisikan tipe data untuk testimonial
type Testimonial = {
    photo?: StaticImageData; // Mengubah photo menjadi opsional
    name: string;
    title: string;
    text: string;
};

// Mendefinisikan properti yang diterima oleh komponen
export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextButton = carouselRef.current?.querySelector(
                '[data-testid="carousel-next"]'
            ) as HTMLButtonElement;
            nextButton?.click();
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full mt-6 relative"
            ref={carouselRef}
        >
            <CarouselContent className="-ml-4">
                {testimonials.map((t, i) => (
                    <CarouselItem
                        key={i}
                        className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="mx-auto max-w-5xl px-4">
                            <Card className="h-full shadow-sm">
                                <CardContent className="p-6 flex flex-col justify-between h-full">
                                    <p className="text-muted-foreground mb-4 italic">“{t.text}”</p>
                                    <div className="flex items-center">
                                        {t.photo && (
                                            <Image
                                                src={t.photo}
                                                alt={t.name}
                                                width={50}
                                                height={50}
                                                className="rounded-full object-cover mr-4"
                                            />
                                        )}
                                        <div>
                                            <p className="font-medium text-foreground">{t.name}</p>
                                            <p className="text-sm text-muted-foreground">{t.title}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10" data-testid="carousel-prev" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10" data-testid="carousel-next" />
        </Carousel>
    );
}
