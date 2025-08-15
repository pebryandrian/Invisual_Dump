<<<<<<< HEAD
"use client";
=======
<<<<<<< HEAD
"use client";
=======
// src/app/_sections/projects.tsx
"use client";

import React from "react";
import Image from "next/image";

// Ganti dengan path gambar proyek Anda
import euy1 from "@/assets/euy1.png";
import euy2 from "@/assets/euy2.png";
import euy3 from "@/assets/euy3.png";
import sos1 from "@/assets/sos1.png";
import sos2 from "@/assets/sos2.png";
import sos3 from "@/assets/sos3.png";
import vis1 from "@/assets/vis1.png";
import vis2 from "@/assets/vis2.png";
import vis3 from "@/assets/vis3.png";


export default function ProjectsSection() {
    const projects = [
        { title: "Project 1", tag: "Branding & Positioning", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", image: euy1, tagColor: "bg-pink-500" },
        { title: "Project 2", tag: "Branding & Positioning", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", image: euy2, tagColor: "bg-pink-500" },
        { title: "Project 3", tag: "Branding & Positioning", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", image: euy3, tagColor: "bg-pink-500" },
        { title: "Project 4", tag: "Social Media Management", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", image: sos1, tagColor: "bg-orange-500" },
        { title: "Project 5", tag: "Social Media Management", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", image: sos2, tagColor: "bg-orange-500" },
        { title: "Project 6", tag: "Social Media Management", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", image: sos3, tagColor: "bg-orange-500" },
        { title: "Project 7", tag: "Visual Content Marketing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", image: vis1, tagColor: "bg-blue-500" },
        { title: "Project 8", tag: "Visual Content Marketing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", image: vis2, tagColor: "bg-blue-500" },
        { title: "Project 9", tag: "Visual Content Marketing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", image: vis3, tagColor: "bg-blue-500" },
    ];
>>>>>>> dummy
>>>>>>> b631f2f6886feb56ebc9d4863f4a9693dbd47839

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

const PROJECT_CATEGORIES = [
    {
        id: "branding",
        label: "Branding",
        projects: [
            {
                title: "Brand",
                image: "/projects/branding1.webp",
            },
            {
                title: "Brand",
                image: "/projects/branding2.webp",
            },
            {
                title: "Brand",
                image: "/projects/branding3.webp",
            },
            {
                title: "Brand",
                image: "/projects/branding4.webp",
            },
            {
                title: "Brand",
                image: "/projects/branding5.webp",
            },
        ],
    },
    {
        id: "social",
        label: "Social Media",
        projects: [
            {
                title: "Social Media",
                image: "/projects/social1.webp",
            },
            {
                title: "Social Media",
                image: "/projects/social2.webp",
            },
            {
                title: "Social Media",
                image: "/projects/social3.webp",
            },
            {
                title: "Social Media",
                image: "/projects/social4.webp",
            },
            {
                title: "Social Media",
                image: "/projects/social5.webp",
            },
        ],
    },
    {
        id: "content",
        label: "Content",
        projects: [
            {
                title: "Content",
                image: "/projects/social5.webp",
            },
            {
                title: "Content",
                image: "/projects/social4.webp",
            },
            {
                title: "Content",
                image: "/projects/social1.webp",
            },
            {
                title: "Content",
                image: "/projects/social2.webp",
            },
            {
                title: "Content",
                image: "/projects/social3.webp",
            },
        ],
    },
];

export default function ProjectsSection() {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b631f2f6886feb56ebc9d4863f4a9693dbd47839
        <section id="projects" className="px-4 lg:px-0">
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
                            <Carousel
                                opts={{ align: "start" }}
                                className="w-full mt-6 relative"
                            >
                                <CarouselContent className="-ml-4">
                                    {category.projects.map((project, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="pl-4 md:basis-full"
                                        >
                                            <div className="mx-auto max-w-5xl px-4">
                                                <Card className="overflow-hidden">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        width={1620}
                                                        height={1000}
                                                        className="w-full aspect-[1.62] object-cover rounded-lg"
                                                    />
                                                    <CardContent className="py-4 px-6">
                                                        <CardTitle className="text-lg text-foreground">
                                                            {project.title}
                                                        </CardTitle>
                                                    </CardContent>
                                                </Card>
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
<<<<<<< HEAD
=======
=======
        <section id="projects" className="border-t">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold md:text-3xl">Selected Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="group flex flex-col gap-4 p-6 border rounded-xl transition-all duration-300 hover:shadow-xl dark:border-input hover:bg-muted/30 dark:hover:bg-accent/10"
                        >
                            {/* Placeholder untuk gambar proyek diganti dengan gambar dinamis */}
                            <div className="aspect-[4/3] w-full bg-muted/20 rounded-lg overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <span className={`text-xs font-semibold px-2 py-1 rounded-full text-white ${project.tagColor}`}>{project.tag}</span>
                                <h3 className="text-xl font-semibold mt-4 transition-colors duration-300 group-hover:text-[#0457ff]">{project.title}</h3>
                                <p className="text-sm mt-2">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
>>>>>>> dummy
>>>>>>> b631f2f6886feb56ebc9d4863f4a9693dbd47839
            </div>
        </section>
    );
}