"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    year: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/admin/projects");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Add New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="text"
            placeholder={key}
            value={form[key as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />
        ))}
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
          Save
        </button>
      </form>
    </div>
  );
}
