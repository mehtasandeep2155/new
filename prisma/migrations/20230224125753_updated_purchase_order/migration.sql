/*
  Warnings:

  - You are about to drop the column `discount` on the `Purchase_order` table. All the data in the column will be lost.
  - You are about to drop the column `net_weight_cost` on the `Purchase_order` table. All the data in the column will be lost.
  - Added the required column `cost_per_kg` to the `Purchase_order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `has_raw_material` to the `Purchase_order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Purchase_order" DROP COLUMN "discount",
DROP COLUMN "net_weight_cost",
ADD COLUMN     "coating_amount" DOUBLE PRECISION,
ADD COLUMN     "coating_discount" DOUBLE PRECISION,
ADD COLUMN     "cost_per_kg" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "has_raw_material" BOOLEAN NOT NULL,
ALTER COLUMN "net_amount" DROP NOT NULL;
