import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import ProjectActions from "@/components/admin/ProjectActions";

const prisma = new PrismaClient();

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Projects</h1>
      <Link href="/admin/projects/new" className="px-4 py-2 bg-blue-600 text-white rounded">
        + Add Project
      </Link>

      <div className="mt-6 space-y-4">
        {projects.map((p) => (
          <div key={p.id} className="flex justify-between items-center border-b py-2">
            <div>
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-400">{p.category}</p>
            </div>
            <ProjectActions projectId={p.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
