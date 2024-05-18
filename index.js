const inquirer = require('inquirer');
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: "localhost",
    PORT: 3001,
    user: "root",
    password: "rootroot",
    database: "employeeTrackerdb",
});

