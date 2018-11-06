const uuid = require('uuid')

let chars = [
    {
        id: uuid(),
        name: "Michael Scott",
        department: "Managerial"
    }
]

function getAll(){
    return chars
}

function getOne(id){
    let char = chars.find(char => char.id === id)
    return char
}

function createOne(name, department){
    newChar = {id: uuid(), name, department}
    chars.push(newChar)
    return newChar
}

function editOne(id, name, department){
    let char = chars.find(char => char.id === id)
    if(!char) return char
    
    let index = chars.indexOf(char)
    chars[index].name = name
    chars[index].department = department
    return chars[index]
}

function deleteOne(id){
    let char = chars.find(char => char.id === id)
    if(!char) return char
    
    let index = chars.indexOf(char)
    let deletedChar = chars.splice(index, 1)
    return deletedChar
    
}

module.exports = {getAll, getOne, createOne, editOne, deleteOne}