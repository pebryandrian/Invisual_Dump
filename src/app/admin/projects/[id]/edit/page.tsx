"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/projects/${id}`);
      if (res.ok) {
        const data = await res.json();
        setForm(data);
      } else {
        alert("Project not found");
        router.push("/admin/projects");
      }
    }
    if (id) fetchData();
  }, [id, router]);

  if (!form) return <p className="p-6">Loading...</p>;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/admin/projects");
    } else {
      alert("Failed to update project");
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(form).map((key) =>
          key === "id" || key === "createdAt" ? null : (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium mb-1 capitalize">
                {key}
              </label>
              <input
                type="text"
                placeholder={key}
                value={form[key] ?? ""}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="border rounded px-3 py-2"
              />
            </div>
          )
        )}

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}
