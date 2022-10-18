-- CreateTable
CREATE TABLE `GrammarForLesson` (
    `id` VARCHAR(191) NOT NULL,
    `lessonsId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Grammar` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `grammarForLessonId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExerciseForLesson` (
    `id` VARCHAR(191) NOT NULL,
    `lessonsId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercise` (
    `id` VARCHAR(191) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `option1` VARCHAR(191) NOT NULL,
    `option2` VARCHAR(191) NOT NULL,
    `option3` VARCHAR(191) NOT NULL,
    `correctAnswer` VARCHAR(191) NOT NULL,
    `exerciseForLessonId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GrammarForLesson` ADD CONSTRAINT `GrammarForLesson_lessonsId_fkey` FOREIGN KEY (`lessonsId`) REFERENCES `Lessons`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grammar` ADD CONSTRAINT `Grammar_grammarForLessonId_fkey` FOREIGN KEY (`grammarForLessonId`) REFERENCES `GrammarForLesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExerciseForLesson` ADD CONSTRAINT `ExerciseForLesson_lessonsId_fkey` FOREIGN KEY (`lessonsId`) REFERENCES `Lessons`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_exerciseForLessonId_fkey` FOREIGN KEY (`exerciseForLessonId`) REFERENCES `ExerciseForLesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
