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
      <div className="-mt-10">
        <SectionHeading title="Our" highlight="Projects" align="left" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <MotionWrapper key={project.id} delay={i * 0.15}>
              <div
                className="group relative transform transition-all duration-300 
                           hover:-translate-y-2 hover:scale-[1.02] 
                           hover:shadow-xl hover:shadow-primary/20 
                           rounded-2xl overflow-hidden"
              >
                {/* Glow border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent 
                                group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] 
                                transition-all duration-500 pointer-events-none" />
                {/* Card */}
                <div className="transition-shadow duration-500 
                                group-hover:shadow-2xl group-hover:shadow-black/20 
                                rounded-2xl overflow-hidden">
                  <ProjectCard project={project} />
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
