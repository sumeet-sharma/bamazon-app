--  check if database already exists
DROP DATABASE IF EXISTS bamazon;

--  create database
CREATE DATABASE bamazon;

-- use bamazon as your database
USE bamazon;

--  creating the products table inside bamazon database
CREATE TABLE products(
    -- creating coloumns inside the products table
    items_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10) NOT NULL,
    stock_quantity INTEGER(10),
    PRIMARY KEY(items_id)
);

-- populating the products table with different items
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Sony OLED TV", "Electronics", 4798, 39),
    ("Sennheiser Bluetooth Wireless Headphones", "Electronics", 99.50, 18),
    ("The Fountainhead", "Books", 22, 27),
    ("Deadpool", "Movies", 100, 89),
    ("Tommy Hilfiger watch", "Clothing and accessories", 150, 45),
    ("Interstellar", "Movies", 100, 46),
    ("Atlas Shrugged", "Books", 45, 67),
    ("The Hitchhiker's guide to galaxy", "Books", 34, 100),
    ("ASUS Chromebook", "Electronics", 600, 62),
    ("Samsung Galaxy s9+", "Electronics", 900, 18);


