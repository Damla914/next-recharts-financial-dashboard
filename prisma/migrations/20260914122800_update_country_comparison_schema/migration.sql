/*
  Warnings:

  - You are about to drop the column `DE` on the `CountryComparison` table. All the data in the column will be lost.
  - You are about to drop the column `IN` on the `CountryComparison` table. All the data in the column will be lost.
  - You are about to drop the column `TR` on the `CountryComparison` table. All the data in the column will be lost.
  - You are about to drop the column `US` on the `CountryComparison` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dimension,countryCode]` on the table `CountryComparison` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `countryCode` to the `CountryComparison` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `CountryComparison` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CountryComparison" DROP COLUMN "DE",
DROP COLUMN "IN",
DROP COLUMN "TR",
DROP COLUMN "US",
ADD COLUMN     "countryCode" TEXT NOT NULL,
ADD COLUMN     "score" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CountryComparison_dimension_countryCode_key" ON "CountryComparison"("dimension", "countryCode");
