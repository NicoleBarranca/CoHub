//Database Connection Code (connect to database )
const mysql = require("mysql2");
// const Connection = require("mysql2/typings/mysql/lib/Connection");

const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "password",
    database: "company",
  },
  console.log("You are conected to the company database 😊")
);

db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
