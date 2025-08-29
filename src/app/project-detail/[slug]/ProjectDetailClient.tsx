"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Facebook, Twitter } from "lucide-react";
import { getCategoryName } from "@/app/projects/categories";

interface ProjectDetailClientProps {
  project: any;
}

/* =========================
   🔹 Back Button Component
========================= */
function BackButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="relative group inline-flex items-center gap-2 px-8 py-3 
                 rounded-full font-semibold text-white 
                 bg-primary/90 backdrop-blur-md shadow-lg
                 transition-all duration-500
                 hover:scale-105 hover:-translate-y-1 
                 hover:shadow-primary/50"
    >
      <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
      <span className="relative z-10">Back to Projects</span>

      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 to-primary/20 
                       opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
    </Link>
  );
}

/* =========================
   🔹 Detail Item Component
========================= */
function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-white/10 pb-4 last:border-none">
      <span className="block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="block text-base font-medium text-white">{value}</span>
    </div>
  );
}

/* =========================
   🔹 Pinterest Icon (Custom SVG)
========================= */
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.04 2C6.51 2 3 5.66 3 9.76c0 2.34 1.31 5.25 3.42 6.17.32.15.5.08.58-.23l.4-1.58c.04-.16.02-.3-.11-.45-.7-.85-1.26-2.4-1.26-3.85 0-3.72 2.84-7.06 7.67-7.06 4.18 0 6.48 2.55 6.48 5.96 0 4.3-2.38 7.28-5.47 7.28-1.08 0-2.09-.58-2.44-1.25l-.66 2.52c-.24.94-.9 2.12-1.34 2.84.98.3 2.01.47 3.1.47 5.53 0 9.04-3.66 9.04-7.76C21 5.66 17.57 2 12.04 2z" />
    </svg>
  );
}

/* =========================
   🔹 Share Section Component
========================= */
function ShareSection() {
  const platforms = [
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "Pinterest", href: "https://pinterest.com", icon: PinterestIcon },
  ];

  return (
    <motion.div
      className="mt-12 flex items-center gap-6 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <span className="font-semibold">Share:</span>
      <div className="flex gap-4">
        {platforms.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-1 rounded-md 
                       transition-all duration-300 hover:bg-primary/20 
                       hover:text-primary hover:scale-105"
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

/* =========================
   🔹 Main Component
========================= */
export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const details = [
    { label: "Discipline", value: project.discipline },
    { label: "Category", value: getCategoryName(project.category) },
    { label: "Year", value: project.year },
    { label: "Creative Director", value: project.creativeDirector },
    { label: "Art Director", value: project.artDirector },
    { label: "Graphic Designer", value: project.graphicDesigner },
    { label: "Photographer", value: project.photographer },
    { label: "Collaborator", value: project.projectCollaborator },
    { label: "Copywriter", value: project.copywriter },
    { label: "Env. Graphic Design", value: project.environmentalGraphicDesign },
    { label: "Account Executive", value: project.accountExecutive },
  ].filter((d) => d.value);

  return (
    <div className="w-full">
      {/* 🔹 Hero Image */}
      <motion.div
        className="relative w-full mt-11"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={project.image || "/projects/placeholder.webp"}
          alt={project.title}
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* 🔹 Content */}
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-20 py-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {/* Back Button */}
        <div className="mb-8">
          <BackButton href="/projects" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 🔹 Left: Title & description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {project.description}
            </p>
          </motion.div>

          {/* 🔹 Right: Project details */}
          <motion.div
            className="space-y-4 text-sm"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {details.map(({ label, value }) => (
              <DetailItem key={label} label={label} value={value} />
            ))}
          </motion.div>
        </div>

        {/* 🔹 Share section */}
        <ShareSection />
      </motion.div>
    </div>
  );
}
