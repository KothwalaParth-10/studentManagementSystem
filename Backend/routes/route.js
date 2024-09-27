const express=require("express")
const router=express.Router();

const signup=require('../controllers/registration.js');
const activation=require('../controllers/activate.js');
const {login,LoginUpdate}=require("../controllers/Login.js");
const {getalldata} =require("../controllers/Datafetch.js")

router.post("/smp/signup", signup);
router.post("/LoginUpdate",LoginUpdate)
router.put("/activate", activation);
router.post("/",login)
router.get("/getalldata",getalldata)
 
module.exports=router