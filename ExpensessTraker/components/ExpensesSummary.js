
import { View,Text,StyleSheet } from 'react-native'; 
import {GlobalStyles} from '../constants/styles';
const ExpensesSummary = ({expenses,periodName}) => {

    const expensesSum = expenses.reduce((sum,expense)=>{
        return sum + expense.amount;
        
    },0);
    console.log(""+expensesSum);
    
  return (
    <View style={styles.container}>
      {/* summary of the expenses */}
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container:{
    padding:12,
    backgroundColor:'#d9d9db',
    marginTop:18,
    borderRadius:8,
    flexDirection:'row',
    // main Axis
    justifyContent:'space-between',
    alignItems:'center'
  },
  period:{
    fontSize: 12,
    color:'rgb(0, 0, 0)',
  },
  sum:{
    fontSize:16,
    fontWeight:'bold',
    color: 'rgb(0, 0, 0)'
  }

});
