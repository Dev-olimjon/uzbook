CREATE TABLE users(
                      id               SERIAL PRIMARY KEY ,
                      name                   VARCHAR(1000),
                      surname                VARCHAR(1000),
                      number                 VARCHAR(300),
                      email                  VARCHAR(2000),
                      password               VARCHAR(1000)
);


INSERT INTO users(name, surname, number, email, password)
VALUES ('Olimjon','Makhmudov','+998885177266','olimjonmakhmudov26156@gmail.com','max26156');

DELETE FROM users WHERE id = 13;


CREATE TABLE books(
                      id               SERIAL PRIMARY KEY ,
                      img                    VARCHAR(10000),
                      name                   VARCHAR(1000),
                      price                  VARCHAR(1000)
);