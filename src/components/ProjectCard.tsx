import Image from "next/image";
import Link from "next/link";
import { Project } from "@prisma/client";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
    href={`/project-detail/${project.slug}`}
      className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
    >
      <div className="relative aspect-video w-full">
  <Image
    src={project.image || "/projects/placeholder.jpg"}
    alt={project.title}
    fill
    className="object-cover"
  />
</div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-sm text-gray-500">{project.discipline}</p>
      </div>
    </Link>
  );
}
