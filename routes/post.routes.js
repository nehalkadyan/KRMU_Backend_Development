const express = require("express");
// import

const { insertPosts } = require("../controllers/post.controller");
const router = express.Router();

// insert posts

router.post("/insert/posts", insertPosts);

module.exports = router;
