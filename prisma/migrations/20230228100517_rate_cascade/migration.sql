-- DropForeignKey
ALTER TABLE "Rate" DROP CONSTRAINT "Rate_variantId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyId_fkey";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rate" ADD CONSTRAINT "Rate_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Product_variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
