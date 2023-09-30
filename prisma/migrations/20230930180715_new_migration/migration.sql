/*
  Warnings:

  - Added the required column `reservation_id` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "reservation_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
