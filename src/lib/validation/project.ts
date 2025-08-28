import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3, "Title minimal 3 karakter"),
  description: z.string().min(10, "Description minimal 10 karakter"),
  image: z.string().url("Harus berupa URL valid"),
  discipline: z.string().min(2, "Discipline minimal 2 karakter"),
  category: z.string().min(2, "Category minimal 2 karakter"),
  year: z.string().regex(/^\d{4}$/, "Tahun harus 4 digit"),
});

export type ProjectSchema = z.infer<typeof projectSchema>;
