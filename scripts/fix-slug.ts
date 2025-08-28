import { prisma } from "@/lib/prisma";
import slugify from "slugify";

async function main() {
  const projects = await prisma.project.findMany();
  const usedSlugs = new Set<string>();

  for (const project of projects) {
    const baseSlug = slugify(project.title, { lower: true, strict: true }); // <-- ganti let menjadi const
    let slug = baseSlug;
    let counter = 1;

    // Pastikan slug unik
    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    usedSlugs.add(slug);

    await prisma.project.update({
      where: { id: project.id },
      data: { slug },
    });
  }

  console.log("✅ Semua slug sudah diisi & unik!");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
