import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { StyleSheet, Text, View, Button } from "react-native";

const GET_DATA = gql`
  {
    appdata {
      id
      name
      type
    }
  }
`;

const DataComponent = () => {
  const { data, loading, error } = useQuery(GET_DATA);

  if (loading) return <Text>Loading...</Text>;
  if (error) return console.error(error.message);

  return (
    <View>
      <Text style={{ color: "white" }}>Hey tthere</Text>
    </View>
  );
};

export default DataComponent;
