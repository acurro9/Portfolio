-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS portfolio;

-- Seleccionar la base de datos
USE portfolio;

-- Crear la tabla 'languages'
CREATE TABLE IF NOT EXISTS languages (
    id INT PRIMARY KEY,
    lang1 VARCHAR(255),
    lang2 VARCHAR(255) NULL,
    lang3 VARCHAR(255) NULL,
    lang4 VARCHAR(255) NULL,
    lang5 VARCHAR(255) NULL,
    lang6 VARCHAR(255) NULL
);

-- Insertar datos de ejemplo en la tabla 'languages'
INSERT INTO languages (id, lang1, lang2) VALUES
(1, 'Nombre1L1', 'Nombre1L2'),
(2, 'Nombre2L1', 'Nombre2L2'),
(3, 'Nombre3L1', 'Nombre3L2');

-- Crear la tabla 'images'
CREATE TABLE IF NOT EXISTS images (
    id INT PRIMARY KEY,
    img1 VARCHAR(255),
    img2 VARCHAR(255) NULL,
    img3 VARCHAR(255) NULL,
    img4 VARCHAR(255) NULL,
    img5 VARCHAR(255) NULL,
    img6 VARCHAR(255) NULL,
    img7 VARCHAR(255) NULL,
    img8 VARCHAR(255) NULL
);

-- Insertar datos de ejemplo en la tabla 'images'
INSERT INTO images (id, img1, img2) VALUES
(1, 'imagen1.jpg', 'imagen2.jpg'),
(2, 'imagen3.jpg', 'imagen4.jpg'),
(3, 'imagen5.jpg', 'imagen6.jpg');

-- Crear la tabla 'projects'
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    languages INT,
    images INT,
    imagePrimary VARCHAR(255)
    FOREIGN KEY (languages) REFERENCES languages(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (images) REFERENCES images(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Insertar datos de ejemplo en la tabla 'projects'
INSERT INTO projects (name, description, languages, images, imagePrimary) VALUES
('Proyecto1', 'Descripción 1', 1, 2),
('Proyecto2', 'Descripción 2', 2, 3),
('Proyecto3', 'Descripción 3', 3, 1);