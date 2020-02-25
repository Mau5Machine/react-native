import React from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default GoalItem = props => {
  const { goal, updateGoal, addGoalHandler } = props;
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Personal Goals"
        style={styles.input}
        onChangeText={updateGoal}
        value={goal}
      />
      <Button title="ADD" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 10
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
