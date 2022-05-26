const db = require("./connection");

class CO {
  constructor(db) {
    this.db = db;
  }
  findDepartments() {
    return this.db.promise().query("SELECT * FROM department");
  }
  findEmployees() {
    return this.db
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id"
      );
  }
  findRoles() {
    // do a left join
    return this.db
      .promise()
      .query(
        "SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department on role.department_id = department.id"
      );
  }
  addDepartment(answers) {
    return this.db.promise().query("INSERT INTO department SET ?", {
      name: answers.departmentName,
    });
  }

  addNewEmployee(answers) {
    return this.db.promise().query("INSERT INTO employee SET ?", answers);
  }
  addNewRole(answers) {
    return this.db.promise().query("INSERT INTO role SET ?", answers);
  }
  updateEmployeeRole(employeeId, roleId) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        roleId,
        employeeId,
      ]);
  }
}

module.exports = new CO(db);
