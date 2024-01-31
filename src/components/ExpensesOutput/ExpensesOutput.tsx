import {StyleSheet, View} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {GlobalStyles} from "../../Constants/styles";


export default function ExpensesOutput({expenses, expensesPeriod}: { expenses: Expense[], expensesPeriod: string }) {
    return <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
        <ExpensesList expenses={expenses}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary800,
        flex: 1,
    }
})