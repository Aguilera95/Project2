### Schema

CREATE DATABASE photogie_db;
USE photogie_db;

CREATE TABLE photos
(
	id int NOT NULL AUTO_INCREMENT,
	photographer_name varchar(255) NOT NULL,
	photo_name varchar(255) NOT NULL,
    photo_description TEXT,
    photo_path varchar(65535) NOT NULL,
	upload_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	PRIMARY KEY (id)
);