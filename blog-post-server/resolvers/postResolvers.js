const Post = require("../model/post");

const { newPost, updatePost, deletePost } = require("../mutation/mutations");

module.exports = {
  Query: {
    allPost: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    newPost,
    updatePost,
    deletePost,
  },
};
