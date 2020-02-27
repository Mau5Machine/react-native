import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal } from "react-native";

export default GoalItem = props => {
  const [goal, setGoal] = useState("");

  const updateGoal = enteredText => setGoal(enteredText);

  const addGoalHandler = () => {
    props.onAddGoal(goal);
    setGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Personal Goals"
          style={styles.input}
          onChangeText={updateGoal}
          value={goal}
        />
        <View style={styles.buttonRow}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
    borderRadius: 10
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});
