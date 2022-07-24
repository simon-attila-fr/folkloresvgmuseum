-- Active: 1655911280794@@127.0.0.1@3306@folkloresvgmuseum
-- Tables

CREATE TABLE `contenttext` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `ref` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL
);

CREATE TABLE `users` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `pseudo` VARCHAR(255) UNIQUE NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(255)
);

CREATE TABLE `motifcard` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `motifName` VARCHAR(255) NOT NULL,
  `counrty` VARCHAR(255) NOT NULL,
  `region` VARCHAR(255),
  `createdAt` DATE NOT NULL,
  `urlOriginal` VARCHAR(300) NOT NULL,
  `altTextOriginal` VARCHAR(255) NOT NULL,
  `urlSvg` VARCHAR(300) NOT NULL,
  `altTextSvg` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `creatorId` INT NOT NULL
);

CREATE TABLE `favorit` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `userId` INT,
  `motifCardId` INT
);

ALTER TABLE `motifcard` ADD FOREIGN KEY (`creatorId`) REFERENCES `users` (`id`);
ALTER TABLE `favorit` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
ALTER TABLE `favorit` ADD FOREIGN KEY (`motifCardId`) REFERENCES `motifcard` (`id`);