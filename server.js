// import express

const express = require("express");

// import mongoose

const mongoose = require("mongoose");

// app
const app = express();

// database connection

mongoose
  .connect(
    "mongodb+srv://kadyannehal333_db_user:KDRllz4u1r3YpzXa@cluster0.lcxo8l1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database connected");
  });

// home route

app.get("/hello", (req, res) => {
  return res.send("<h1>Hello World</h1>");
});

app.get("/users", (req, res) => {
  //logic

  return res.json({
    users: [
      {
        id: 1,
        name: "a",
      },

      {
        id: 2,
        name: "b",
      },

      {
        id: 3,
        name: "c",
      },

      {
        id: 4,
        name: "d",
      },
    ],
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

// KDRllz4u1r3YpzXa
