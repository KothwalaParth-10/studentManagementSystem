const express=require("express")
const router=express.Router();

const signup=require('../controllers/registration.js');
const activation=require('../controllers/activate.js');
const {login}=require("../controllers/Login.js")

router.post("/smp/signup", signup);
router.put("/activate", activation);
router.post("/",login)
 
module.exports=router