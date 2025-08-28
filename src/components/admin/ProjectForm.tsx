"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema, ProjectSchema } from "@/lib/validation/project";
import { categories, type CategorySlug } from "@/app/projects/categories";

interface Props {
  defaultValues?: Partial<ProjectSchema>;
  onSubmit: (data: ProjectSchema) => Promise<void>;
  submitLabel: string;
}

export default function ProjectForm({
  defaultValues,
  onSubmit,
  submitLabel,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectSchema>({
    resolver: zodResolver(projectSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-lg"
    >
      {/* Title */}
      <div>
        <input
          {...register("title")}
          placeholder="Title"
          className="w-full border px-3 py-2 rounded bg-neutral-900 text-white"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      {/* Description */}
      <div>
        <textarea
          {...register("description")}
          placeholder="Description"
          className="w-full border px-3 py-2 rounded bg-neutral-900 text-white"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

      {/* Image */}
      <div>
        <input
          {...register("image")}
          placeholder="Image URL"
          className="w-full border px-3 py-2 rounded bg-neutral-900 text-white"
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
      </div>

      {/* Discipline */}
      <div>
        <input
          {...register("discipline")}
          placeholder="Discipline"
          className="w-full border px-3 py-2 rounded bg-neutral-900 text-white"
        />
        {errors.discipline && <p className="text-red-500 text-sm">{errors.discipline.message}</p>}
      </div>

      {/* Category (Dropdown fix) */}
      <div>
        <select
          {...register("category")}
          className="w-full border px-3 py-2 rounded bg-neutral-900 text-white"
        >
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
      </div>

      {/* Year */}
      <div>
        <input
          {...register("year")}
          placeholder="Year (ex: 2025)"
          className="w-full border px-3 py-2 rounded bg-neutral-900 text-white"
        />
        {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        {submitLabel}
      </button>
    </form>
  );
}
