/*
  Warnings:

  - You are about to drop the column `description` on the `CategoriesForDictionaryLevel` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `CategoriesForDictionaryLevel` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `DictonaryLevel` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `DictonaryLevel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `CategoriesForDictionaryLevel` DROP COLUMN `description`,
    DROP COLUMN `title`;

-- AlterTable
ALTER TABLE `DictonaryLevel` DROP COLUMN `description`,
    DROP COLUMN `title`;
