import React from "react";
import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import Main from "./Main";
import { View } from "react-native";
const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://hasura.itbvault.com/v1/graphql"
  }),
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}
