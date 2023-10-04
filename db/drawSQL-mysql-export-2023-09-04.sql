CREATE TABLE `Pantalla`(
    `id_pantalla` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Size` INT NOT NULL,
    `Resolution` VARCHAR(255) NOT NULL
);
CREATE TABLE `Activos`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `NSerie` INT NOT NULL,
    `sistema` VARCHAR(255) NOT NULL,
    `Modelo` VARCHAR(255) NOT NULL,
    `ram` VARCHAR(255) NOT NULL,
    `disk` VARCHAR(255) NOT NULL,
    `usd` VARCHAR(255) NOT NULL,
    `Estado` VARCHAR(255) NOT NULL,
    `area` VARCHAR(255) NOT NULL,
    `factura` TEXT NOT NULL,
    `email`  VARCHAR(255) NOT NULL,
    `fecha` DATE NOT NULL;
    
);
CREATE TABLE `Frecuencia`(
    `id_Frecuencia` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Frecuencia` VARCHAR(255) NOT NULL
);
CREATE TABLE `Marca`(
    `id_marca` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Marca` VARCHAR(255) NOT NULL
);
CREATE TABLE `Modelo`(
    `id_modelo` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `modelo` VARCHAR(255) NOT NULL
);
CREATE TABLE `Specs`(
    `id_Specs` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `RAM` VARCHAR(255) NOT NULL,
    `CPU` VARCHAR(255) NOT NULL,
    `Os` VARCHAR(255) NOT NULL,
    `Disco` VARCHAR(255) NOT NULL,
    `Pantalla` VARCHAR(255) NOT NULL
);
CREATE TABLE `RAM`(
    `id_Ram` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Marca` TEXT NOT NULL,
    `Modelo` VARCHAR(255) NOT NULL,
    `Frecuencia` INT NOT NULL
);
CREATE TABLE `DatosCompra`(
    `id_compra` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Fecha` DATETIME NOT NULL,
    `Garantia` VARCHAR(255) NOT NULL,
    `FacturaID` INT NOT NULL,
    `Adjunto` BLOB NOT NULL,
    `ValorEstimado` INT NOT NULL
);
CREATE TABLE `CPU`(
    `id_cpu` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Marca` TEXT NOT NULL,
    `Modelo` VARCHAR(255) NOT NULL,
    `Frecuencia` VARCHAR(255) NOT NULL,
    `Nucleos` INT NOT NULL
);
CREATE TABLE `Estado`(
    `id_estado` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `estado` VARCHAR(255) NOT NULL
);
CREATE TABLE `TipoDisco`(
    `id_tipo` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Tipo` VARCHAR(255) NOT NULL
);
CREATE TABLE `Disco`(
    `id_Disco` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Marca` VARCHAR(255) NOT NULL,
    `Modelo` VARCHAR(255) NOT NULL,
    `Size` INT NOT NULL,
    `Tipo` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Marca` ADD CONSTRAINT `marca_marca_foreign` FOREIGN KEY(`Marca`) REFERENCES `CPU`(`Marca`);
ALTER TABLE
    `TipoDisco` ADD CONSTRAINT `tipodisco_tipo_foreign` FOREIGN KEY(`Tipo`) REFERENCES `Disco`(`Tipo`);
ALTER TABLE
    `Pantalla` ADD CONSTRAINT `pantalla_size_foreign` FOREIGN KEY(`Size`) REFERENCES `Specs`(`Pantalla`);
ALTER TABLE
    `Activos` ADD CONSTRAINT `activos_estado_foreign` FOREIGN KEY(`Estado`) REFERENCES `Estado`(`id_estado`);
ALTER TABLE
    `Activos` ADD CONSTRAINT `activos_modelo_foreign` FOREIGN KEY(`Modelo`) REFERENCES `Modelo`(`id_modelo`);
ALTER TABLE
    `Marca` ADD CONSTRAINT `marca_marca_foreign` FOREIGN KEY(`Marca`) REFERENCES `RAM`(`Marca`);
ALTER TABLE
    `Activos` ADD CONSTRAINT `activos_specs_foreign` FOREIGN KEY(`Specs`) REFERENCES `Specs`(`id_Specs`);
ALTER TABLE
    `Frecuencia` ADD CONSTRAINT `frecuencia_frecuencia_foreign` FOREIGN KEY(`Frecuencia`) REFERENCES `CPU`(`Frecuencia`);
ALTER TABLE
    `Marca` ADD CONSTRAINT `marca_marca_foreign` FOREIGN KEY(`Marca`) REFERENCES `Disco`(`Marca`);
ALTER TABLE
    `Activos` ADD CONSTRAINT `activos_compra_foreign` FOREIGN KEY(`Compra`) REFERENCES `DatosCompra`(`id_compra`);
ALTER TABLE
    `Modelo` ADD CONSTRAINT `modelo_modelo_foreign` FOREIGN KEY(`modelo`) REFERENCES `RAM`(`Modelo`);
ALTER TABLE
    `Marca` ADD CONSTRAINT `marca_id_marca_foreign` FOREIGN KEY(`id_marca`) REFERENCES `Activos`(`id`);
ALTER TABLE
    `Modelo` ADD CONSTRAINT `modelo_modelo_foreign` FOREIGN KEY(`modelo`) REFERENCES `Disco`(`Modelo`);
ALTER TABLE
    `Modelo` ADD CONSTRAINT `modelo_modelo_foreign` FOREIGN KEY(`modelo`) REFERENCES `CPU`(`Modelo`);
ALTER TABLE
    `Frecuencia` ADD CONSTRAINT `frecuencia_frecuencia_foreign` FOREIGN KEY(`Frecuencia`) REFERENCES `RAM`(`Frecuencia`);