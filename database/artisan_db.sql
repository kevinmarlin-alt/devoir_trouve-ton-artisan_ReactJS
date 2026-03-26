-- DROP DATABASE
DROP DATABASE IF EXISTS `trouve_ton_artisan`;

-- Création de la base de données
CREATE DATABASE IF NOT EXISTS `trouve_ton_artisan` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Sélection de la base de donnée
USE `trouve_ton_artisan`;

DROP USER IF EXISTS 'client'@'localhost';

-- Création d'un nouvel utilisateur admin
CREATE USER 'client'@'localhost' IDENTIFIED BY 'MotDePasseFort123!';

-- Attributions des privilèges
GRANT SELECT ON trouve_ton_artisan.* TO 'client'@'localhost';

-- Appliquation des privilèges
FLUSH PRIVILEGES;



-- Création des tables 

-- - - - - - - - - - - - 
-- TABLE CATEGORIES
-- - - - - - - - - - - - 
CREATE TABLE `categories` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- - - - - - - - - - - - 
-- TABLE SPECIALITIES
-- - - - - - - - - - - - 
CREATE TABLE `specialities` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL UNIQUE,
    `category_id` INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- - - - - - - - - - - - 
-- TABLE ARTISANS
-- - - - - - - - - - - - 
CREATE TABLE `artisans` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `name` VARCHAR(50) NOT NULL UNIQUE,
    `speciality_id` INT NOT NULL,
    `rate` DECIMAL(2,1) NOT NULL CHECK (rate BETWEEN 0 AND 5),
    `city` VARCHAR(50) NOT NULL,
    `about` VARCHAR(1000) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE CHECK (email REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    `website` VARCHAR(255) UNIQUE,
    `top_artisan` BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id),
    FOREIGN KEY (speciality_id) REFERENCES specialities(id)
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;