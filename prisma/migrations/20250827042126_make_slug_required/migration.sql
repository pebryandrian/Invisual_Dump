/*
  Warnings:

  - Made the column `slug` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
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
INSERT INTO "new_Project" ("accountExecutive", "artDirector", "category", "copywriter", "createdAt", "creativeDirector", "description", "discipline", "environmentalGraphicDesign", "graphicDesigner", "id", "image", "photographer", "projectCollaborator", "slug", "title", "year") SELECT "accountExecutive", "artDirector", "category", "copywriter", "createdAt", "creativeDirector", "description", "discipline", "environmentalGraphicDesign", "graphicDesigner", "id", "image", "photographer", "projectCollaborator", "slug", "title", "year" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
