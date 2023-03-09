/*
  Warnings:

  - Changed the type of `name` on the `Module` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ModuleName" AS ENUM ('User', 'Module', 'Color', 'Uom', 'Product_type', 'Product_dimension', 'Product_variant', 'Rate', 'Product', 'Purchase_order', 'Company', 'Sub_company');

-- AlterTable
ALTER TABLE "Module" DROP COLUMN "name",
ADD COLUMN     "name" "ModuleName" NOT NULL;
