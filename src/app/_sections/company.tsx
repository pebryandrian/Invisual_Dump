// src/app/_sections/company.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TestimonialCarousel } from "@/components/common/testi-carousel";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

// Import logo and company photo
import companyLogo from "@/assets/logo2.png";
import companyPhoto from "@/assets/grupp.png";

// Import foto tim
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";
import p8 from "@/assets/p8.png";
import p9 from "@/assets/p9.png";
// Import logo klien (contoh)
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";
import client4 from "@/assets/client4.jpg";

// Import foto dummy
import dummyPhoto1 from "@/assets/placeholderperson.jpeg";
import dummyPhoto2 from "@/assets/placeholderperson1.jpeg";
import dummyPhoto3 from "@/assets/placeholderperson2.jpeg";


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

const TESTIMONIALS = [
    {
        photo: dummyPhoto1, // Menggunakan foto dummy
        name: "John Doe",
        title: "CEO, Tech Solutions",
        text: "Invisual's work exceeded our expectations. Their creativity and professionalism are top-notch.",
    },
    {
        photo: dummyPhoto2,
        name: "Jane Smith",
        title: "Marketing Manager, Global Corp",
        text: "The team at Invisual brought our vision to life. The new branding has significantly boosted our market presence.",
    },
    {
        photo: dummyPhoto3,
        name: "Alex Johnson",
        title: "Founder, Startup Hub",
        text: "A truly collaborative partner. They listened to our needs and delivered a design that perfectly captured our brand's essence.",
    },
];

const CLIENT_LOGOS = [
    { logo: client1, name: "Brand A" },
    { logo: client2, name: "Brand B" },
    { logo: client3, name: "Brand C" },
    { logo: client4, name: "Brand D" },
];

export default function CompanySection({ id }: { id?: string }) {
    const [isHovering, setIsHovering] = useState(false);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const memberVariants = {
        hidden: { opacity: 0, y: 50, rotate: -15 },
        visible: { opacity: 1, y: 0, rotate: 0 },
    };
    
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

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
        <section id={id} className="border-t">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                {/* Bagian About */}
                <div className="flex flex-col gap-10 md:flex-row md:items-center">
                    <div
                        className="w-full md:w-1/2"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div className="aspect-[1/1] w-full max-w-96 rounded-xl overflow-hidden bg-muted/20">
                            <Image
                                src={isHovering ? companyPhoto : companyLogo}
                                alt={isHovering ? "Company Photo" : "Company Logo"}
                                layout="responsive"
                                width={400}
                                height={400}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                            HELLO,<br />
                            WE ARE INVISUAL
                        </h2>
                        <p className="mt-4 text-base text-muted-foreground md:text-lg">
                            Hey Involks! Invisual is more than just a design studio, we are your partners in creativity. Our team of talented designers and consultants is passionate about delivering innovative design solutions that help individuals and businesses express their unique visions. Whether you need high-quality design templates, bespoke design services, or expert guidance through our consulting services, Invisual is here to bring your ideas to life.
                        </p>
                        <p className="mt-4 text-base text-muted-foreground md:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="mt-4 text-base text-muted-foreground md:text-lg">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* Bagian Services */}
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

                {/* Bagian Team */}
                <div className="mt-24">
                    <h3 className="text-2xl font-semibold mb-8">Our Team</h3>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start gap-3"
                            >
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
            {/* Bagian Testimonial */}
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <h3 className="text-2xl font-semibold md:text-3xl text-center mb-10">What our clients say</h3>
                <TestimonialCarousel testimonials={TESTIMONIALS} />
            </div>

            {/* Bagian Our Clients */}
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <h3 className="text-2xl font-semibold md:text-3xl text-center mb-10">Our Clients</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
                    {CLIENT_LOGOS.map((client, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">{client.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
