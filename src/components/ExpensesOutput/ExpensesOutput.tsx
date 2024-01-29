import {View} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";


type Expense = {
    id: string,
    description: string,
    amount: number,
    date: Date
}

export default function ExpensesOutput({expenses, expensesPeriod}: { expenses: Expense[], expensesPeriod: string }) {
    return <View>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
        <ExpensesList expenses={expenses}/>
    </View>
}