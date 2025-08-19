// src/app/_sections/services.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Share2, ImageIcon, Target, Megaphone, Camera } from "lucide-react";
import Image from "next/image";

import photo6 from "@/assets/6.png";
import photo7 from "@/assets/7.png";
import photo8 from "@/assets/8.png";

const SERVICES_ICONS = [
    {
        icon: <Sparkles className="w-6 h-6 text-primary" />,
        title: "Branding & Positioning",
        description:
            "Enhance your brand identity and establish a strong market presence. Our team specializes in creating unique branding strategies that resonate with your target audience and set you apart from the competition. From logo design to brand messaging, we cover all aspects to make your brand memorable.",
    },
    {
        icon: <Share2 className="w-6 h-6 text-primary" />,
        title: "Social Media Management",
        description:
            "Boost your online presence and engage with your audience through effective social media strategies. We manage your profiles, create compelling content, and drive engagement to help grow your brand. Our services include content scheduling, content management, and performance analytics.",
    },
    {
        icon: <ImageIcon className="w-6 h-6 text-primary" />,
        title: "Visual Content Marketing",
        description:
            "Capture attention with stunning visual content. We specializes in creating beautiful visuals that highlight your brand. Whether it's photos, videos, or graphics, we make your content shine. We ensure your brand communicates effectively and leaves a lasting impression, enhancing all your marketing efforts.",
    },
];

const EXTENDED_SERVICES = [
    {
        title: "Web Development",
        desc: "We build modern, responsive, and high-performance websites tailored to your business needs. From custom landing pages to full-scale e-commerce platforms, we ensure a seamless user experience.",
        icon: Target,
        image: photo6,
        hoverColor: "hover:bg-purple-500",
    },
    {
        title: "SEO & Content Strategy",
        desc: "Improve your online visibility and drive organic traffic with our expert SEO and content strategies. We help you rank higher on search engines and connect with your audience through valuable content.",
        icon: Megaphone,
        image: photo7,
        hoverColor: "hover:bg-teal-500",
    },
    {
        title: "Digital Advertising",
        desc: "Maximize your reach with targeted digital advertising campaigns on platforms like Google Ads and social media. We manage your ads to deliver the best possible return on investment.",
        icon: Camera,
        image: photo8,
        hoverColor: "hover:bg-red-500",
    },
];

export default function ServicesSection({ id }: { id?: string }) {
    return (
        <section id="services" className="border-t">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Our <span className="text-primary">Services</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-base md:text-lg">
                    We combine strategy, design, and storytelling to grow your brand
                    through the power of intentional and engaging visuals.
                </p>

                {/* Cards (dari main branch) */}
                <div className="grid gap-6 md:grid-cols-3">
                    {SERVICES_ICONS.map((service, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-lg transition-all group border border-border"
                        >
                            <CardHeader className="flex items-center justify-center">
                                {service.icon}
                            </CardHeader>
                            <CardContent className="text-center space-y-2">
                                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                                    {service.title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Cards tambahan (dari dummy branch) */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
                    {EXTENDED_SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col gap-4 rounded-xl border border-border shadow-md transition-all duration-300 ${service.hoverColor} hover:shadow-lg`}
                        >
                            <div className="relative aspect-square overflow-hidden rounded-t-xl">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
