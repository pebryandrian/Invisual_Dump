// src/app/projects/projects-data.ts

export type ProjectId =
  | "BrandA" | "BrandB" | "BrandC" | "BrandD" | "BrandE"
  | "SosA" | "SosB" | "SosC" | "SosD" | "SosE"
  | "ConA" | "ConB" | "ConC" | "ConD" | "ConE";

export interface ProjectDetail {
  title: string;
  description: string;
  image: string;
  discipline: string;
  creativeDirector: string;
  artDirector: string;
  graphicDesigner: string;
  photographer: string;
  projectCollaborator: string;
  copywriter: string;
  environmentalGraphicDesign: string;
  accountExecutive: string;
}

// Dummy template untuk entry yang belum lengkap
const dummy: ProjectDetail = {
  title: "Coming Soon",
  description: "Detail coming soon",
  image: "/projects/placeholder.webp",
  discipline: "-",
  creativeDirector: "-",
  artDirector: "-",
  graphicDesigner: "-",
  photographer: "-",
  projectCollaborator: "-",
  copywriter: "-",
  environmentalGraphicDesign: "-",
  accountExecutive: "-",
};

export const PROJECT_DETAILS: Record<ProjectId, ProjectDetail> = {
  // === Branding Projects ===
  BrandA: {
    ...dummy,
    title: "Brand A",
    description: "Brand A adalah proyek branding dengan fokus pada identitas visual yang modern dan minimalis.",
    image: "/projects/branding1.webp",
    discipline: "Branding",
    creativeDirector: "John Doe",
    artDirector: "Jane Doe",
    graphicDesigner: "Emily Johnson",
    photographer: "David Lee",
    projectCollaborator: "Sarah Kim",
    copywriter: "Michael Brown",
    environmentalGraphicDesign: "Tom White",
    accountExecutive: "Rachel Adams",
  },
  BrandB: {
    ...dummy,
    title: "Brand B",
    description: "Brand B menonjolkan konsistensi warna dan tipografi untuk memperkuat image perusahaan.",
    image: "/projects/branding2.webp",
    discipline: "Branding",
  },
  BrandC: { ...dummy, title: "Brand C", image: "/projects/branding3.webp", discipline: "Branding" },
  BrandD: { ...dummy, title: "Brand D", image: "/projects/branding4.webp", discipline: "Branding" },
  BrandE: { ...dummy, title: "Brand E", image: "/projects/branding5.webp", discipline: "Branding" },

  // === Social Media Projects ===
  SosA: {
    ...dummy,
    title: "Social Media A",
    description: "Social Media A adalah kampanye interaktif dengan fokus pada konten visual yang engaging.",
    image: "/projects/social1.webp",
    discipline: "Social Media",
    creativeDirector: "Alice Brown",
    artDirector: "Chris Evans",
  },
  SosB: { ...dummy, title: "Social Media B", image: "/projects/social2.webp", discipline: "Social Media" },
  SosC: { ...dummy, title: "Social Media C", image: "/projects/social3.webp", discipline: "Social Media" },
  SosD: { ...dummy, title: "Social Media D", image: "/projects/social4.webp", discipline: "Social Media" },
  SosE: { ...dummy, title: "Social Media E", image: "/projects/social5.webp", discipline: "Social Media" },

  // === Content Projects ===
  ConA: {
    title: "Content A",
    description: "Proyek content A dengan fokus storytelling digital.",
    image: "/projects/content1.webp",
    discipline: "Content",
    creativeDirector: "Alice Brown",
    artDirector: "Chris Evans",
    graphicDesigner: "Emily Johnson",
    photographer: "David Lee",
    projectCollaborator: "Sarah Kim",
    copywriter: "Michael Brown",
    environmentalGraphicDesign: "Tom White",
    accountExecutive: "Rachel Adams",
  },
  ConB: {
    title: "Content B",
    description: "Proyek content B dengan strategi micro-influencer.",
    image: "/projects/content2.webp",
    discipline: "Content",
    creativeDirector: "Alice Brown",
    artDirector: "Chris Evans",
    graphicDesigner: "Emily Johnson",
    photographer: "David Lee",
    projectCollaborator: "Sarah Kim",
    copywriter: "Michael Brown",
    environmentalGraphicDesign: "Tom White",
    accountExecutive: "Rachel Adams",
  },
  ConC: {
    title: "Content C",
    description: "Content C menggabungkan campaign online & offline.",
    image: "/projects/content3.webp",
    discipline: "Content",
    creativeDirector: "Alice Brown",
    artDirector: "Chris Evans",
    graphicDesigner: "Emily Johnson",
    photographer: "David Lee",
    projectCollaborator: "Sarah Kim",
    copywriter: "Michael Brown",
    environmentalGraphicDesign: "Tom White",
    accountExecutive: "Rachel Adams",
  },
  ConD: {
    ...dummy,
    title: "Content D",
    image: "/projects/content4.webp",
    discipline: "Content",
  },
  ConE: {
    ...dummy,
    title: "Content E",
    image: "/projects/content5.webp",
    discipline: "Content",
  },
  
};
