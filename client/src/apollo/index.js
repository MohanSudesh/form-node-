import { ApolloClient } from "apollo-client"
import { ApolloLink } from "apollo-link"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { onError } from "apollo-link-error"

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const authToken = localStorage.getItem("authToken")
  operation.setContext({
    headers: {
      authorization: !!authToken ? `Bearer ${authToken}` : null
    }
  })
  return forward(operation)
})

const httpLink = new HttpLink({
  uri: "http://localhost:8000"
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, authMiddleware, httpLink,]),
})

export { client }