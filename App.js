import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import DataComponent from "./DataComponent";

const client = new ApolloClient({
  uri: "http://hasura.itbvault.com/v1/graphql"
});

export default function App() {
  const [text, setText] = useState("text one");

  const _onPress = () => {
    if (text === "text one") {
      setText("This is the new text!");
    } else {
      setText("text one");
    }
  };

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Button title="Change Text" onPress={_onPress} />
        <DataComponent />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 20
  }
});
