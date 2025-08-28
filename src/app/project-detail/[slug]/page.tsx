import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getCategoryName } from "@/app/projects/categories";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeading from "@/components/common/SectionHeading";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params;

  const project = await prisma.project.findUnique({
    where: { slug },
  });

  if (!project) {
    return (
      <SectionWrapper>
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/projects" className="text-primary mt-4 block">
          ← Back to Projects
        </Link>
      </SectionWrapper>
    );
  }

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
  ];

  return (
    <SectionWrapper>
      <Link href="/projects" className="text-primary mb-8 block">
        ← Back to Projects
      </Link>

      <SectionHeading title="Project" highlight="Detail" align="left" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
        {/* Gambar */}
        <Image
          src={project.image || "/projects/placeholder.webp"}
          alt={project.title}
          width={1000}
          height={700}
          className="w-full h-[450px] object-cover rounded-2xl shadow"
        />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-6">{project.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {details
              .filter((d) => d.value)
              .map((d) => (
                <div key={d.label} className="flex flex-col">
                  <span className="font-semibold">{d.label}</span>
                  <span>{d.value}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
