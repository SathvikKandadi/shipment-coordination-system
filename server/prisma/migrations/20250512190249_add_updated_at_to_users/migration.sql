/*
  Warnings:

  - You are about to drop the column `actual_delivery_date` on the `shipments` table. All the data in the column will be lost.
  - You are about to drop the column `checkpoint_progress` on the `shipments` table. All the data in the column will be lost.
  - You are about to drop the column `current_location` on the `shipments` table. All the data in the column will be lost.
  - You are about to drop the column `destination` on the `shipments` table. All the data in the column will be lost.
  - You are about to drop the column `estimated_delivery_date` on the `shipments` table. All the data in the column will be lost.
  - You are about to drop the column `last_updated_timestamp` on the `shipments` table. All the data in the column will be lost.
  - You are about to drop the column `origin` on the `shipments` table. All the data in the column will be lost.
  - You are about to drop the `notifications` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `shipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimatedDeliveryDate` to the `shipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromLocation` to the `shipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `shipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toLocation` to the `shipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `shipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `shipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_shipment_id_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_user_id_fkey";

-- AlterTable
ALTER TABLE "shipments" DROP COLUMN "actual_delivery_date",
DROP COLUMN "checkpoint_progress",
DROP COLUMN "current_location",
DROP COLUMN "destination",
DROP COLUMN "estimated_delivery_date",
DROP COLUMN "last_updated_timestamp",
DROP COLUMN "origin",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "estimatedDeliveryDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fromLocation" JSONB NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "toLocation" JSONB NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "vehicles" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "notifications";

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "shipmentId" INTEGER,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "shipments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
