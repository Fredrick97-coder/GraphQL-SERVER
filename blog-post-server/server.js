const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const http = require('http')
const path = require('path')
const {
  fileLoader,
  mergeTypes,
  mergeResolvers,
} = require('merge-graphql-schemas')

const mongoose = require('mongoose')

//configure environment
require('dotenv').config()

const app = express()

app.get('/rest', function (req, res) {
  res.send({
    data: 'You hit restful endpoint',
  })
})

//db

const db = async () => {
  try {
    const success = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })

    console.log('DB connected successfully')
  } catch (err) {
    console.log('DB connection error', err)
  }
}

//Execute database connection
db()

//typeDefs
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './typesDefs')))

//resolvers
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, './resolvers')),
)

const apolloServer = new ApolloServer({ typeDefs, resolvers })

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app })
})

const httpServer = http.createServer(app)

app.listen(process.env.PORT, function () {
  console.log('listening on port ' + process.env.PORT)
  console.log(
    `graphql server listening on http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`,
  )
})
