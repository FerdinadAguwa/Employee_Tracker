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
  
  // start function which prompts the user which actio to take 
  function start() {
    inquirer
      .prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees", "View All Employee by Roles","View All Employees by Department","Add Employee","Remove Employee", "Update Employee"]
      })
      .then(function(answer) {
        // the user will get a response based on the answer that they select.
        if (answer.choice === "View All Employees") {
        showEmployee();
        // start()
        
        }
        else if(answer.choice === "View All Employee by Roles") {
           showRole()
        //   bidAuction();
        } else if(answer.choice ==="View All Employees by Department"){
            showDepartment()
            console.log("wassup")
        }
        else if(answer.choice ==="Add Employee"){
        ferd()


        }
        else if(answer.choice ==="Remove Employee"){

        }
        else if(answer.choice === "Update Employee"){

        }
        else{
          connection.end();
        }
      });
    }
// Showcases all of the employees that are listed for the user 
    function showEmployee() {
        console.log("Employee DATABASE...\n");
        connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee INNER JOIN role ON role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id", function(err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.table(res);
         connection.end();
        });
      }
      function showRole() {
        console.log("Employee DATABASE...\n");
        connection.query("SELECT employee.first_name, employee.last_name, role.title FROM employee INNER JOIN role ON role.id = employee.role_id", function(err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.log(res);
          connection.end();
        });
      }

      function showDepartment() {
        console.log("Employee DATABASE...\n");
        connection.query("SELECT employee.first_name, employee.last_name, department.name FROM employee INNER JOIN role ON role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id", function(err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.log(res);
          connection.end();
        });
      }





      function createEmployee(answer) {
        console.log("Inserting a new product...\n");
        var query = connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id
          },
          function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " product inserted!\n");
            // Call updateProduct AFTER the INSERT completes
           
          }
        );
      
        // logs the actual query being run
        console.log(query.sql);
    }

function ferd(){
    inquirer.prompt(response).then(function (answers) {
        createEmployee(answers);
        // console.log(answers)
            
        
        });
}


    let response = [
        {
            type: 'input',
            message: 'What is the First Name ?',
            name: 'first_name',
        },
        {
            type: 'input',
            message: 'What is the Last Name ?',
            name: 'last_name',
        },
    
        {
            type: 'input',
            message: 'What is the Role Id ?',
            name: 'role_id',
        },
       
    ]