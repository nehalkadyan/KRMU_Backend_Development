const Post = require("../models/Post.model");

// logic to insert posts

const insertPosts = async (req, res) => {
  try {
    const insertedPosts = await Post.insertMany([
      {
        title: "Docker",
        description: "Learning js",
        category: "education",
      },

      {
        title: "Redis",
        description: "learning Redis",
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
