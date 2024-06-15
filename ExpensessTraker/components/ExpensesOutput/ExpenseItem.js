import { Pressable, Text, StyleSheet,View } from "react-native";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpensesItem({id, description, amount, date }) {
  const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('ManageExpenseScreen',{
          expenseId: id
        });
    }
  return (
    <Pressable onPress={expensePressHandler} style={({pressed})=> pressed && styles.pressed} android_ripple="rgb(83, 82, 82)">
      <View style={styles.expenseItem}>
        <View  >
          <Text style={[styles.textBase, styles,description]}>{description}</Text>
          <Text  style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
export default ExpensesItem;

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.75
    },
  expenseItem: {
    padding: 12,
    marginVertical:8,
    backgroundColor:'#aeebf8',
    flexDirection:'row',
    justifyContent: 'space-between',
    borderRadius:6,
    elevation:3,
    shadowColor:'rgb(0, 0, 0)',
    shadowRadius: 4,
    shadowOffset:{width:1, height:1},
    shadowOpacity:0.4
  },
  textBase:{
    color:'black',
  },
  description:{
    fontSize: 16,
    marginBottom:4,
    fontWeight:'bold',
  },
  amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        minWidth:80
  },
  amount:{
    color:'black',
    fontWeight:''
  }

});
