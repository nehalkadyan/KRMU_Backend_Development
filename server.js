// import express

const express = require("express");

// app
const app = express();

//listen -> server run (server creation)

// home route

app.get("/", (req, res) => {
  return res.send("<h1>Hello World</h1>");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
