const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");
// const promisemysql = require("promise-mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Gilmore24!",
    database: "employee_db"
});

// connection.connect(function(err){
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
//     // start();
// });

const start = () => {
    return inquirer.prompt({
        name:"menu",
        type: "list",
        message: "Please select an option below.",
        choices: [
            "View all departments",
            "View all roles?",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee role",
            "Exit"
        ]
    })
    .then( response => {
        console.log("response")
        console.log(response)
        switch (response.menu){
            case "View all departments":
               return viewDepartments();
                // start()
            case  "View all roles?":
                return viewRoles();
            case  "View all employees":
                return viewEmployees();
            case "Add a department":
                return addDepartment();
            case "Add a Role":
                return addRole();
            case "Add an employee":
                return addEmployee();
            case "Update employee role":
                return updateEmployee();
            case "Exit":
               return connection.end();                        
        }
       
    })
}
const viewDepartments = () => {
    
    connection.query("SELECT * FROM department", (err, res) => {
        if(err) throw err;
        // console.log(res)
        res.forEach(department => {
            console.log(`ID: ${department.id} | Name: ${department.name}`)
        })  
    });
}

const viewRoles = () => {
    var query = `SELECT roles.id, roles.title, roles.salary, department.name 
    AS department
    FROM roles
    INNER JOIN department
    ON roles.department_id = department.id`;

    connection.query(query, (err, res) => {
        if(err) throw err;
        console.table(res)
        // res.forEach( roles => {
        //     console.log(`ID: ${roles.id} | Title: ${roles.title} | Salary: ${roles.salary}`)
        // })  
    });
}

const viewEmployees = () => {
    var query = `SELECT employee.id, employee.first_name, employee.last_name`
    // join with role table , join employee with employee
    connection.query(query, (err, res) => {
        if(err) throw err;
        // console.log(res);
        console.table(res)
        // res.forEach( roles => {
        //     console.log(`ID: ${roles.id} | Title: ${roles.title} | Salary: ${roles.salary}`)
        // })  
    });
}
const addDepartment = () => {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "What is the name of the new department?",
          })
        .then(function(answer) {
        var query = "INSERT INTO department (name) VALUES ( ? )";
        connection.query(query, answer.department, (err, res) => {
            console.log(`Successfully added the: ${(answer.department)} department.`)
        })
        viewDepartments();
        })
}



   connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
   
});

start()
