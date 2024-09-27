//parth pass=parth123
//kirti pass=kirti123
const Account = require("../models/UserDataschema");
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await Account.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "username does not exit",
        id: 1
      })
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      if (user.username == '22ce056' || user.username == "22ce066") {
        return res.json({
          id: user._id,
          success: true,
          message: "Login successfully",
          admin: true,
          status: true,
          data: user,
        })
      }
      else {
        return res.json({
          data: user,
          id: user._id,
          success: true,
          message: "Login successfully",
          admin: false,
          status: user.status
        })
      }
    } else {
      return res.json({
        success: false,
        message: "Password incorrect",
        id: 0
      })
    }
  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}
require('dotenv').config()
async function Sendmail(user) {
  try {
    const tranporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: "22ce056@charusat.edu.in",
        pass: process.env.MAIL_PASS
      }
    })
    const info = await tranporter.sendMail({
      from: "22ce056@charusat.edu.in",
      to: user.email,
      subject: "Regrading Verification",
      html: `<h1>Hey student ${user.name}!!!</h1>
            <p>You are successfully Verifed By Our Admin.</p>
            <p>So now You can Log in to our System</p>`
    })
    console.log(info);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
const LoginUpdate = async (req, res) => {
  try {
    const data = req.body
    const user = await Account.findByIdAndUpdate(data._id, { status: true })
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "student not exist"
      })
    }
    console.log(user);
    
    if (Sendmail(user)) {
      return res.status(200).json({
        success: true,
        message: "sent mail successfully"
      })
    } else {
      return res.status(500).json({
        success: false,
        message: "internal server error"
      })
    };
  } catch (error) {

    console.log(error);
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}
module.exports = { login, LoginUpdate }