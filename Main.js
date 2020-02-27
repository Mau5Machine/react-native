import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { GoalInput } from "./components";
import GoalItem from "./components/GoalItem";

const GET_DATA = gql`
  query {
    appdata {
      id
      name
    }
  }
`;

const Main = () => {
  const [goalsList, setGoalsList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setGoalsList(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const deleteGoalHandler = goalId => {
    setGoalsList(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const { data, loading, error } = useQuery(GET_DATA);
  if (error) return console.error(error);

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        data={goalsList}
        renderItem={itemData => (
          <GoalItem item={itemData.item} onDelete={deleteGoalHandler} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    justifyContent: "space-between"
  }
});

export default Main;
