"use client";

import Link from "next/link";

export default function ProjectActions({ projectId }: { projectId: string }) {
  async function handleDelete(e: React.MouseEvent) {
    e.preventDefault();
    await fetch(`/api/projects/${projectId}`, { method: "DELETE" });
    window.location.reload();
  }

  return (
    <div className="space-x-3">
      <Link href={`/admin/projects/${projectId}/edit`} className="text-blue-500">
        Edit
      </Link>
      <button type="button" onClick={handleDelete} className="text-red-500">
        Delete
      </button>
    </div>
  );
}
