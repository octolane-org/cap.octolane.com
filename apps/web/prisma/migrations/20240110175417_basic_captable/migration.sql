/*
  Warnings:

  - Added the required column `companyId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "companyId" TEXT NOT NULL,
ADD COLUMN     "role" TEXT;

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "industry" TEXT,
    "incorporationDate" TIMESTAMP(3),

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquityInstrument" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "totalIssued" INTEGER NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "EquityInstrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shareholder" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "shareholderType" TEXT NOT NULL,

    CONSTRAINT "Shareholder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shareholding" (
    "id" SERIAL NOT NULL,
    "shareholderId" INTEGER NOT NULL,
    "instrumentId" INTEGER NOT NULL,
    "sharesOwned" INTEGER NOT NULL,
    "acquisitionDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shareholding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "shareholdingId" INTEGER NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL,
    "sharesTransferred" INTEGER NOT NULL,
    "transactionType" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CapTable" (
    "id" SERIAL NOT NULL,
    "companyId" TEXT NOT NULL,
    "snapshotDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CapTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EquityInstrument_companyId_idx" ON "EquityInstrument"("companyId");

-- CreateIndex
CREATE INDEX "Shareholder_userId_idx" ON "Shareholder"("userId");

-- CreateIndex
CREATE INDEX "Shareholding_shareholderId_idx" ON "Shareholding"("shareholderId");

-- CreateIndex
CREATE INDEX "Shareholding_instrumentId_idx" ON "Shareholding"("instrumentId");

-- CreateIndex
CREATE INDEX "Transaction_shareholdingId_idx" ON "Transaction"("shareholdingId");

-- CreateIndex
CREATE INDEX "CapTable_companyId_idx" ON "CapTable"("companyId");

-- CreateIndex
CREATE INDEX "User_companyId_idx" ON "User"("companyId");
