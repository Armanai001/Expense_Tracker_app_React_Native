import {Text, View} from "react-native";

type Expense = {
    id: string,
    description: string,
    amount: number,
    date : Date
}

export default function ExpensesSummary({periodName, expenses}: { periodName: string, expenses: Expense[] }) {
    const expensesSum = expenses.reduce((sum: number, expenses) => sum + expenses.amount, 0)
    return <View>
        <Text>{periodName}</Text>
        <Text>₹ {expensesSum.toFixed(2)}</Text>
    </View>
}