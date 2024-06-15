import { Pressable, View, StyleSheet,Text } from "react-native";

function Buttons({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Buttons;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "white",
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
  },
  flatText: {
    color: "black",
  },
  pressed: {
    opacity: 0.76,
    backgroundColor: "rgb(231, 231, 231)",
    borderRadius: 4,
  },
});
