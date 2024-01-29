import {StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../Constants/styles";

type Expense = {
    id: string,
    description: string,
    amount: number,
    date: Date
}

export default function ExpensesSummary({periodName, expenses}: { periodName: string, expenses: Expense[] }) {
    const expensesSum = expenses.reduce((sum: number, expenses) => sum + expenses.amount, 0)
    return <View style={styles.container}>
        <Text style={styles.text}>{periodName}</Text>
        <Text style={styles.text}>{expensesSum} ₹</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 5,
        margin: 10,
    },
    text: {
        fontSize: 17,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary800
    },
})