// src/app/_sections/services.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Share2,
  Code,
  Target,
  Megaphone,
  Camera,
  LucideProps,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

import photo6 from "@/assets/6.png";
import photo7 from "@/assets/7.png";
import photo8 from "@/assets/8.png";

import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeading from "@/components/common/SectionHeading";
import MotionWrapper from "@/components/common/MotionWrapper";
import type { StaticImageData } from "next/image";

type Service = {
  title: string;
  desc: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  image: StaticImageData;
  hoverColor: string;
  category: string; // ✅ ganti targetId jadi category
};

const SERVICES: Service[] = [
  {
    title: "Branding & Positioning",
    desc: "Enhance your brand identity and establish a strong market presence...",
    icon: Target,
    image: photo6,
    hoverColor: "hover:bg-purple-500",
    category: "branding",
  },
  {
    title: "Social Media Management",
    desc: "Engage your audience and grow your online presence...",
    icon: Share2,
    image: photo7,
    hoverColor: "hover:bg-blue-500",
    category: "social-media",
  },
  {
    title: "Visual Content Creation",
    desc: "Capture attention with stunning visual content...",
    icon: Camera,
    image: photo8,
    hoverColor: "hover:bg-pink-500",
    category: "visual",
  },
  {
    title: "Web Development",
    desc: "We build modern, responsive, and high-performance websites...",
    icon: Code,
    image: photo6,
    hoverColor: "hover:bg-green-500",
    category: "web",
  },
  {
    title: "SEO & Content Strategy",
    desc: "Improve your online visibility and drive organic traffic...",
    icon: Sparkles,
    image: photo7,
    hoverColor: "hover:bg-teal-500",
    category: "seo",
  },
  {
    title: "Digital Advertising",
    desc: "Maximize your reach with targeted digital advertising...",
    icon: Megaphone,
    image: photo8,
    hoverColor: "hover:bg-red-500",
    category: "ads",
  },
];

export default function ServicesSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id}>
      <SectionHeading
        title="Our"
        highlight="Services"
        subtitle="We combine strategy, design, and storytelling to grow your brand."
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(
          ({ title, desc, icon: Icon, image, hoverColor, category }, index) => (
            <MotionWrapper key={title} delay={index * 0.15}>
              {/* ✅ langsung arahkan ke /projects/[category] */}
              <Link href={`/projects/${category}`}>
                <div
                  className={`group flex flex-col gap-4 rounded-xl border border-border shadow-md transition-all duration-300 cursor-pointer ${hoverColor} hover:shadow-lg hover:scale-[1.02]`}
                >
                  {/* Image Section */}
                  <div className="relative aspect-square overflow-hidden rounded-t-xl">
                    <Image
                      src={image}
                      alt={title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="p-6 text-left">
                    <div className="flex items-center gap-4 mb-2">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                      <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                        {title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-white group-hover:opacity-80 transition-colors">
                      {desc}
                    </p>
                  </div>
                </div>
              </Link>
            </MotionWrapper>
          )
        )}
      </div>
    </SectionWrapper>
  );
}
