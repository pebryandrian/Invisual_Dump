"use client";

import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="bg-neutral-900 p-6 rounded-lg shadow space-y-4">
          <p>Selamat datang di halaman Admin 🎉</p>

          <div className="flex gap-4">
            <button
              onClick={() => router.push("/admin/projects")}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 transition rounded"
            >
              Kelola Projects
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-500 transition rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
