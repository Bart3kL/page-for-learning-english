/*
  Warnings:

  - You are about to drop the column `categoryId` on the `CategoriesForDictionaryLevel` table. All the data in the column will be lost.
  - You are about to drop the column `audio` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `subcategoryId` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `translation` on the `Subcategory` table. All the data in the column will be lost.
  - Added the required column `title` to the `Subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `CategoriesForDictionaryLevel` DROP FOREIGN KEY `CategoriesForDictionaryLevel_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Subcategory` DROP FOREIGN KEY `Subcategory_subcategoryId_fkey`;

-- AlterTable
ALTER TABLE `CategoriesForDictionaryLevel` DROP COLUMN `categoryId`,
    ADD COLUMN `levelId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Subcategory` DROP COLUMN `audio`,
    DROP COLUMN `name`,
    DROP COLUMN `subcategoryId`,
    DROP COLUMN `translation`,
    ADD COLUMN `categoryId` VARCHAR(191) NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Words` ADD COLUMN `example1` VARCHAR(191) NULL,
    ADD COLUMN `example2` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `CategoriesForDictionaryLevel` ADD CONSTRAINT `CategoriesForDictionaryLevel_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `DictonaryLevel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subcategory` ADD CONSTRAINT `Subcategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `CategoriesForDictionaryLevel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
