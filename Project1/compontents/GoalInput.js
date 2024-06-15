import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnterdGoalText] = useState("");

  // this handle what happen after we enter the text in the input field
  const goalInputHandler = (enterdText) => {
    setEnterdGoalText(enterdText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnterdGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>

          <View style={styles.button}>
            <Button title="cancel" onPress={props.onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding:16,
    flext: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccc",
    width: "70%",
    marginRight: 8,
    marginBottom: 16,
    padding: 8,
  },
  buttonContainer: {
    marginTop:16,
    flexDirection: "row",
  },
  button:{
    width:100,
    marginHorizontal:8
  }
});
