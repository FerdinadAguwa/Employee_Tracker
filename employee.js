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



connection.connect(function (err) {
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
            choices: ["View All Employees", "View All Roles", "View All Departments", "Add Employee", "Add Role", "Add Department", "Remove Employee", "Update Employee Role"]
        })
        .then(function (answer) {
            // the user will get a response based on the answer that they select.
            if (answer.choice === "View All Employees") {
                showEmployee();
                // start()

            }
            else if (answer.choice === "View All Roles") {
                showRole()

            } else if (answer.choice === "View All Departments") {
                showDepartment()

            }
            else if (answer.choice === "Add Employee") {
                addEmployee()


            }
            else if (answer.choice === "Add Role") {
                addedRole()


            }
            else if (answer.choice === "Add Department") {
                addedDepartment()


            }
            else if (answer.choice === "Remove Employee") {
                lookUpManager()
            }
            else if (answer.choice === "Update Employee Role") {
                updatedRole()
            }
            else {
                connection.end();
            }
        });
}

// Showcases all of the employees that are listed for the user 
function showEmployee() {
    console.log("Employee DATABASE...\n");
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee INNER JOIN role ON role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        start();
    });
}
// showcases all the roles that exist
function showRole() {
    console.log("Employee DATABASE...\n");
    connection.query("SELECT id, title FROM role", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        start();
    });
}
// shows all the department thats exist
function showDepartment() {
    console.log("Employee DATABASE...\n");
    connection.query("SELECT name FROM department ", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        start();
    });
}



// ===================================================================

// (ADD EMPLOYEE SECTION)


function addEmployee() {
    // add employee questions
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
    inquirer.prompt(response).then(function (answers) {
        createEmployee(answers);
        // console.log(answers)


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
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " product inserted!\n");
            // Call updateProduct AFTER the INSERT completes
            start()
        }

    );
    // logs the actual query being run
    console.log(query.sql);
}
// function to get the questons to run 


// ======================================================================

// (ADD ROLE SECTION)
function addedRole() {
    let response =
        [
            {
                type: 'input',
                message: 'What Role would you like to add?',
                name: 'role',
            },
            {
                type: 'input',
                message: 'What is the salary?',
                name: 'salary',
            },
            {
                type: 'input',
                message: 'What is the department ID?',
                name: 'departmentID',
            }
        ]
    inquirer.prompt(response).then(function (answers) {
        createRole(answers);
        // console.log(answers)


    });

}

function createRole(answer) {
    console.log("Inserting a new role...\n");
    var query = connection.query(
        "INSERT INTO role SET ?",
        {
            title: answer.role,
            salary: answer.salary,
            department_id: answer.departmentID

        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " role inserted!\n");
            // Call updateProduct AFTER the INSERT completes
            start()
        }

    );
    // logs the actual query being run
    console.log(query.sql);
}


// ==========================================================================
// (ADD DEPARTMENT SECTION)
function addedDepartment() {
    let response =
        [
            {
                type: 'input',
                message: 'What Department would you like to add?',
                name: 'title',
            },

        ]
    inquirer.prompt(response).then(function (answers) {
        createDepartment(answers);
        // console.log(answers)


    });

}

function createDepartment(answer) {
    console.log("Inserting a new role...\n");
    var query = connection.query(
        "INSERT INTO department SET ?",
        {
            name: answer.title,


        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " department inserted!\n");
            // Call updateProduct AFTER the INSERT completes
            start()
        }

    );
    // logs the actual query being run
    console.log(query.sql);
}



// ============================================================================

function updateEmployeeRole(update) {
    console.log("Role has been Updated...\n");
    var query = connection.query(
        "UPDATE employee SET ? WHERE ?",
        [
            {
                role_id: update.role_id
            },
            {
                id: update.employee_id
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes

        })
        console.log(query.sql);
}
let roleResponse = [
    {
        type: 'input',
        message: 'What is the role id?',
        name: 'role_id',
    },
    {
        type: 'input',
        message: 'What is the employees id ?',
        name: 'employee_id',
    },

]
function updatedRole() {
    inquirer.prompt(roleResponse).then(function (answers) {
        updateEmployeeRole(answers);
         console.log(answers)


    });
}




// function lookUpManager(){
//     let dptOptions = connection.query("SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;", 1)
// console.log(dptOptions)
// dptOptions.map(({id,name}) =>({
//     name: name, 
//     value: id
// })
// )
//     let list = [{ 
//         name: "dpt_id",
//         type: "list",
//         message: "What department would you like to choose?",
//         choices: dptOptions
//     },
//         {
//             type: 'input',
//             message: 'What is the employees id ?',
//             name: 'employee_id',
//         },
    
//     ]

// }

