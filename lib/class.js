class Employee
{
    constructor (name, id, role) {
        this.name = name;
        this.id = id;
        this.role = role;
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
    constructor 
}
//manager, intern, engineer extends employee