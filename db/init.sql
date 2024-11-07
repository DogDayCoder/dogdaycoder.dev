CREATE TABLE blogs(
    id int auto_increment,
    name VARCHAR(40) NOT NULL,
    display_name VARCHAR(40) NOT NULL,
    date DATE NOT NULL,
    primary key(id)
);

/* Seed initial data */
INSERT INTO blogs (name, display_name, date)
VALUES ('how-i-built-this-blog', 'How I Built this Blog', '07-11-2024')