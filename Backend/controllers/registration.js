const Account=require("../models/UserDataschema")
const bcrypt=require('bcrypt')
const signup = async(req, res) => {
    try {
        const {password, email, name,confirmpassword} = req.body;
        const AlreadyExist=await Account.findOne({email:email})
         
        if(AlreadyExist)
        {
            return res.status(400).json({
                success:false,
                error: "Username already exist" });
        }
         if(!(confirmpassword == password))
         {
             return res.status(406).json({
                success:false,
                error: "Password does not match"
             })
         }
        const atIndex = email.indexOf('@');
        const username = email.substring(0, atIndex);
        let hashpassword
        try{
             hashpassword= await bcrypt.hash(password,10);
             const data=await Account.create({username,password:hashpassword,email,name});
             res.status(200).json({
                 id:data._id,
                 success: true,
                 message: 'Signed Up successfully',
             });
        }
        catch(error)
        {
            return res.status(406).json({
                success:false,
                error: "Internal server error"
             })
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({
            success: false,
            message: 'Something went wrong',
    });
    }
}

module.exports=signup;