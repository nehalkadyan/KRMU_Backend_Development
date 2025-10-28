// require express

const express = require("express");
// require bcrypt

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// import User model

const User = require("../models/user.model");

// router -> to create apis

const router = express.Router();

router.post("/store-user", async function (req, res) {
  try {
    // store user
    const { username, email, password } = req.body;

    // hash (encrypt) the password

    const hashedPassword = await bcrypt.hash(password, 10)

    // create new user

    const newUser = new User({
      username,
      email,
      password : hashedPassword,
    });
    // save newUser
    await newUser.save();

    return res.json({ message: "User stored successfully", user: newUser });
  } catch (err) {
    console.log(err);
  }
});

// api to singin


router.post("/signin", async (req, res) => {
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
})


// api to fetch users

// const fetchUsers = async (req, res) => {
//   try {
//     const users = await User.find(); // array []

//     return res.json({ message: "users fetched", users });
//   } catch (err) {
//     console.log(err);
//   }
// };

// get users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // array []

    return res.json({ message: "users fetched", users });
  } catch (err) {
    console.log(err);
  }
});

// update single user

router.patch("/edit-user/:userId", async (req, res) => {
  try {
    // logic
    // steps to update user
    const { userId } = req.params;
    // get password

    const { password } = req.body;

    // find user based on userId

    const user = await User.findById(userId);

    user.password = password;

    await user.save();

    return res.json({ message: "User updated successfully", user });
  } catch (err) {
    console.log("err", err);
  }
});

// delete user

router.delete("/delete-account/:userId", async (req, res) => {
  try {
    //logic

    // step 1

    const { userId } = req.params;

    // step 2

    const deletedUser = await User.findByIdAndDelete(userId);

    return res.json({
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
