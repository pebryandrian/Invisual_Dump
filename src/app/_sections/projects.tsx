// src/app/_sections/projects.tsx
import { prisma } from "@/lib/prisma";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeading from "@/components/common/SectionHeading";
import { ArrowRight } from "lucide-react";

// 🔹 Reusable Show More Button
function ShowMoreButton({ href }: { href: string }) {
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
      <span className="relative z-10">Show More</span>
      <ArrowRight
        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
      />
      {/* Glow ring */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 to-primary/20 
                       opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
    </Link>
  );
}

export default async function ProjectsSection({ id }: { id?: string }) {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  return (
    <SectionWrapper id={id ?? "projects"}>
      <SectionHeading title="Latest" highlight="Projects" />

      {projects.length === 0 ? (
        <p className="text-muted-foreground">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative transform transition-all duration-300 
                         hover:-translate-y-2 hover:scale-[1.02] 
                         hover:shadow-xl hover:shadow-primary/20 
                         rounded-2xl overflow-hidden"
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent 
                              group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] 
                              transition-all duration-500 pointer-events-none" />

              {/* Project Card */}
              <div className="transition-shadow duration-500 
                              group-hover:shadow-2xl group-hover:shadow-black/20 
                              rounded-2xl overflow-hidden">
                <ProjectCard project={p} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show More Button */}
      <div className="mt-12 flex justify-center">
        <ShowMoreButton href="/projects" />
      </div>
    </SectionWrapper>
  );
}
