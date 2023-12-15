const {model,Schema} = require('mongoose')

const UserSchema = new Schema({
    email:{type:String,required:true,unique:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    documents:[
        {
            path:String,
            name:String
        }
    ]
})

module.exports = model('Users',UserSchema)