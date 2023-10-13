/*const mongoose=require('mongoose');

const schema=mongoose.Schema;
const userSchema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model('Registeruser',userSchema)*/


//login2001: username
//ynPL2u932GdVjWDY: pass word



const mongoose = require('mongoose');

const schema = mongoose.Schema;
const userSchema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
         unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Registeruser',userSchema)