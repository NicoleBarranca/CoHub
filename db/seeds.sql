USE company;

INSERT INTO department (name)
VALUES
('Sales'),
('Marketing'),
('HR'),
('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES

('Inside Account Manager', 53000.00, 1),
('Outside Account Manager', 58000.00, 1),
('Senior Agent', 70000.00, 2),
('Junior Agent', 65000.00, 2),
('Assistant', 30000.00, 3),
('HR Coordinator', 47000.00, 3),
('Recruiter', 47000.00, 3);
('CPA', 110000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES

('Lanna', 'Ruggs', 1, NULL),
('Kiannah', 'Jones', 2, NULL),
('Michelle', 'Sims', 3, NULL),
('Liz', 'Lah', 4, NULL),
('Lyn', 'Ro', 5, NULL),
('Maggie', 'Magee', 6, NULL),
('Steve', 'Barr', 7, NULL), 
('Jon', 'Barr', 7, NULL),
('Chee', 'Zits', 1, NULL),
('Martha', 'Stew', 2, NULL);