
import { FlatList,StyleSheet, View } from 'react-native';
import ExpensesSummary from '../ExpensesSummary';
import ExpensesList from '../ExpensesList';


function ExpensesOutput({expenses, expensesPeriod}){
    return <View style={styles.container}>
     <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
     <ExpensesList expenses={expenses}/>
    </View>
}


export default ExpensesOutput;

const styles= StyleSheet.create({
    container:{
        paddingHorizontal:24,
        paddingBottom:0,
        paddingTop:'24',
        backgroundColor:'#beecec',
        flex:1,
    }
});