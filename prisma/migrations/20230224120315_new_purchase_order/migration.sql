-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('Anodized', 'Powdered');

-- CreateEnum
CREATE TYPE "ProductSubType" AS ENUM ('Plain', 'Normal', 'Standard', 'Premium');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SuperAdmin', 'Admin', 'BranchUser', 'FactoryUser', 'Labour');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "companyId" TEXT,
    "passwordResetAt" TIMESTAMP(3),
    "passwordResetToken" TEXT,
    "role" "Role" NOT NULL DEFAULT 'BranchUser',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Module" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "controls" TEXT[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "count" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "weightUomId" TEXT NOT NULL,
    "rateId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_variant" (
    "id" TEXT NOT NULL,
    "sectionName" TEXT NOT NULL,
    "sectionNumber" INTEGER NOT NULL,
    "width" DOUBLE PRECISION,
    "height" DOUBLE PRECISION,
    "thickness" DOUBLE PRECISION,
    "outerDiameter" DOUBLE PRECISION,
    "basePrice" DOUBLE PRECISION,
    "weight" TEXT NOT NULL,

    CONSTRAINT "Product_variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_type" (
    "id" TEXT NOT NULL,
    "type" "ProductType" NOT NULL,
    "subtype" "ProductSubType" NOT NULL,

    CONSTRAINT "Product_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_dimension" (
    "id" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "uomId" TEXT NOT NULL,

    CONSTRAINT "Product_dimension_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Uom" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Uom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rate" (
    "id" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "variantId" TEXT NOT NULL,
    "colorId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "dimensionId" TEXT NOT NULL,

    CONSTRAINT "Rate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase_order" (
    "id" TEXT NOT NULL,
    "challan_number" INTEGER NOT NULL,
    "order_number" INTEGER NOT NULL,
    "customer_name" TEXT NOT NULL,
    "issued_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "net_weight" DOUBLE PRECISION NOT NULL,
    "net_weight_cost" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION,
    "tax" DOUBLE PRECISION,
    "gross_amount" DOUBLE PRECISION NOT NULL,
    "net_amount" DOUBLE PRECISION NOT NULL,
    "final_amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Purchase_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sub_company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sub_company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToPurchase_order" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CompanyToSub_company" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_passwordResetToken_key" ON "User"("passwordResetToken");

-- CreateIndex
CREATE UNIQUE INDEX "Product_variant_sectionNumber_key" ON "Product_variant"("sectionNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Color_color_key" ON "Color"("color");

-- CreateIndex
CREATE UNIQUE INDEX "Uom_type_key" ON "Uom"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_order_challan_number_key" ON "Purchase_order"("challan_number");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_order_order_number_key" ON "Purchase_order"("order_number");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToPurchase_order_AB_unique" ON "_ProductToPurchase_order"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToPurchase_order_B_index" ON "_ProductToPurchase_order"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToSub_company_AB_unique" ON "_CompanyToSub_company"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToSub_company_B_index" ON "_CompanyToSub_company"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_weightUomId_fkey" FOREIGN KEY ("weightUomId") REFERENCES "Uom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product_dimension" ADD CONSTRAINT "Product_dimension_uomId_fkey" FOREIGN KEY ("uomId") REFERENCES "Uom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rate" ADD CONSTRAINT "Rate_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Product_variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rate" ADD CONSTRAINT "Rate_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rate" ADD CONSTRAINT "Rate_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Product_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rate" ADD CONSTRAINT "Rate_dimensionId_fkey" FOREIGN KEY ("dimensionId") REFERENCES "Product_dimension"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToPurchase_order" ADD CONSTRAINT "_ProductToPurchase_order_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToPurchase_order" ADD CONSTRAINT "_ProductToPurchase_order_B_fkey" FOREIGN KEY ("B") REFERENCES "Purchase_order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToSub_company" ADD CONSTRAINT "_CompanyToSub_company_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToSub_company" ADD CONSTRAINT "_CompanyToSub_company_B_fkey" FOREIGN KEY ("B") REFERENCES "Sub_company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
