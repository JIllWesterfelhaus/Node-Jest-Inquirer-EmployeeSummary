//set up inquirer//
const inquirer = require("inquirer")
function init () {
    inquirer.prompt ([
        //this will be yes or no, continue if yes, console.log "Thank you" if no.
        {
            type: "input",
            message: "Would you like to add a new employee to the roster?",
            name:  "newEmployee"
        },
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "idNum"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email"
        },

        //if statement? ask if employee is manager, engineer or intern
        //if manager
        {
            type: "input",
            message:  "What is the manager's office number?",
            name: "officeNum"
        },
        //if engineer
        {
            type: "input",
            message:  "What is the engineer's GitHub user name?",
            name: "gitHub"
        },
        //if intern
        {
            type: "input",
            message: "What school does the intern attend?",
            name: "school"
        }

        //Ask if would like to add another employee, if yes, repeat, if no, say thank you.

    ])
    .then(function(response) {
        console.log(response)

    })
       
    

    }  

    init();
