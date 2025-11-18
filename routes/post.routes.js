const express = require("express");
const Post = require("../models/Post.model")
// import

const { insertPosts } = require("../controllers/post.controller");
const router = express.Router();

// insert posts
router.post("/insert/posts", insertPosts);

router.get("/sort/posts", async(req, res) => {
    try{

        // ascending = 1
        // descending = -1

        // sort posts in ascending order
      const posts = await Post.find().sort({title : 1})

      return res.json({posts})
    }catch(err){
        console.log("err", err)
    }
})


module.exports = router;
