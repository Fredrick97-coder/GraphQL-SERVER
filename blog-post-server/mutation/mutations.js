const Post = require("../model/post");

//Mutations

const newPost = async (parent, args) => {
  const { author, title, description, likes, dislikes, comment } = args.input;
  const post = await new Post({
    author,
    title,
    description,
    likes,
    dislikes,
    comment,
  }).save();

  return post;
};
const updatePost = async (parent, args) => {
  const { id } = args;
  const { author, title, description, likes, dislikes, comment } = args.input;
  const post = await Post.findByIdAndUpdate(
    id,
    {
      author,
      title,
      description,
      likes,
      dislikes,
      comment,
    },
    { new: true }
  );

  return post;
};

const deletePost = async (parent, args) => {
  const { id } = args;
  const post = await Post.findByIdAndDelete(id);

  return "post deleted";
};

module.exports = { newPost, updatePost, deletePost };
