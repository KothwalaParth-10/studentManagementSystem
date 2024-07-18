const mongoose=require("mongoose");
require("dotenv").config()
const Dbconnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
       }).then(()=>{
        console.log("DataBase connect successfully");
    }).catch(()=>{
        console.log("DataBase connection falied");
    })
}
module.exports={Dbconnect}