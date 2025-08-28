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
      <div className="-mt-10"></div>
      <SectionHeading title="Our" highlight="Projects" align="left" />

      {projects.length === 0 ? (
        <p className="text-muted-foreground">
          No projects found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <MotionWrapper key={project.id} delay={i * 0.15}>
              <ProjectCard project={project} />
            </MotionWrapper>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
