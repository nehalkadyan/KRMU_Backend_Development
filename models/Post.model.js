// import mongoose
const mongoose = require("mongoose");
// post schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    Description: {
      type: String,
    },

    category: {
      type: String,
    },
  },
  { timestamps: true }
);

// model
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
