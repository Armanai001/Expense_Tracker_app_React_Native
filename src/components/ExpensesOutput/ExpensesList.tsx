import {FlatList, StyleSheet, View} from "react-native";
import ExpenseItem from "./ExpenseItem";

type Expense = {
    id: string,
    description: string,
    amount: number,
    date: Date
}

const renderExpensesItem = (itemData: { index: number, item: Expense }) => {
    return (
        <ExpenseItem {...itemData.item}/>
    )
}

export default function ExpensesList({expenses}: { expenses: Expense[] }) {
    return <View style={styles.container}>
        <FlatList data={expenses}
                  renderItem={renderExpensesItem}
                  keyExtractor={(item) => item.id}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})