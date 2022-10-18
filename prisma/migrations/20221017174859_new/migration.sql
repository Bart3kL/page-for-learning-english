/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_lessonsId_fkey`;

-- DropForeignKey
ALTER TABLE `Exercise` DROP FOREIGN KEY `Exercise_id_fkey`;

-- DropForeignKey
ALTER TABLE `Grammar` DROP FOREIGN KEY `Grammar_id_fkey`;

-- DropForeignKey
ALTER TABLE `Vocabulary` DROP FOREIGN KEY `Vocabulary_id_fkey`;

-- AlterTable
ALTER TABLE `Exercise` ADD COLUMN `lessonsId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Grammar` ADD COLUMN `lessonsId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Vocabulary` ADD COLUMN `lessonsId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Category`;

-- AddForeignKey
ALTER TABLE `Vocabulary` ADD CONSTRAINT `Vocabulary_lessonsId_fkey` FOREIGN KEY (`lessonsId`) REFERENCES `Lessons`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grammar` ADD CONSTRAINT `Grammar_lessonsId_fkey` FOREIGN KEY (`lessonsId`) REFERENCES `Lessons`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_lessonsId_fkey` FOREIGN KEY (`lessonsId`) REFERENCES `Lessons`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
