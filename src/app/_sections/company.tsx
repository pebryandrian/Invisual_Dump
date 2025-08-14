// src/app/_sections/company.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

// Import logo and company photo
import companyLogo from "@/assets/logo2.png";
import companyPhoto from "@/assets/grupp.png";

// Import foto tim dari folder assets
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";
import p8 from "@/assets/p8.png";
import p9 from "@/assets/p9.png";

export default function CompanySection() {
    const [isHovering, setIsHovering] = useState(false);

    // Data untuk bagian Services (tetap sama)
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

    // Data untuk bagian Team (sudah diperbarui)
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
        <section id="company" className="border-t">
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
                    </div>
                </div>

                {/* Bagian Services (tetap sama) */}
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

                {/* Bagian Team (sudah diperbaiki) */}
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