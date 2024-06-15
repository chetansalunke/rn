import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./compontents/GoalItem";
import GoalInput from "./compontents/GoalInput";

export default function App() {

  const [modelIsVisibe,setModalIsVisible]= useState(false);
  const [goalList, setGoalList] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  

  // this handle what happen after the button click
  const addGoalHandler = (enteredGoalText) => {
    // take existing array and append the new item
    // here the new state is depend on the previous state
    setGoalList((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setGoalList(currentCourseGoals=>{
      return currentCourseGoals.filter((goal)=> goal.id !==id);
    });
  }
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>

      <Button title='Add New Goal' color="green" onPress={startAddGoalHandler}/>
       <GoalInput onAddGoal={addGoalHandler} visible={modelIsVisibe} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goalList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          // one way to give the key to the faltview
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
