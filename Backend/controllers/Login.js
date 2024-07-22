const Account=require("../models/UserDataschema");

const login=async (req,res)=>{
    try
    {
    const {email,password}=req.body
    const useremail=await Account.findOne({email});
    if(!useremail)
    {
     return res.json({
          id:1,
          success:false,
          message:"email does not exit"
        })
    }
    const data=await Account.findOne({email,password});
    if(!data)
    {
        return res.json({
            id:0,
            success:false,
            message:"Password does not exit"
          })   
    }
    return res.json({
        id:data._id,
        success:true,
        message:"Login successfully"
      })  
    }catch(error)
    {
         console.log(error);
         console.error(error);
         res.status(500).json({
        success:false,
        message:"Internal Server Error"
         })
    }
}
module.exports={login}