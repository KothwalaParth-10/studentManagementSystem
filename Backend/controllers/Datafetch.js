const { Await } = require("react-router-dom")
const Account=require("../models/UserDataschema")

exports.getalldata= async (req,res)=>{
    try{  
    const data=await Account.find({})
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