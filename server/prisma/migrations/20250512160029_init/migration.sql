-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'driver', 'customer');

-- CreateEnum
CREATE TYPE "VehicleStatus" AS ENUM ('available', 'in_use', 'maintenance');

-- CreateEnum
CREATE TYPE "ShipmentStatus" AS ENUM ('pending', 'processing', 'in_transit', 'delivered', 'cancelled');

-- CreateEnum
CREATE TYPE "CheckpointStatus" AS ENUM ('pending', 'reached');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" SERIAL NOT NULL,
    "plate_number" TEXT NOT NULL,
    "model" TEXT,
    "capacity" DECIMAL(10,2),
    "current_location" TEXT,
    "status" "VehicleStatus" NOT NULL DEFAULT 'available',

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipments" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "driver_id" INTEGER,
    "tracking_number" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "current_location" TEXT,
    "checkpoint_progress" INTEGER NOT NULL DEFAULT 0,
    "last_updated_timestamp" TIMESTAMP(3),
    "status" "ShipmentStatus" NOT NULL DEFAULT 'pending',
    "estimated_delivery_date" TIMESTAMP(3),
    "actual_delivery_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipment_checkpoints" (
    "id" SERIAL NOT NULL,
    "shipment_id" INTEGER NOT NULL,
    "sequence_number" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "latitude" DECIMAL(10,8),
    "longitude" DECIMAL(11,8),
    "status" "CheckpointStatus" NOT NULL DEFAULT 'pending',
    "reached_at" TIMESTAMP(3),

    CONSTRAINT "shipment_checkpoints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "shipment_id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_plate_number_key" ON "vehicles"("plate_number");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_tracking_number_key" ON "shipments"("tracking_number");

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipment_checkpoints" ADD CONSTRAINT "shipment_checkpoints_shipment_id_fkey" FOREIGN KEY ("shipment_id") REFERENCES "shipments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_shipment_id_fkey" FOREIGN KEY ("shipment_id") REFERENCES "shipments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
