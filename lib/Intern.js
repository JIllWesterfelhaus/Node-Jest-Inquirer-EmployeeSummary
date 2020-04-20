const Employee = require("./class.js")

class Intern extends Employee {
    constructor (name, id, school) {
        super (name, id)
        this.school = school
        this.role = "Intern";
    }
getRole() {
    return "Intern"
}

}

module.exports = Intern
    