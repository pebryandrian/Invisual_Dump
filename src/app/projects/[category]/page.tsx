// src/app/projects/[category]/page.tsx
import { prisma } from "@/lib/prisma";
import ProjectCard from "@/components/ProjectCard";
import { getCategoryValue } from "@/app/projects/categories";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeading from "@/components/common/SectionHeading";
import MotionWrapper from "@/components/common/MotionWrapper";

interface CategoryPageProps {
  params: { category: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryEnum = getCategoryValue(params.category);

  if (!categoryEnum) {
    return (
      <SectionWrapper>
        <h1 className="text-2xl font-bold">Category not found</h1>
      </SectionWrapper>
    );
  }

  const projects = await prisma.project.findMany({
    where: { category: categoryEnum },
    orderBy: { createdAt: "desc" },
  });

  return (
    <SectionWrapper className="flex-1">
      {/* geser heading sedikit ke atas */}
      <div className="-mt-10">
        <SectionHeading title="Our" highlight="Projects" align="left" />

        {projects.length === 0 ? (
          <p className="text-muted-foreground">
            No projects found in this category.
          </p>
        ) : (
          // konsisten: 2 kolom di desktop biar card lebih lebar
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <MotionWrapper key={project.id} delay={i * 0.15}>
                {/* Wrapper group untuk hover */}
                <div className="relative group rounded-2xl">
  {/* Glow border */}
  <div
    className="absolute inset-0 rounded-2xl border border-transparent
    group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb,59,130,246),0.4)]
    transition-all duration-500 pointer-events-none z-10"
  />
  
  {/* Card */}
  <div className="relative z-20">
    <ProjectCard project={project} />
  </div>
</div>

              </MotionWrapper>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
