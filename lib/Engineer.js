
const Employee = require("./class.js")
class Engineer extends Employee {
    constructor (name, id, userName) {
        super (name, id)
        this.userName=userName;
        this.role = "Engineer";

    }
    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer