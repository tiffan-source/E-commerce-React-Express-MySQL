CREATE DATABASE IF NOT EXISTS `PRJCT`;
USE `PRJCT`;

CREATE TABLE IF NOT EXISTS `User`
(
    `U_id` SMALLINT NOT NULL AUTO_INCREMENT,
    `U_username` VARCHAR(30) NOT NULL,
    `U_date_birthday` DATETIME NOT NULL,
    `U_mail` VARCHAR(100) NOT NULL ,
    `U_password` VARCHAR(255) NOT NULL,
    `U_number` INT(8) NOT NULL CHECK(`U_number` >= 0),
    `U_active` BOOLEAN DEFAULT 0,
    `U_date_create` DATETIME NOT NULL,

    UNIQUE(`U_id`, `U_username`, `U_mail`, `U_password`, `U_number`),
    PRIMARY KEY(`U_id`)
);