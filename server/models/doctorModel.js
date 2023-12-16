const {model,Schema, Types} = require('mongoose')

const DoctorSchema = new Schema({
    email:{type:String,required:true,unique:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    avatar:{type:String,default:'images/default-avatar.jpg'},
    pacients:[{
        id:{type:Schema.Types.ObjectId,ref:'User'}
    }]
})

module.exports = model('Doctor',DoctorSchema)