const Employee = require("./class.js")

class Manager extends Employee {
    constructor (name, id, officeNum) {
        super (name, id)
        this.officeNum = officeNum;
        this.role = "Manager";
    }

    getRole() {
        return "Manager"
    }
}
    module.exports = Manager