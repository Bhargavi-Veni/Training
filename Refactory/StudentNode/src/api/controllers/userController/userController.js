const express = require('express');
const router = express.Router();
const usersDAO = require('../../models/user/usersDao');

class userController {
    constructor(){
    }
    async get(req,res){
        try {
            const users = await usersDAO.getAll();
            res.status(200).json(users);
        } catch (e) {
            console.log(e);
        }
    }

    async post(req,res){
        try {
            await usersDAO.add(req.body);
            res.status(200).json({ message: 'Hello new User' });
        } catch (e) {
            console.log(e);
        }
    }

    async delete(req,res){
        try {
            const idT = req.params.id;
            await usersDAO.delete(idT);
            res.status(200).json({ message: 'User deleted' });
        } catch (e) {
            console.log(e);
        }
    }

    async getById(req,res){
        try {
            const idT = req.params.id;
            const users = await usersDAO.getById(idT);
            res.status(200).json(users);
        } catch (e) {
            console.log(e);
        }
    }

    async put(req,res){
        try{
            const idT = req.params.id;
            await usersDAO.put(idT,req.body);
            res.status(200).json({ message: 'updated' });
        }catch(e){
            console.log(e);
        } 
    }
}

// const _this = new userController();

// module.exports = {
//     get : _this.get,
//     post :_this.post,
//     delete : _this.delete,
//     getByid : _this.getById,
//     put : _this.put
// }

module.exports = new userController();
