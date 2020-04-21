const Employee = require("./class.js")

class Manager extends Employee {
    constructor (name, id, officeNum, email) {
        super (name, id, email)
        this.officeNum = officeNum;
        this.role = "Manager";
    }

    getRole() {
        return this.role
    }
    getofficeNum() {
        return this.officeNum
    }

}
    module.exports = Manager