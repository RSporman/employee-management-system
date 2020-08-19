const mysql = require("mysql");
const inquirer = require("inquirer");

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
        name:"menuitem",
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
        switch (response.menuitem){
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
    
    connection.query("SELECT * FROM roles", (err, res) => {
        if(err) throw err;
        // console.log(res)
        res.forEach( roles => {
            console.log(`ID: ${roles.id} | Title: ${roles.title} | Salary: ${roles.salary}`)
        })  
    });
}

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
   
});


start()
