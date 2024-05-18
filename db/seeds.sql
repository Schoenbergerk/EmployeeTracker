INSERT INTO departments (department_name)
VALUES
('Finance')
('Human Resources')
('Sales')
('Management')
('Marketing')

INSERT INTO roles (title, salary, department_id)
VALUES
('Accountant Lead', 100000, 1),
('Accountant Intermediate', 50000, 1),
('Human Resources Lead', 25000, 2),
('Assistant to the Regional Manager', 100000, 3),
('Assistant Regional Manager', 80000, 3),
('Regional Manager', 150000, 4),
('Marketer', 55000, 5)


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Angela' 'Martin' 1, 4),
('Kevin', 'Malone', 1, 1 ),
('Toby', 'Flenderson', 2, 4 ),
('Michael', 'Scott', 4, NULL ),
('Dwight', 'Schrute', 3, 4 ),
('Jim', 'Halpert', 3, 4 ),
('Phyllis', 'Vance', 5, 4 ),
('Stanley', 'Hudson', 5, 4 ),
