const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const salt = parseInt(process.env.salt) || 3
const secretKey = process.env.secretKey || '1111'
const generateAccesToken = (id,email) =>{
    return jwt.sign({id,email},secretKey,{expiresIn:'3d'})
}
class userController{
    async signUp(req,res){
        try {
            const {firstName,lastName,email,password} = req.body
            const candidate = await userModel.findOne({email})
            const file = req.file.filename
            if(candidate){
                return res.status(400).json({message:'Пользователь с такой почты уже существует'})
            }
            const hashPassword = bcrypt.hashSync(password,salt)
            const user = await userModel.create({firstName,lastName,email,password:hashPassword,avatar:`images/${file.filename}`})
            const token = generateAccesToken(user._id,user.email)
            return res.status(200).json(token)
        } catch (error) {
            console.log(error)
            return res.status(200).json(error)
        }
    }

    async login(req,res){
        try {
            const {email,password} = req.body
            const candidate = await userModel.findOne({email})
            if(!candidate){
                return res.status(400).json({error:'Invalid email or password'})
            }
            const user = await userModel.findOne({email})
            const passwordValidate = bcrypt.compareSync(password,user.password)
            if(!passwordValidate){
                return res.status(400).json({error:'Invalid email or password'})
            }
            const token = generateAccesToken(user._id,user.email)
            return res.status(200).json(token)
        } catch (error) {
            console.log(error)
            return res.status(200).json(error)
        }
    }

    async getAll(req,res){
        try {
            const users = await userModel.find()
            return res.status(200).json(users)
        } catch (error) {
            console.log(error)
            return res.status(200).json(error)
        }
    }

    async getOne(req,res){
        try {
            const {id} = req.params
            const user = await userModel.findById(id)
            return res.status(200).json(user)
        } catch (error) {
            console.log(error)
            return res.status(200).json(error)
        }
    }
    
    async addDocument(req,res){
        try {
            const {id} = req.params
            const {name} = req.body
            const file = req.file.filename
            const user = await userModel.findByIdAndUpdate(id,{$addToSet:{documents:{name,path:`documents/${file}`}}})
            return res.status(200).json(user)
        } catch (error) {
            console.log(error)
            return res.status(200).json(error)
        }
    }

    async getOneByToken(req,res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const userToken = jwt.verify(token,secretKey)
            const user = await userModel.findById(userToken.id)
            return res.status(200).json(user)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}

module.exports = new userController