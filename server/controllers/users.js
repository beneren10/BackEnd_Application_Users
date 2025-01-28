const Users = require('../models/Users')

async function index(req,res) {
    try {
        const response = await Users.showAll()
        res.status(200).json(response);
        } catch(err) {
        res.status(500).json({error: err.message})
    }
}

async function show(req,res){
    try { 
        const params = req.params.user;
        const check = await Users.getOneByUserName(params)
        res.status(201).json(check)        
    } catch(err) {
        res.status(500).json({error: err.message})
    } 
}

async function create(req,res) {
    try {
        const body = req.body
        const newUser = await Users.create(body)
        console.log(newUser)
        res.status(200).json(newUser)
    } catch(err) {
        console.log(Error, "error")
    }
}

async function update(req,res){
    // takes params and body
    try {
        const name = req.params.name
        const data = req.body
        const user = await Users.getOneByUserName(name)
        const updates = await user.update(data)
        res.status(209).json(updates)
    } catch(err){
        console.log(Error)
    }
}

async function destroy(req,res){
    // takes params
    try {
        const name = req.params.name
        const user = await Users.getOneByUserName(name)
        const deleteUser = await user.delete(name)
        res.status(204).json({
            success: 'success'
        })
    } catch(err){
        console.log(Error)
    }
}

module.exports = { index, show, create, update, destroy}