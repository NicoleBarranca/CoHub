INSERT INTO department (name, manager, manager_id)
VALUES
('Sales', 'Sonia', 67),
('Marketing', 'Elizabeth', 44),
('HR', 'Aretha', 99);

INSERT INTO roles (title, salary, department_id)
VALUES

('Inside Account Manager', 30450, 1),
('Outside Account Manager', 31600, 1),
('Senior Agent', 80900, 2),
('Junior Agent', 54840, 2),
('Assistant', 28000, 2),
('HR Coordinator', 45700, 3),
('Recruiter', 62500, 3);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES

('Mike', 'Smith', 1, 67),
('Manny', 'Sal', 2, 67),
('Kiannah', 'Jones', 3, 44),
('Lanna', 'Rugs', 4, 44),
('Alex', 'Ross', 5, 44),
('Maria', 'Via', 6, 99),
('Andrea', 'Barr', 7, 99);