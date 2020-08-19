USE employee_db;

INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("HR");

INSERT INTO role (title, salary, department_id) VALUES ("SalesDirector", 120, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Outside Sales", 90, 1);
INSERT INTO role (title, salary, department_id) VALUES ("CIO", 150, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Business Analyst", 65, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Director of Human Resources", 120, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Recruiter", 65, 3);
