const { gql } = require('apollo-server-express')

const books = [
  {
    author: 'Sererere',
    title: 'sdsdsdsd',
  },
  {
    author: 'Sererere',
    title: 'sdsdsdsd',
  },
]

const me = () => 'Hello world'
module.exports = {
  Query: {
    books: () => books,
    me,
  },
}
