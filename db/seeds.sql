USE employee_db;

INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("HR");

INSERT INTO roles (title, salary, department_id) VALUES ("SalesDirector", 120, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Outside Sales", 90, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("CIO", 150, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Business Analyst", 65, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Director of Human Resources", 120, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Recruiter", 65, 3);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Tom", "Hanks", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Will", "Smith", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Robert", "DeNiro", 6);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Jennifer", "Lawrence", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Scarlett", "Johansson", 5);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Emma", "Stone", 3);