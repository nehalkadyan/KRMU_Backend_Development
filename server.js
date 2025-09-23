// import express

const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

// import mongoose

const mongoose = require("mongoose");

// import user router

const userRouter = require("./routes/user.routes");

const postRouter = require("./routes/post.routes");

// app
const app = express();

app.use(express.json());

// database connection

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

// home route

app.use("/api", userRouter);

app.use("/api/post", postRouter);

// app.get("/hello", (req, res) => {
//   return res.send("<h1>Hello World</h1>");
// });

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
