const Post = require("../models/Post.model");

// logic to insert posts

const insertPosts = async (req, res) => {
  try {
    const insertedPosts = await Post.insertMany([
      {
        title: "Learn JS",
        description: "learning js",
        category: "education",
      },

      {
        title: "Learn Node",
        description: "learning node",
        category: "education",
      },
    ]); // takes an array

    return res.json({
      message: "Posts inserted successfully",
      posts: insertedPosts,
    });
  } catch (err) {
    console.log(err);
  }
};

// export
module.exports = { insertPosts };
