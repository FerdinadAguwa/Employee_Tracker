DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE department  (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,

  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ferdinad","Aguwua",1,1234);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Drake","Josh",2,"4");
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Geroge","Carter",3,1234);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Billy","Fracis",4,7890);




INSERT INTO role (title, salary, department_id)
VALUES ("Operations Manager",25000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Quality Control",35000,2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant",25000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Receptionist",35000,2);



INSERT INTO department (name)
VALUES ("Production");
INSERT INTO department (name)
VALUES ("Research");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Accounting");

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;




SELECT title, first_name, last_name
FROM employee
LEFT JOIN role ON employee.role_id = role.id;

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE department  (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,

  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ferdinad","Aguwua",1,1234);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Drake","Josh",2,);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Geroge","Carter",3,1234);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Billy","Fracis",4,7890);




INSERT INTO role (title, salary, department_id)
VALUES ("Operations Manager",25000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Quality Control",35000,2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant",25000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Receptionist",35000,2);



INSERT INTO department (name)
VALUES ("Production");
INSERT INTO department (name)
VALUES ("Research");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Accounting");

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department




SELECT title, first_name, last_name
FROM employee
LEFT JOIN role ON employee.role_id = role.id;