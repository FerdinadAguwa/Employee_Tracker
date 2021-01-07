var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Daddy2010",
  database: "employeeDB"
});



connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });
  
  // function which prompts the user for what action they should take
  function start() {
    inquirer
      .prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees", 
        "View All Employees by Department",
         "View All Employees by Manager",
         "View All Employees by Manager",
         "Add Eployee",
         "Remove Employee",
         "Update Employee",
        ]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.choice === "View All Employees") {
        //   postAuction();
        }
        else if(answer.choice === "View All Employees by Department") {
        //   bidAuction();
        } else{
          connection.end();
        }
      });
    }