// import mongoose

const mongoose = require("mongoose");

// user schema

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
    },
  },
  { timestamps: true }
);

// model

const User = mongoose.model("User", userSchema);

module.exports = User;
