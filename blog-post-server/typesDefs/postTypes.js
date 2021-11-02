const { gql } = require("apollo-server-express");

module.exports = gql`
  type Post {
    id: ID
    author: String
    title: String
    description: String
    likes: Int
    dislikes: Int
    comment: [String]
  }

  #input type

  input PostInput {
    title: String
    author: String
    description: String
    likes: Int
    dislikes: Int
    comment: [String]
  }

  #Query type

  type Query {
    allPost: [Post]
    totalPosts: Int
  }

  #mutations

  type Mutation {
    newPost(input: PostInput): Post
    updatePost(id: String, input: PostInput): Post
    deletePost(id: String): String
  }
`;
