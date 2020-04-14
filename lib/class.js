class Employee
{
    constructor (name, id) {
        this.name = name;
        this.id = id;
        this.role = "Employee";
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return this.role;
    }  
}
class Manager extends Employee {
    constructor (name, id, officeNum) {
        super (name, id)
        this.officeNum = officeNum;
        this.role = "Manager";
    }}

    class Intern extends Employee {
        constructor (name, id, school) {
            super (name, id)
            this.school =school
            this.role = "Intern";
        }}
        class Engineer extends Employee {
            constructor (name, id, userName) {
                super (name, id)
                this.userName=userName;
                this.role = "Engineer";
            }}

            module.exports = Employee;
            module.exports = Manager;
            module.exports = Engineer;
            module.exports = Intern;
    


