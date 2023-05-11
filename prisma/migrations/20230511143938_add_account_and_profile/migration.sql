-- CreateTable
CREATE TABLE `Account` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Email` VARCHAR(255) NOT NULL,
    `Password` CHAR(255) NOT NULL,
    `CreatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Email`(`Email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(255) NOT NULL,
    `LastName` VARCHAR(255) NOT NULL,
    `School` VARCHAR(255) NOT NULL,
    `AccountId` INTEGER NOT NULL,

    UNIQUE INDEX `Profile_AccountId_key`(`AccountId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_AccountId_fkey` FOREIGN KEY (`AccountId`) REFERENCES `Account`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
