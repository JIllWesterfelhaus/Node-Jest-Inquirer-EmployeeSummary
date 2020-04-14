//set up inquirer//
const inquirer = require("inquirer")
function init () {
    inquirer.prompt ([
        //this will be yes or no, continue if yes, console.log "Thank you" if no.  Should answers be 
        //listed as y/n?  Boolean
        {
            type: "input",
            message: "Would you like to add a new employee to the roster?",
            name:  "newEmployee"
        },
        //fix syntax
        if (response = "yes") {
            console.log ("Please answer the following questions.")
        }
            else {
                console.log ("Thank you.")
            }
            //end program
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email"
        },

        //if statement? ask if employee is manager, engineer or intern
        
        {
            type: "input",
            message:  "Is this employee a manager, engineer or intern?",
            name: "role"
        }
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
