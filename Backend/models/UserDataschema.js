const mongoose=require('mongoose');
// const nodemailer=require('nodemailer');

const account = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        status:{
            type:Boolean,
            required:true,
            default:false
        }
    }
)

module.exports=mongoose.model("Account", account);