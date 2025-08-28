import { PrismaClient, Category } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "Brand Identity Redesign",
        description:
          "Redesigning the brand identity with modern visuals and typography.",
        image: "/projects/branding3.webp",
        discipline: "Branding",
        category: Category.BRANDING,
        year: "2025",
        creativeDirector: "John Doe",
        artDirector: "Jane Smith",
      },
      {
        title: "E-commerce Website",
        description: "A full-stack e-commerce solution for lifestyle products.",
        image: "/projects/content1.webp",
        discipline: "Web Development",
        category: Category.WEB,
        year: "2025",
        graphicDesigner: "Alice Johnson",
        projectCollaborator: "Dev Studio",
      },
      {
        title: "Photography Campaign",
        description: "Outdoor photography campaign for a new fashion brand.",
        image: "/projects/branding5.webp",
        discipline: "Photo",
        category: Category.VISUAL,
        year: "2024",
        photographer: "Michael Brown",
      },
      {
        title: "Mobile App UX/UI",
        description: "Designing a mobile application for productivity tracking.",
        image: "/projects/social3.webp",
        discipline: "UI/UX",
        category: Category.SOCIAL_MEDIA,
        year: "2025",
        creativeDirector: "Emily Davis",
      },
      {
        title: "Event Branding",
        description: "Complete event branding package for a tech conference.",
        image: "/projects/branding4.webp",
        discipline: "Branding",
        category: Category.BRANDING,
        year: "2024",
        artDirector: "Kevin Lee",
        copywriter: "Sarah White",
      },
      {
        title: "Environmental Graphic Design",
        description: "Signage and visual design for a co-working space.",
        image: "/projects/branding2.webp",
        discipline: "Environmental Design",
        category: Category.VISUAL,
        year: "2023",
        environmentalGraphicDesign: "Studio XYZ",
      },
      {
        title: "Social Media Graphics",
        description:
          "Creating engaging social media posts for a product launch.",
        image: "/banners/banner1.webp",
        discipline: "Graphic Design",
        category: Category.SOCIAL_MEDIA,
        year: "2025",
        graphicDesigner: "Lily Chen",
      },
      {
        title: "Corporate Presentation Design",
        description: "Designing slides and templates for corporate meetings.",
        image: "/banners/banner2.webp",
        discipline: "Presentation Design",
        category: Category.ADS,
        year: "2024",
        creativeDirector: "Robert King",
      },
      {
        title: "Retail Store Visuals",
        description: "Window displays and in-store graphics for retail stores.",
        image: "/banners/banner3.webp",
        discipline: "Environmental Design",
        category: Category.VISUAL,
        year: "2025",
        artDirector: "Sophia Lopez",
      },
      {
        title: "Mobile Game UI",
        description: "User interface design for a casual mobile game.",
        image: "/banners/banner4.webp",
        discipline: "UI/UX",
        category: Category.WEB,
        year: "2025",
        creativeDirector: "Daniel Wu",
      },
    ],
  });

  console.log("✅ Seed data inserted with ENUM categories!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
