const inquirer = require('inquirer');
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employeeTracker_db",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");;
    initialize();
});

function initialize() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "Please select an option",
            choices: [
                "View all Departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
            ]
        })
        .then((answer) => {
            switch (answer.action) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    connection.end();
                    break;
            }
        });
};

function viewAllDepartments() {
    const query = "Select * from Departments";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        initialize();
    })
};

function viewAllRoles() {
    const query = "Select roles.title, role.id, departments.department_name, roles.salary from roles join departments on roles.department_id = departments.id";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        initialize();
    })
}