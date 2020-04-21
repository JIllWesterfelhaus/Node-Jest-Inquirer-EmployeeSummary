class Employee
{
    constructor (name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
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
    getEmail() {
        return this.email;
    }  
}


    

            module.exports = Employee;
            
    
            
    


