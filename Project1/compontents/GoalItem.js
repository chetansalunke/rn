import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({pressed})=> pressed && styles.pressedItem }
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={{ color: "white", padding: 8 }}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "blue",
  },
  pressedItem:
  {
    opacity:0.5,
  }
});
