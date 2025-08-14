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

    return (
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
            </div>
        </section>
    );
}
