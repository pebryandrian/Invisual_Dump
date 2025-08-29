// src/app/project-detail/[slug]/page.tsx
import { prisma } from "@/lib/prisma";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
  });

  if (!project) {
    return (
      <div className="px-6 md:px-20 py-12">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
