const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("./db");
const consoleTable = require("console.table");

console.table("\n------------- CoHub -------------\n");

//Inquirer prompts.
const init = function () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "directory",
        message: "What action would you like to take?",
        choices: [
          "View Departments",
          "View Employees",
          "View Roles",
          "Add Department",
          "Add Employee",
          "Add Role",
          "Update Employee Role",
          "Exit",
        ],
      },
    ])
    .then((data) => {
      switch (data.directory) {
        case "View Departments":
          viewAllDepartments();
          break;

        case "View Employees":
          viewAllEmployees();
          break;

        case "View Roles":
          viewAllRoles();
          break;

        case "Add Department":
          addNewDepartment();
          break;

        case "Add Employee":
          addNewEmployee();
          break;

        case "Add Role":
          addNewRole();
          break;

        case "Update Employee Role":
          updateEmployee();
          break;

        case "Exit":
          process.exit();

        default:
          process.exit();
      }
    });
};
