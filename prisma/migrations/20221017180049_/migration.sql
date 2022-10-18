/*
  Warnings:

  - You are about to drop the column `lessonsId` on the `Vocabulary` table. All the data in the column will be lost.
  - You are about to drop the `Exercise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Grammar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Exercise` DROP FOREIGN KEY `Exercise_lessonsId_fkey`;

-- DropForeignKey
ALTER TABLE `Grammar` DROP FOREIGN KEY `Grammar_lessonsId_fkey`;

-- DropForeignKey
ALTER TABLE `Vocabulary` DROP FOREIGN KEY `Vocabulary_lessonsId_fkey`;

-- AlterTable
ALTER TABLE `Vocabulary` DROP COLUMN `lessonsId`,
    ADD COLUMN `vocabularyForLessonId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Exercise`;

-- DropTable
DROP TABLE `Grammar`;

-- CreateTable
CREATE TABLE `VocabularyForLesson` (
    `id` VARCHAR(191) NOT NULL,
    `lessonsId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `VocabularyForLesson` ADD CONSTRAINT `VocabularyForLesson_lessonsId_fkey` FOREIGN KEY (`lessonsId`) REFERENCES `Lessons`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vocabulary` ADD CONSTRAINT `Vocabulary_vocabularyForLessonId_fkey` FOREIGN KEY (`vocabularyForLessonId`) REFERENCES `VocabularyForLesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
