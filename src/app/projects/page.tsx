// src/app/projects/page.tsx
import { prisma } from "@/lib/prisma";
import ProjectCard from "@/components/ProjectCard";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeading from "@/components/common/SectionHeading";
import MotionWrapper from "@/components/common/MotionWrapper";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <SectionWrapper>
      {/* geser heading sedikit ke atas */}
      <div className="-mt-10">
        <SectionHeading title="Our" highlight="Projects" align="left" />

        {/* grid diubah jadi 2 kolom di desktop biar card lebih lebar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <MotionWrapper key={project.id} delay={i * 0.15}>
              <ProjectCard project={project} />
            </MotionWrapper>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
