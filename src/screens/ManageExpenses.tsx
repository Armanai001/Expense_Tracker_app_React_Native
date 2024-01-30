import {StyleSheet, Text, View} from "react-native";
import {useContext, useLayoutEffect, useState} from "react";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import {GlobalStyles} from "../Constants/styles";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import {ExpensesContext} from "../store/ExpensesContext";

export default function ManageExpenses({route, navigation}: { route: any, navigation: any }) {
    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId
    const expenseCtx = useContext(ExpensesContext)


    const [values, setValues] = useState({
        amount: '',
        date: '',
        description: ''
    });


    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expenses' : 'Add Expenses'
        })
        if (isEditing) {
            const filteredExpense = expenseCtx.expenses.filter(item => item.id === expenseId)[0]
            setValues({
                amount: filteredExpense.amount.toString(),
                date: filteredExpense.date.toISOString().slice(0, 10),
                description: filteredExpense.description
            })

        }
    }, [isEditing, navigation])


    function handleSubmit() {
        const expenseData = {
            amount: +values.amount,
            date: new Date(values.date),
            description: values.description
        }
        if (isEditing) {
            expenseCtx.updateExpense(expenseId, expenseData)
        } else {
            expenseCtx.addExpense(expenseData)
        }

        navigation.goBack();
    }

    function handleCancel() {
        navigation.goBack();
    }

    function handleDelete() {
        expenseCtx.deleteExpense(expenseId)
        navigation.goBack();
    }


    return <>
        <View style={styles.container}>
            <Text style={styles.title}>
                {isEditing ? 'Edit Your Expense' : 'Add Your Expense'}
            </Text>

            <ExpenseForm values={values} setValues={setValues}/>


            <View style={styles.buttons}>
                <Button title='Cancel' onPress={handleCancel}/>
                {
                    isEditing &&
                    <View style={styles.delete}>
                        <IconButton name="trash"
                                    size={40}
                                    color="#cc3030"
                                    onPress={handleDelete}/>
                    </View>
                }
                <Button title={isEditing ? 'Update' : 'Add'} onPress={handleSubmit}/>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary800,
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginTop: 15
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
    },
    delete: {
        justifyContent: "center",
    }
})