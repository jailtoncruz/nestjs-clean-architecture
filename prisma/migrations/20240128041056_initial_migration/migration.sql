-- CreateEnum
CREATE TYPE "EquipmentStatus" AS ENUM ('Available', 'Unavailable');

-- CreateEnum
CREATE TYPE "EquipmentType" AS ENUM ('Truck', 'Forklift', 'Crane', 'Excavator', 'Bulldozer', 'Grader', 'Paver', 'ConcreteMixerTruck', 'Compactor', 'SkidSteerLoader', 'BackhoeLoader', 'WheelLoader');

-- CreateTable
CREATE TABLE "equipments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "location_id" TEXT NOT NULL,
    "current_checkout_id" TEXT,
    "type" "EquipmentType" NOT NULL,
    "status" "EquipmentStatus" NOT NULL DEFAULT 'Available',

    CONSTRAINT "equipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "equipments" ADD CONSTRAINT "equipments_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
