const mongoose = require('mongoose');

const userSechmea= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    role:{
        type:String,
        enum:['admin',"user"],
        default:"user"
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})


const userModel= mongoose.model('users',userSechmea)


module.exports = userModel