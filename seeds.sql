INSERT INTO department (name) VALUES
('Finance'),
('Human Resources'),
('Sales'),
('Management'),
('Marketing')

INSERT INTO role (title, salary, department_id) VALUES
('Accountant Lead', 100000.00, 1),
('Accountant Intermediate', 50000, 1),
('Human Resources Lead', 25000, 2),
('Assistant to Regional Manager', 100000, 3),
('Assistant Regional Manager', 80000, 3),
('Regional Manager', 150000, 4),
('Marketer', 55000, 5)

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Michael', 'Scott', 6, null),
('Angela', 'Martin', 1, 1),
('Kevin', 'Malone', 2, 2),
('Toby', 'Flenderson', 3, 1),
('Dwight', 'Schrute', 4, 1),
('Jim', 'Halpert', 5, 1),
('Phyllis', 'Vance', 7, 6),
('Stanley', 'Hudson', 7, 6);
