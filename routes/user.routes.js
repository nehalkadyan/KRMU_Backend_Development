// require express

const express = require("express");

// import User model

const User = require("../models/user.model");

// router -> to create apis

const router = express.Router();

router.post("/store-user", async function (req, res) {
  try {
    // store user
    const { username, email, password } = req.body;
    // create new user

    const newUser = new User({
      username,
      email,
      password,
    });
    // save newUser
    await newUser.save();

    return res.json({ message: "User stored successfully", user: newUser });
  } catch (err) {
    console.log(err);
  }
});

// api to fetch users

// const fetchUsers = async (req, res) => {
//   try {
//     const users = await User.find(); // array []

//     return res.json({ message: "users fetched", users });
//   } catch (err) {
//     console.log(err);
//   }
// };

router.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // array []

    return res.json({ message: "users fetched", users });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
