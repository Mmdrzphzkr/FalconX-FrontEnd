// src/lib/apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

// Configure Apollo Client to point to the Orchard GraphQL API
const client = new ApolloClient({
  uri: "http://localhost:5000/api/graphql", // Adjust URL for your environment
  cache: new InMemoryCache(),
  headers: {
    // Optionally, add authentication headers here if needed
    // Authorization: `Bearer ${your_access_token}`
  },
});

export default client;
