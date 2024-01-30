import {StyleSheet, Text, View} from "react-native";
import {useLayoutEffect, useState} from "react";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import {GlobalStyles} from "../Constants/styles";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";

export default function ManageExpenses({route, navigation}: { route: any, navigation: any }) {
    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId


    const [values, setValues] = useState({
        amount: '',
        date: '',
        description: ''
    });


    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expenses' : 'Add Expenses'
        })
    }, [isEditing, navigation])


    function handleSubmit() {
        navigation.goBack();
    }

    function handleCancel() {
        navigation.goBack();
    }

    function handleDelete() {
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