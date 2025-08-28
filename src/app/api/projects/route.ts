import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// CREATE new project
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newProject = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        discipline: body.discipline,
        category: body.category,
        year: body.year,
        creativeDirector: body.creativeDirector,
        artDirector: body.artDirector,
        graphicDesigner: body.graphicDesigner,
        photographer: body.photographer,
        projectCollaborator: body.projectCollaborator,
        copywriter: body.copywriter,
        environmentalGraphicDesign: body.environmentalGraphicDesign,
        accountExecutive: body.accountExecutive,
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
