DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
id INTEGER NOT NULL auto_increment,
name VARCHAR(30),
PRIMARY KEY(id)
);

CREATE TABLE roles(
id INTEGER NOT NULL auto_increment,
title VARCHAR(30),
salary DECIMAL,
department_id INTEGER
);

CREATE TABLE employee(
id INTEGER NOT NULL auto_increment,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER,
manager_id INTEGER,
PRIMARY KEY(id)
)
