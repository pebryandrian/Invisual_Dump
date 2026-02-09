-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "discipline" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "creativeDirector" TEXT,
    "artDirector" TEXT,
    "graphicDesigner" TEXT,
    "photographer" TEXT,
    "projectCollaborator" TEXT,
    "copywriter" TEXT,
    "environmentalGraphicDesign" TEXT,
    "accountExecutive" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
