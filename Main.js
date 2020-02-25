import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { GoalItem, GoalInput } from "./components";

const GET_DATA = gql`
  query {
    appdata {
      id
      name
    }
  }
`;

export default function Main() {
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);
  const updateGoal = enteredText => setGoal(enteredText);

  const addGoalHandler = () => {
    setGoalsList(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goal }
    ]);
    setGoal("");
    console.log(goalsList);
  };

  const { data, loading, error } = useQuery(GET_DATA);
  if (error) return console.error(error);

  return (
    <View style={styles.screen}>
      <GoalInput
        goal={goal}
        updateGoal={updateGoal}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        data={goalsList}
        renderItem={itemData => <GoalItem item={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    justifyContent: "space-between"
  }
});
