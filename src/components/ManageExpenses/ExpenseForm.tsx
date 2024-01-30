import {StyleSheet, Text, View} from "react-native";
import Input from "./Input";
import Button from "../UI/Button";

export default function ExpenseForm() {
    return <View>
        <Text style={styles.title}>
            Add Expense
        </Text>
        <Input label="Amount"
               textInputConfigurations={{
                   keyboardType: 'decimal-pad',
                   placeholder: "e.g. 200"
               }}/>

        <Input label="Date"
               textInputConfigurations={{
                   placeholder: "YYYY-MM-DD",
                   maxLength: 10,
               }}/>

        <Input label="Description"
               textInputConfigurations={{
                   multiline: true,
                   placeholder: "e.g. Buying a book"
               }}/>

        <View style={styles.buttons}>
            <Button title='Cancel'/>
            <Button title='Add'/>
        </View>
    </View>
}

const styles = StyleSheet.create({
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
    }
})