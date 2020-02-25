import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    backgroundColor: "#E5E5E5",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10
  }
});
