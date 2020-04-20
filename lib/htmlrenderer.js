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
    template = replacePlaceholders(template,"name",manager.getName())


    return template;
}