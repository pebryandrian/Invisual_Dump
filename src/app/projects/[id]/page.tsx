// src/app/projects/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Twitter, Facebook, Share2 } from "lucide-react";
import { PROJECT_DETAILS, ProjectId } from "../projects-data";
import { useEffect, useState } from "react";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params?.id as ProjectId;
  const project = PROJECT_DETAILS[projectId];

  // ✅ Simpan URL di state biar tidak error SSR
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  // ✅ fungsi helper untuk "balik & trigger scroll spy"
  const handleBackClick = () => {
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
    }, 200);
  };

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-red-500">Project not found</h1>
        <Link href="/#projects" className="text-blue-400 hover:underline mt-4 block" onClick={handleBackClick}>
          Kembali ke Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 text-neutral-100 min-h-screen">
      {/* === HEADER with BACK BUTTON === */}
      <div className="px-6 md:px-20 py-6 flex items-center">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-neutral-300 hover:text-white transition"
          onClick={handleBackClick}
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </Link>
      </div>

      {/* === HERO GRID === */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 p-6 md:p-12">
        <div className="bg-red-700 aspect-square" />
        <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
        <div className="bg-black flex items-center justify-center text-white font-bold text-xl">
          {project.title}
        </div>
        <div className="bg-gray-700 aspect-square" />
      </section>

      {/* === PROJECT CONTENT === */}
      <section className="px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* LEFT: DESCRIPTION */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-sm text-neutral-400 mb-6">Arts & Culture / 2022</p>
          <p className="leading-relaxed text-neutral-200">{project.description}</p>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="space-y-4 text-sm">
          <div><p className="text-neutral-400">DISCIPLINE</p><p>{project.discipline}</p></div>
          <div><p className="text-neutral-400">CREATIVE DIRECTOR</p><p>{project.creativeDirector}</p></div>
          <div><p className="text-neutral-400">ART DIRECTOR</p><p>{project.artDirector}</p></div>
          <div><p className="text-neutral-400">GRAPHIC DESIGNER</p><p>{project.graphicDesigner}</p></div>
          <div><p className="text-neutral-400">PHOTOGRAPHER</p><p>{project.photographer}</p></div>
          <div><p className="text-neutral-400">PROJECT COLLABORATOR</p><p>{project.projectCollaborator}</p></div>
          <div><p className="text-neutral-400">COPYWRITER</p><p>{project.copywriter}</p></div>
          <div><p className="text-neutral-400">ENVIRONMENTAL GRAPHIC DESIGN</p><p>{project.environmentalGraphicDesign}</p></div>
          <div><p className="text-neutral-400">ACCOUNT EXECUTIVE</p><p>{project.accountExecutive}</p></div>
        </div>
      </section>

      {/* === SHARE BUTTONS === */}
      <section className="px-6 md:px-20 pb-12">
        <div className="flex items-center gap-4">
          <span className="text-neutral-400">Share:</span>
          <Link
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(project.title)}&url=${encodeURIComponent(url)}`}
            target="_blank"
            className="hover:text-blue-400"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            className="hover:text-blue-600"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(project.title)}`}
            target="_blank"
            className="hover:text-red-500"
          >
            <Share2 size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
