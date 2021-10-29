const { posts } = require('../temp')

//Queries
const post = () => posts
const totalPosts = () => posts.length

//Mutations
const newPost = (parent, args) => {
  // console.log(args)
  //create new post object

  // destructions

  // const { title, description } = args.input

  const post = {
    id: posts.length + 1,
    ...args.input,
  }

  //push new post object to post array
  posts.push(post)

  return post
}
module.exports = {
  Query: {
    allPosts: post,
    totalPosts,
  },
  Mutation: {
    newPost,
  },
}
