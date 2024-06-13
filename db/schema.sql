DROP DATABASE IF EXISTS tamegame_db;
CREATE DATABASE tamegame_db;
USE tamegame_db;

CREATE TABLE developer(
    developer_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    lName VARCHAR(50),
    fName VARCHAR(50),
    alias VARCHAR(50),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_developer PRIMARY KEY (developer_id)
);

CREATE TABLE company(
    company_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    company_title VARCHAR(50),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_company PRIMARY KEY (company_id)
);

CREATE TABLE games(
    game_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    game_title VARCHAR(150) NOT NULL,
    yr_released YEAR NOT NULL,
    cover TINYTEXT,
    price FLOAT(4, 2),
    company_id SMALLINT UNSIGNED,
    developer_id SMALLINT UNSIGNED,
    CONSTRAINT pk_games PRIMARY KEY (game_id),
    CONSTRAINT fk_company FOREIGN KEY (company_id) REFERENCES company (company_id),
    CONSTRAINT fk_developer FOREIGN KEY (developer_id) REFERENCES developer (developer_id),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE genre(
    genre_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    genre VARCHAR(50),
    CONSTRAINT pk_genre PRIMARY KEY (genre_id)
);

CREATE TABLE game_to_genre(
    game_id SMALLINT UNSIGNED,
    genre_id SMALLINT UNSIGNED,
    CONSTRAINT fk_games FOREIGN KEY (game_id) REFERENCES games (game_id),
    CONSTRAINT fk_genre FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
);

CREATE TABLE game_to_dev(
    game_id SMALLINT UNSIGNED NOT NULL,
    developer_id SMALLINT UNSIGNED NOT NULL,
    CONSTRAINT fk_games FOREIGN KEY (game_id) REFERENCES games (game_id),
    CONSTRAINT fk_developer FOREIGN KEY (developer_id) REFERENCES developer (developer_id)
);

CREATE TABLE game_do_comp(
    game_id SMALLINT UNSIGNED NOT NULL,
    company_id SMALLINT UNSIGNED NOT NULL,
    CONSTRAINT fk_gameC FOREIGN KEY (game_id) REFERENCES games (game_id),
    CONSTRAINT fk_comps FOREIGN KEY (company_id) REFERENCES company (company_id)
);

ALTER TABLE game_to_dev
    ADD CONSTRAINT fk_games FOREIGN KEY (game_id) REFERENCES games (game_id);

ALTER TABLE games ADD CONSTRAINT fk_developerS FOREIGN KEY (developer_id) REFERENCES developer (developer_id);