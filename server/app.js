import bodyParser from "body-parser"
import cors from "cors"
import { ApolloServer, makeExecutableSchema } from "apollo-server-express"
import { importSchema } from "graphql-import"
import path from "path"
import express from "express"
import resolvers from "./resolvers"
import "./db"
import { User, Questionnaire, Task } from "./db/models"

const app = express()

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 500000
  })
)
app.use(bodyParser.json({ limit: "50mb" }))
app.use(cors())

const typeDefs = importSchema(path.join(__dirname, "./schema.graphql"))
const schema = makeExecutableSchema({ typeDefs, resolvers, })
const server = new ApolloServer({
  schema,
  playground: {
    settings: {
      "editor.theme": "light"
    }
  },
  context(request) {
    return {
      request,
      User,
      Questionnaire,
      Task,
    }
  }
})

server.applyMiddleware({ app, path: "/" })

app.listen(8000, port => {
  console.log(`Server is running at ${port}`)
})