const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");


const signin = async (req, res) => {
  try{
     const {email, password} = req.body;
      //.  abc@gmail.com
      // password = 123

     // check whther user exists in the db

     const existingUser = await User.findOne({email});

     if(!existingUser){
        return res.status(404).json({message : "User not found with this email"})
     }

     // compare password

     const isValidPassword = await bcrypt.compare(password, existingUser.password)

     if(!isValidPassword){
      return res.status(401).json({message : "Password did not match"})
    }

    // create token

    const tokenData = {
      id: existingUser._id
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn: "1h"})
    return res.json({message : "user signed in successfully", user : existingUser, token})

  }catch(err){
    console.log("error", err)
  }
}


module.exports = {signin}