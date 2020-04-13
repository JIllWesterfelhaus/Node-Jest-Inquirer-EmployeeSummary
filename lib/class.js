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
    }}

    class Intern extends Employee {
        constructor (name, id, school) {
            super (name, id)
            this.school =school
            this.role = "Intern";
        }}
        class Engineer extends Employee {
            constructor (name, id, githubId) {
                super (name, id)
                this.githubId=githubId;
                this.role = "Intern";
            }}
    


