import Image from "next/image";
import Link from "next/link";
import { Project } from "@prisma/client";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/project-detail/${project.slug}`}
      className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image || "/projects/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 bg-white dark:bg-neutral-900">
        <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {project.discipline}
        </p>
      </div>
    </Link>
  );
}
