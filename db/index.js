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
}
