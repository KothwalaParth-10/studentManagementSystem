const { Await } = require("react-router-dom")
const Account=require("../models/UserDataschema")

exports.getalldata= async (req,res)=>{
    try{  
    let data=await Account.find({})
    data=data.filter((student)=>{
      return (!student.email.includes("22ce056") && !student.email.includes("22ce066"))
    })
      res.status(200).json({
        data:data,
        success:true,
      })
    }catch(error)
    {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}