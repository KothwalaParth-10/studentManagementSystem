const express=require("express")
const app=express()
const cors = require('cors');
const {Dbconnect}=require("./config/Database");
app.use(express.json())
require("dotenv").config()
app.use(cors({
    origin: '*', // or use '*' to allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
const PORT=process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`server is live on ${PORT}`);
})

const router=require("./routes/route")
app.use(router)

Dbconnect();