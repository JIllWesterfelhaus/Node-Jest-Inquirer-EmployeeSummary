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
    constructor (name, id, roomNum) {
        super (name, id)
        this.roomNum =roomNum;
        this.role = "Manager";
    }

}
//manager, intern, engineer extends employee