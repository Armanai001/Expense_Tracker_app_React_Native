import {FlatList, Text, View} from "react-native";

type Expense = {
    id: string,
    description: string,
    amount: number,
    date: Date
}

const renderExpensesItem = (itemData: { index: number, item: Expense }) => {
    return (
        <Text>
            {itemData.item.description}
        </Text>
    )
}

export default function ExpensesList({expenses}: { expenses: Expense[] }) {
    return <View>
        <FlatList data={expenses}
                  renderItem={renderExpensesItem}
                  keyExtractor={(item) => item.id}
        />
    </View>
}