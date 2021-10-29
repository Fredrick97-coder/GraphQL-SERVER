const { gql } = require('apollo-server-express')

module.exports = gql`
  type Post {
    id: ID!
    title: String!
    description: String
  }

  #input type

  input PostInput {
    title: String!
    description: String!
  }

  #Query type

  type Query {
    allPosts: [Post!]!
    totalPosts: Int!
  }

  #mutations

  type Mutation {
    newPost(input: PostInput!): Post!
  }
`
