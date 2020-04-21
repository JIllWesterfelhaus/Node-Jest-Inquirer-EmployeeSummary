//set up inquirer//
const render = require("./lib/htmlrenderer")
const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const path = require("path")
const fs = require("fs")
const output_dir = path.resolve(__dirname,"output")
const output_path = path.join(output_dir,"team.html")
let team = []
function init() {
    inquirer.prompt([

        {
            type: "input",
            message: "Please begin here to register your new employee.  What is the new employee's name?",
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
        {
            type: "list",
            message: "Is this employee a manager, engineer or intern?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "role"
        }
    ])
        .then(function (response) {
            console.log(response)
            if (response.role === "Manager") {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is the manager's office number?",
                        name: "officeNum"
                    }
                ])
                    .then(function (managerRes) {
                        let newManager = new Manager(response.name, response.id, managerRes.officeNum)
                        team.push(newManager)
                        console.log(team)

                    })
            }

            if (response.role === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is the engineer's GitHub username?",
                        name: "userName"
                    }
                ])
                .then(function (engineerRes) {
                    let newEngineer = new Engineer(response.name, response.id, engineerRes.userName)
                    team.push(newEngineer)
                    console.log(team)

                })

            }

            if (response.role === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What school does the intern attend?",
                        name: "school"
                    }
                ])
                .then(function (internRes) {
                    let newIntern = new Intern(response.name, response.id, internRes.school)
                    team.push(newIntern)
                    console.log(team)

                })  

            }

        })
}
const writeHTML = HTML => {
    fs.writeFileSync (output_path, HTML, err => {
        if (err) {
            return console.log(err)
        }
    })

}
writeHTML(render(team))

init();
