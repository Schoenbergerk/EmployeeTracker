const inquirer = require('inquirer');
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: "localhost",
    PORT: 3001,
    user: "root",
    password: "rootroot",
    database: "employeeTrackerdb",
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
}