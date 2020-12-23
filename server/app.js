require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const graphqlHTTP = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema')
const connectDB = require('./db')
require('colors')

connectDB()

const app = express()

const server = new ApolloServer({schema})
server.applyMiddleware({app})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

const PORT = process.env.PORT

app.listen(
  PORT,
  console.log(
    `Server running and listening for requests on port: ${PORT}`.yellow.bold
  )
)
