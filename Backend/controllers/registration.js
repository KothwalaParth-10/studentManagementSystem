const Account=require("../models/UserDataschema")

const signup = async(req, res) => {
    try {
        const {password, email, name} = req.body;
         console.log(password);
         console.log(email);
         console.log(name);
        const AlreadyExist=await Account.findOne({email:email})
         
        if(AlreadyExist)
        {
            return res.status(400).json({error: "Username already exist" });
        }
        const atIndex = email.indexOf('@');
        const username = email.substring(0, atIndex);
       const data=await Account.create({username,password,email,name});
        res.status(200).json({
            id:data._id,
            success: true,
            message: 'Signed Up successfully',
        });
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