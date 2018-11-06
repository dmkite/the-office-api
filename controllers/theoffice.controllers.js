const model = require('../models/theoffice.models')

function getAll(req,res){
    let chars = model.getAll()
    res.status(200).json(chars)
}

function getOne(req, res, next){
    let id = req.params.id
    let char = model.getOne(id)
    if(!char) return next({status:404, message: `No entry for id '${id}'`})
    res.status(200).json(char)
}

function createOne(req, res, next){
    let {name, department} = req.body
    if(!name || !department) return next({status:400, message: 'Must include name and department'})
    let newChar = model.createOne(name, department)
    res.status(201).json(newChar)
}

function editOne(req, res, next){
    let id = req.params.id
    let {name, department} = req.body
    if (!name || !department) return next( { status: 400, message: 'Must include name and department' })
    let editedChar = model.editOne(id, name, department)
    if (!editedChar) return next({ status: 404, message: `No entry for id '${id}` })
    res.status(201).json(editedChar)
}

function deleteOne(req, res, next){
    let id = req.params.id
    let deletedChar = model.deleteOne(id)
    if (!deletedChar) return next({ status: 404, message: `No entry for id '${id}` })
    res.status(200).json(deletedChar)
}

module.exports = {getAll, getOne, createOne, editOne, deleteOne}