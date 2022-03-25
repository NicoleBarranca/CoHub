const inquirer = require('inquirer');
const mysql = require('mysql2');
//database connection code module
const db = require('./db/connection');
const cTable = require('console.table');

//Middleware? express only?

// Use apiRoutes and create folders? -> also might be express thing -> router.use(require('./department'));

//need file for writing inquirer prompts

// Default response for any other request (Not Found)

//GET/s

//POST

//PUT - update 

//DELETE

const PORT = process.env.PORT || 3004;

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });