-- add DROP DATABASE
DROP DATABASE IF EXISTS `trouve_ton_artisan`;

-- Création de la base de données
CREATE DATABASE IF NOT EXISTS `trouve_ton_artisan` DEFAULT CHARACTER SET  utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Sélection de la base de donnée
USE `trouve_ton_artisan`;

-- Création des tables 
CREATE TABLE IF NOT EXISTS `trouve_ton_artisan`.`artisans` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `nom` VARCHAR(50) NOT NULL UNIQUE,
    `specialite` VARCHAR(50) NOT NULL,
    `note` DECIMAL(2,1) NOT NULL CHECK (note >= 0),
    `ville` VARCHAR(50) NOT NULL,
    `a_propos` VARCHAR(1000) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE CHECK (email REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    `site_web` VARCHAR(255) UNIQUE,
    `categorie` VARCHAR(50)NOT NULL,
    `top_artisan` BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;