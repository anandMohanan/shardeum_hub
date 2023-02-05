-- CreateEnum
CREATE TYPE "Category" AS ENUM ('DEFI', 'NFT', 'GAMING', 'OTHER');

-- CreateTable
CREATE TABLE "SharediumProject" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "twitterLink" TEXT NOT NULL,
    "githubLink" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "discordLink" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "category" "Category" NOT NULL DEFAULT 'OTHER',
    "keywords" TEXT[],

    CONSTRAINT "SharediumProject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SharediumProject_name_key" ON "SharediumProject"("name");
