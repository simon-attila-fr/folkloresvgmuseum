-- Active: 1655911280794@@127.0.0.1@3306@folkloresvgmuseum
-- Tables

CREATE TABLE `contenttext` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `ref` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL
)