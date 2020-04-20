const path = require("path")
const fs = require("fs")
const templates = path.resolve(__dirname,"../HTML templates")

const render = employees => {
    const HTML = []
    HTML.push(employees.filter
        (employee => employee.getRole()=== "Manager")
        .map(manager => renderManager(manager)).join("")
        )
        return renderMain(HTML.join(""))
}
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templates,"manager.html"),"utf8")
    template = replacePlaceholders(template,"id",manager.getId())
    template = replacePlaceholders(template,"email",manager.getEmail())
    template = replacePlaceholders(template,"officeNum",manager.getOfficeNum())
    return template;
}

const render = employees => {
    const HTML = []
    HTML.push(employees.filter
        (employee => employee.getRole()=== "Intern")
        .map(manager => renderIntern(intern)).join("")
        )
        return renderMain(HTML.join(""))
}
const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templates,"intern.html"),"utf8")
    template = replacePlaceholders(template,"name",intern.getName())
    template = replacePlaceholders(template,"id",intern.getId())
    template = replacePlaceholders(template,"email",intern.getEmail())
    template = replacePlaceholders(template,"school",intern.getSchool())
    return template;
}

const render = employees => {
    const HTML = []
    HTML.push(employees.filter
        (employee => employee.getRole()=== "Engineer")
        .map(manager => renderEngineer(engineer)).join("")
        )
        return renderMain(HTML.join(""))
}
const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templates,"engineer.html"),"utf8")
    template = replacePlaceholders(template,"name",engineer.getName())
    template = replacePlaceholders(template,"id",engineer.getId())
    template = replacePlaceholders(template,"email",engineer.getEmail())
    template = replacePlaceholders(template,"userName",engineer.getUserName())
    return template;
}