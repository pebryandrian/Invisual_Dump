// src/app/_sections/company.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

// Import logo klien
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";
import client4 from "@/assets/client4.jpg";

// Import foto dummy (testimonials)
import dummyPhoto1 from "@/assets/placeholderperson.jpeg";
import dummyPhoto2 from "@/assets/placeholderperson1.jpeg";
import dummyPhoto3 from "@/assets/placeholderperson2.jpeg";

// --------------------
// Variants / Animations
// --------------------
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

// --------------------
// Data
// --------------------
const teamMembers = [
  {
    name: "Dea",
    role: "Chief Financial Officer",
    photo: p1,
    desc: "Mengatur strategi keuangan perusahaan untuk pertumbuhan berkelanjutan.",
  },
  {
    name: "Tryan",
    role: "Chief Executive Officer",
    photo: p3,
    desc: "Pemimpin visioner yang membawa Invisual mencapai target dan inovasi baru.",
  },
  {
    name: "Rizza",
    role: "Chief Operating Officer",
    photo: p2,
    desc: "Mengawasi operasional agar selalu efisien dan optimal.",
  },
  {
    name: "Jo",
    role: "Creative Director",
    photo: p4,
    desc: "Menghidupkan ide-ide kreatif menjadi karya visual yang berdampak.",
  },
  {
    name: "Bila",
    role: "General Manager",
    photo: p5,
    desc: "Mengelola tim dengan fokus pada kolaborasi dan hasil maksimal.",
  },
  {
    name: "Alfi",
    role: "Ads Specialist",
    photo: p6,
    desc: "Ahli dalam strategi iklan digital untuk meningkatkan brand awareness.",
  },
  {
    name: "Virgi",
    role: "Production Manager",
    photo: p9,
    desc: "Bertanggung jawab atas produksi kreatif dengan standar tinggi.",
  },
  {
    name: "Cinde",
    role: "Account Executive",
    photo: p7,
    desc: "Menjadi jembatan komunikasi antara klien dan tim kreatif.",
  },
  {
    name: "Acha",
    role: "Project Manager",
    photo: p8,
    desc: "Mengelola timeline proyek agar berjalan sesuai target.",
  },
];

const ourMembers = [
  { name: "Member 1", role: "Designer", photo: dummyPhoto1 },
  { name: "Member 2", role: "Marketing", photo: dummyPhoto2 },
  { name: "Member 3", role: "Developer", photo: dummyPhoto3 },
];

const TESTIMONIALS = [
  {
    photo: dummyPhoto1,
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

// --------------------
// Component
// --------------------
export default function CompanySection({ id }: { id?: string }) {
  const [isHovering, setIsHovering] = useState(false);
  const [index, setIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const nextTestimonial = () =>
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () =>
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id={id} className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* About */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          <motion.div
            className="w-full md:w-1/2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="aspect-[1/1] w-full max-w-[420px] rounded-xl overflow-hidden bg-muted/20 mx-auto shadow-lg">
              <Image
                src={isHovering ? companyPhoto : companyLogo}
                alt={isHovering ? "Company Photo" : "Company Logo"}
                width={500}
                height={500}
                className="object-contain w-full h-full p-6 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Hello,
              <br />
              <span className="text-primary">We Are Invisual</span>
            </h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              Hey Involks! Invisual is more than just a design studio — we are
              your partners in creativity. Our team of talented designers and
              consultants is passionate about delivering innovative design
              solutions that help individuals and businesses express their unique
              visions.
            </p>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              With years of experience across multiple industries, we believe
              great design isn’t just about visuals, but about creating impact,
              building connections, and empowering brands to stand out.
            </p>
          </motion.div>
        </div>

        {/* Our Team */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold mb-8">Our Team</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
            {teamMembers.map((member, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <motion.div
                  key={i}
                  className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer bg-white/5 border border-white/10"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : i)
                  }
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={400}
                    height={500}
                    className={`h-full w-full object-cover transition-transform duration-500 ${
                      isExpanded ? "scale-105" : "group-hover:scale-110"
                    }`}
                  />
                  
                  {/* Expanded Detail */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center text-white p-4"
                      >
                        <h4 className="font-bold text-lg">{member.name}</h4>
                        <p className="text-sm text-primary">{member.role}</p>
                        <p className="mt-2 text-sm">{member.desc}</p>
                        <span className="mt-4 text-xs text-gray-300">
                          (Click to close)
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Our Members */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold mb-8">Our Collaborators</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
            {ourMembers.map((member, i) => (
              <motion.div
                key={i}
                className="relative group rounded-xl overflow-hidden shadow-md bg-white/5 border border-white/10"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex flex-col items-center justify-end text-white p-4 transition-opacity">
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Our Clients Say
        </h3>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/20 text-center"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 relative">
                  <Image
                    src={TESTIMONIALS[index].photo}
                    alt={TESTIMONIALS[index].name}
                    fill
                    className="rounded-full object-cover ring-4 ring-primary shadow-md"
                  />
                </div>

                <p className="text-lg italic text-muted-foreground max-w-2xl">
                  “{TESTIMONIALS[index].text}”
                </p>

                <div>
                  <h4 className="font-semibold text-lg">
                    {TESTIMONIALS[index].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {TESTIMONIALS[index].title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Buttons mirip ShowMoreButton style */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 px-5 py-3 
                       rounded-full bg-primary/80 text-white font-medium 
                       shadow-lg transition-all duration-300
                       hover:scale-110 hover:bg-primary hover:shadow-primary/50"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 px-5 py-3 
                       rounded-full bg-primary/80 text-white font-medium 
                       shadow-lg transition-all duration-300
                       hover:scale-110 hover:bg-primary hover:shadow-primary/50"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
