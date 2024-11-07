CREATE TABLE users(
   id int auto_increment,
   name VARCHAR(40) NOT NULL,
   email VARCHAR(60) NOT NULL UNIQUE,
   primary key(id)
);

/* Seed initial data */
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')