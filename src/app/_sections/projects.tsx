// src/app/_sections/projects.tsx
import { prisma } from "@/lib/prisma";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeading from "@/components/common/SectionHeading";

export default async function ProjectsSection({ id }: { id?: string }) {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Latest" highlight="Projects" />

      {projects.length === 0 ? (
        <p className="text-muted-foreground">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary/80 transition"
        >
          Show More →
        </Link>
      </div>
    </SectionWrapper>
  );
}
