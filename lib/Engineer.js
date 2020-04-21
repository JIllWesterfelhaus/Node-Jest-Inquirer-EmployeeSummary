
const Employee = require("./class.js")
class Engineer extends Employee {
    constructor (name, id, email, userName) {
        super (name, id, email)
        this.userName=userName;
        this.role = "Engineer";

    }
    getRole() {
        return this.role
    }
    getUserName() {
        return this.userName
    }

}

module.exports = Engineer