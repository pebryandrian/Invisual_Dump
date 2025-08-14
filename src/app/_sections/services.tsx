// src/app/_sections/services.tsx

import React from "react";
import { Target, Megaphone, Camera } from "lucide-react";
import Image from "next/image";

import photo6 from "@/assets/6.png";
import photo7 from "@/assets/7.png";
import photo8 from "@/assets/8.png";
import photo9 from "@/assets/9.png";
import photo10 from "@/assets/10.png";
import photo from "@/assets/11.png";

export default function ServicesSection() {
    const services = [
        {
            title: "Branding & Positioning",
            desc: "Enhance your brand identity and establish a strong market presence. Our team specializes in creating unique branding strategies that resonate with your target audience and set you apart from the competition. From logo design to brand messaging, we cover all aspects to make your brand memorable.",
            icon: Target,
            image: photo6,
            hoverColor: "hover:bg-pink-500",
        },
        {
            title: "Social Media Management",
            desc: "Boost your online presence and engage with your audience through effective social media strategies. We manage your profiles, create compelling content, and drive engagement to help grow your brand. Our services include content scheduling, content management, and performance analytics.",
            icon: Megaphone,
            image: photo7,
            hoverColor: "hover:bg-orange-500",
        },
        {
            title: "Visual Content Marketing",
            desc: "Capture attention with stunning visual content. We specialize in creating beautiful visuals that highlight your brand. Whether it's photos, videos, or graphics, we make your content shine. We ensure your brand communicates effectively and leaves a lasting impression, enhancing all your marketing efforts.",
            icon: Camera,
            image: photo8,
            hoverColor: "hover:bg-blue-500",
        },
        // Tiga item dummy tambahan
        {
            title: "Web Development",
            desc: "We build modern, responsive, and high-performance websites tailored to your business needs. From custom landing pages to full-scale e-commerce platforms, we ensure a seamless user experience.",
            icon: Target, // Menggunakan ikon dummy
            image: photo6, // Menggunakan gambar dummy
            hoverColor: "hover:bg-purple-500", // Menambahkan warna hover baru
        },
        {
            title: "SEO & Content Strategy",
            desc: "Improve your online visibility and drive organic traffic with our expert SEO and content strategies. We help you rank higher on search engines and connect with your audience through valuable content.",
            icon: Megaphone, // Menggunakan ikon dummy
            image: photo7, // Menggunakan gambar dummy
            hoverColor: "hover:bg-teal-500", // Menambahkan warna hover baru
        },
        {
            title: "Digital Advertising",
            desc: "Maximize your reach with targeted digital advertising campaigns on platforms like Google Ads and social media. We manage your ads to deliver the best possible return on investment.",
            icon: Camera, // Menggunakan ikon dummy
            image: photo8, // Menggunakan gambar dummy
            hoverColor: "hover:bg-red-500", // Menambahkan warna hover baru
        },
    ];

    return (
        <section id="services" className="border-t">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold md:text-3xl">Our Services</h2>
                    <div className="h-[2px] w-16 rounded-full bg-[#0457ff]" />
                </div>
                
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col gap-4 rounded-xl border border-border shadow-md transition-all duration-300 ${service.hoverColor} hover:shadow-lg`}
                        >
                            <div className="relative aspect-square overflow-hidden rounded-t-xl">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-2">
                                    {service.icon && (
                                        <service.icon className="h-8 w-8 shrink-0 text-[#0457ff] transition-colors duration-300 group-hover:text-white" />
                                    )}
                                    <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-white">{service.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white group-hover:opacity-80">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}