/*
  Warnings:

  - Added the required column `usuarioId` to the `Libro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Libro` ADD COLUMN `disponible` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `usuarioId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Usuario` ADD COLUMN `roles` VARCHAR(191) NOT NULL DEFAULT 'usuario';

-- CreateTable
CREATE TABLE `Prestamo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `libroId` INTEGER NOT NULL,
    `fechaPrestamo` DATETIME(3) NOT NULL,
    `fechaDevolucion` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Historial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `libroId` INTEGER NOT NULL,
    `fechaPrestamo` DATETIME(3) NOT NULL,
    `fechaDevolucion` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Libro` ADD CONSTRAINT `Libro_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prestamo` ADD CONSTRAINT `Prestamo_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prestamo` ADD CONSTRAINT `Prestamo_libroId_fkey` FOREIGN KEY (`libroId`) REFERENCES `Libro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historial` ADD CONSTRAINT `Historial_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historial` ADD CONSTRAINT `Historial_libroId_fkey` FOREIGN KEY (`libroId`) REFERENCES `Libro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
