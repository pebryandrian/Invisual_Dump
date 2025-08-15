"use client";

import { TestimonialCarousel } from "@/components/common/testi-carousel";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Users, Star } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

// Import logo and company photo from dummy branch
import companyLogo from "@/assets/logo2.png";
import companyPhoto from "@/assets/grupp.png";

// Import foto tim dari folder assets (from dummy branch)
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";
import p8 from "@/assets/p8.png";
import p9 from "@/assets/p9.png";


const COMPANY_VALUES = [
    {
        icon: <Lightbulb className="w-6 h-6 text-primary" />,
        title: "Strategic Thinking",
        description:
            "We approach every project with clarity, aligning creative with business goals.",
    },
    {
        icon: <Users className="w-6 h-6 text-primary" />,
        title: "Collaborative Process",
        description:
            "We work closely with clients to co-create solutions that truly represent their brand.",
    },
    {
        icon: <Star className="w-6 h-6 text-primary" />,
        title: "Design with Impact",
        description:
            "Every output is made to perform — visually, emotionally, and functionally.",
    },
];

const COMPANY_STATS = [
    { label: "+50 Clients", description: "Across multiple industries" },
    { label: "8+ Years", description: "Creative design experience" },
    { label: "100+ Projects", description: "Successfully launched" },
];

export default function CompanySection() {
    const [isHovering, setIsHovering] = useState(false);

    // Data untuk bagian Services (dari dummy branch)
    const services = [
        {
            category: "IDENTITY",
            items: [
                "Brand Naming",
                "Brand Strategy",
                "Tagline Development",
                "Visual Identity & Logo",
                "Brand Applications",
                "Brand Identity Guideline",
            ],
        },
        {
            category: "PRINTED",
            items: ["Company Profile", "Books & Editorial", "Collaterals", "Packaging"],
        },
        {
            category: "MISC.",
            items: ["Campaign", "Products", "Icon Design", "Illustration", "Photography"],
        },
        {
            category: "DIGITAL",
            items: ["Website", "UI/UX", "Social Media Guideline", "Motion"],
        },
        {
            category: "ENVIRONMENTAL",
            items: [
                "Wayfinding Design",
                "Environmental Graphic",
                "Exhibition Design",
                "Installations",
                "Interior Direction",
            ],
        },
    ];

    // Data untuk bagian Team (dari dummy branch)
    const teamMembers = [
        {
            name: "Dea",
            role: "Design Principal",
            photo: p1,
        },
        {
            name: "Tryan",
            role: "Chief Executive Officer",
            photo: p3,
        },
        {
            name: "Rizza",
            role: "Chief Operating Officer",
            photo: p2,
        },
        {
            name: "Jo",
            role: "Creative Director",
            photo: p4,
        },
        {
            name: "Bila",
            role: "General Manager",
            photo: p5,
        },
        {
            name: "Alfi",
            role: "Ads Specialist",
            photo: p6,
        },
        {
            name: "Virgi",
            role: "Production Manager",
            photo: p9,
        },
        {
            name: "Cinde",
            role: "Account Executive",
            photo: p7,
        },
        {
            name: "Acha",
            role: "Project Manager",
            photo: p8,
        },
    ];

    return (
        <section id="company" className="container px-4 lg:px-0">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Who <span className="text-primary">We Are</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg">
                    We are a creative design studio driven by purpose and precision —
                    building identities and experiences that connect brands with people.
                </p>

                {/* 🔢 Stats (dari main branch) */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 mb-16">
                    {COMPANY_STATS.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-primary">{stat.label}</span>
                            <span className="text-muted-foreground text-sm mt-1">{stat.description}</span>
                        </div>
                    ))}
                </div>

                {/* 🧠 Value Cards (dari main branch) */}
                <div className="grid gap-6 md:grid-cols-3 mt-10">
                    {COMPANY_VALUES.map((value, index) => (
                        <Card key={index} className="text-left hover:shadow-md transition">
                            <CardHeader className="flex items-center justify-start gap-4">
                                {value.icon}
                                <CardTitle>{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {value.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bagian Services (dari dummy branch) */}
                <div className="mt-24">
                    <h3 className="text-2xl font-semibold mb-8">Our Services</h3>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        {services.map((service, index) => (
                            <div key={index}>
                                <h4 className="font-semibold text-lg mb-2">{service.category}</h4>
                                <ul className="text-sm text-muted-foreground">
                                    {service.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bagian Team (dari dummy branch) */}
                <div className="mt-24">
                    <h3 className="text-2xl font-semibold mb-8">Our Team</h3>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-start gap-3">
                                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted/20">
                                    <Image
                                        src={member.photo}
                                        alt={member.name}
                                        width={400}
                                        height={500}
                                        className="h-full w-full object-cover transition-transform hover:scale-105"
                                    />
                                </div>
                                <div className="text-center w-full">
                                    <h4 className="font-medium">{member.name}</h4>
                                    <p className="text-sm text-muted-foreground">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}