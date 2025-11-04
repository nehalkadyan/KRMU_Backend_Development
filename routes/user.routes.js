// require express

const express = require("express");
// require bcrypt

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { signin } = require("../controllers/user.controller");

// import User model

const User = require("../models/user.model");

// router -> to create apis

const router = express.Router();

router.post("/store-user", async function (req, res) {
  try {
    // store user
    const { username, email, password } = req.body;

    // hash (encrypt) the password

    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    // save newUser
    await newUser.save();

    return res.json({ message: "User stored successfully", user: newUser });
  } catch (err) {
    console.log(err);
  }
});

// api to singin

router.post("/signin", signin);

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

// api route to search for a user

router.get("/search-user", async (req, res) => {
  try {
    // req.query
    // www.amazon.com?product_name=nike
    const { searchInput } = req.query;
    //.    kr

    // const users = await User.find({username : searchInput});

    const users = await User.find({username : {$regex: searchInput, $options: "i"}});

    // filtering logic

    // const filteredUsers = users.filter((user, index) =>
    //   user.username.toLowerCase().includes(searchInput.toLowerCase())
    // );

    return res.status(200).json({ message: "Users fetched :", users });
  } catch (err) {
    console.log("error while searching a user", err.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
