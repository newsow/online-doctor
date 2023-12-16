const doctorModel = require('../models/doctorModel')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')
const salt = parseInt(process.env.salt) || 3
const secretKey = process.env.secretKey || '1111'
const generateAccesToken = (id,email) =>{
    return jwt.sign({id,email},secretKey,{expiresIn:'3d'})
}
class doctorController{
    async create(req,res){
        try {
            const {email,firstName,lastName,password} = req.body
            const file = req.file.filename
            const candidate = await doctorModel.findOne({email})
            if(candidate){
                return res.status(400).json({message:'Email is already taken'})
            }
            const hashPassword = bcrypt.hashSync(password,salt)
            const doctor = await doctorModel.create({email,firstName,lastName,password:hashPassword,avatar:`images/${file.filename}`})
            return res.status(200).json(doctor)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    async login(req,res){
        try {
            const {email,password} = req.body
            const doctor = await doctorModel.findOne({email})
            if(!doctor){
                return res.status(400).json({messgae:"Invalid email or password"})
            }
            const passwordValidate = bcrypt.compareSync(password,doctor.password)
            if(!passwordValidate){
                return res.status(400).json({messgae:"Invalid email or password"})
            }
            const token = generateAccesToken(doctor._id,doctor.email)
            return res.status(200).json(token)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    async getAll(req,res){
        try {
            const doctors = await doctorModel.find()
            return res.status(200).json(doctors)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    
    async getOne(req,res){
        try {
            const {id} = req.params
            const doctor = await doctorModel.findById(id)
            return res.status(200).json(doctor)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    async addPatient(req,res){
        try {
            const {userId} = req.params
            const token = req.headers.authorization.split(' ')[1]
            const doctorToken = jwt.verify(token,secretKey)
            const doctor = await doctorModel.findByIdAndUpdate(doctorToken.id,{$addToSet:{pacients:{id:userId}}})
            
            return res.status(200).json(doctor)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}

module.exports = new doctorController