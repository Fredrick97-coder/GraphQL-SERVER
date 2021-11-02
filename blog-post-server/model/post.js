const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    likes: {
      type: Number,
    },
    dislikes: {
      type: Number,
    },
    comment: {
      type: Array,
      index: true,
    },
  },
  { timestamp: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
