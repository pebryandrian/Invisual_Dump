"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Sparkles,
    Share2,
    ImageIcon,
} from "lucide-react";

const SERVICES = [
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

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="relative py-24 bg-background overflow-hidden"
        >
            <div className="mx-auto max-w-6xl px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Our <span className="text-primary">Services</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-base md:text-lg">
                    We combine strategy, design, and storytelling to grow your brand
                    through the power of intentional and engaging visuals.
                </p>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {SERVICES.map((service, index) => (
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
            </div>
        </section>
    );
}
