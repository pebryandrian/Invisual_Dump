"use client";

import { motion } from "framer-motion";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link"; 
import React from "react";

const PROJECT_CATEGORIES = [
  {
    id: "branding",
    label: "Branding",
    projects: [
      { id: "BrandA", title: "Brand A", image: "/projects/branding1.webp" },
      { id: "BrandB", title: "Brand B", image: "/projects/branding2.webp" },
      { id: "BrandC", title: "Brand C", image: "/projects/branding3.webp" },
      { id: "BrandD", title: "Brand D", image: "/projects/branding4.webp" },
      { id: "BrandE", title: "Brand E", image: "/projects/branding5.webp" },
    ],
  },
  {
    id: "social",
    label: "Social Media",
    projects: [
      { id: "SosA", title: "Social A", image: "/projects/social1.webp" },
      { id: "SosB", title: "Social B", image: "/projects/social2.webp" },
      { id: "SosC", title: "Social C", image: "/projects/social3.webp" },
      { id: "SosD", title: "Social D", image: "/projects/social4.webp" },
      { id: "SosE", title: "Social E", image: "/projects/social5.webp" },
    ],
  },
  {
    id: "content",
    label: "Content",
    projects: [
      { id: "ConA", title: "Content A", image: "/projects/content1.webp" },
      { id: "ConB", title: "Content B", image: "/projects/content2.webp" },
      { id: "ConC", title: "Content C", image: "/projects/content3.webp" },
      { id: "ConD", title: "Content D", image: "/projects/content4.webp" },
      { id: "ConE", title: "Content E", image: "/projects/content5.webp" },
    ],
  },
];

export default function ProjectsSection({ id }: { id?: string }) {
  return (
    <section id={id} className="px-4 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
          Our <span className="text-primary">Projects</span>
        </h2>

        <Tabs defaultValue="branding" className="w-full mt-6 relative">
          <TabsList className="flex flex-wrap justify-center gap-2">
            {PROJECT_CATEGORIES.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2 text-sm sm:text-base"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {PROJECT_CATEGORIES.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Carousel opts={{ align: "start" }} className="w-full mt-6 relative">
                <CarouselContent className="-ml-4">
                  {category.projects.map((project, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-full">
                      <div className="mx-auto max-w-5xl px-4">
                        <Link href={`/projects/${project.id}`}>
                          <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                            <div className="overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={1620}
                                height={1000}
                                className="w-full aspect-[1.62] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <CardContent className="py-4 px-6">
                              <CardTitle className="text-lg text-foreground">
                                {project.title}
                              </CardTitle>
                            </CardContent>
                          </Card>
                        </Link>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10" />
              </Carousel>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
