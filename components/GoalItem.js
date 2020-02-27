import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.item.key)}>
      <View style={styles.listItem} on>
        <Text>{props.item.value}</Text>
      </View>
    </TouchableOpacity>
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

export default GoalItem;
