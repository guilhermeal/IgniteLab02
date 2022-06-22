import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p6d9vq1sc401xl3twq7v3t/master',
  cache: new InMemoryCache()
})