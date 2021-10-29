const { gql } = require('apollo-server-express')

module.exports = gql`
  type Book {
    author: String!
    title: String
  }

  type Query {
    books: [Book]
    me: String
  }
`
