import { View, Text, StyleSheet } from 'react-native';

function Subtitle1({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle1;

const styles = StyleSheet.create({
  subtitle: {
    color: '#C6F8FF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#C6F8FF',
    borderBottomWidth: 2,
  },
});
