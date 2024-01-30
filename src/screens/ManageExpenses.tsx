import {StyleSheet, View} from "react-native";
import {useLayoutEffect} from "react";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import {GlobalStyles} from "../Constants/styles";

export default function ManageExpenses({route, navigation}: { route: any, navigation: any }) {
    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit expense' : 'Add expense'
        })
    }, [isEditing, navigation])


    return <>
        <View style={styles.container}>
            <ExpenseForm/>

        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary800,
        flex: 1,
    }
})