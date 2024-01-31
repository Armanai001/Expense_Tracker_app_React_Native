import {StyleSheet, Text, View} from "react-native";
import Input from "./Input";
import {Dispatch, SetStateAction} from "react";
import {GlobalStyles} from "../../Constants/styles";


export default function ExpenseForm({values, setValues, isValid, setIsValid}: {
    values: ExpenseFormInterface,
    setValues: Dispatch<SetStateAction<ExpenseFormInterface>>
    isValid: boolean,
    setIsValid: Dispatch<SetStateAction<boolean>>;
}) {

    const handleInput = (identifier: string, value: string) => {
        setValues((currentValues: ExpenseFormInterface) => {
            const result = {
                ...currentValues,
                [identifier]: value
            }

            // Adding validation
            const validAmount = !isNaN(+result.amount) && +result.amount > 0
            const validDate = result.date.toString() !== 'Invalid Date'
            const validDescription = result.description.trim().length > 0

            if (!validAmount || !validDate || !validDescription) {
                setIsValid(false)
            } else {
                setIsValid(true)
            }

            return result
        })
    }

    return <View>

        <Input label="Amount"
               textInputConfigurations={{
                   keyboardType: 'decimal-pad',
                   placeholder: "e.g. 200",
                   onChangeText: (value: string) => handleInput('amount', value),
                   value: values.amount,
               }}/>

        <Input label="Date"
               textInputConfigurations={{
                   placeholder: "YYYY-MM-DD",
                   maxLength: 10,
                   onChangeText: (value: string) => handleInput('date', value),
                   value: values.date,
               }}/>

        <Input label="Description"
               textInputConfigurations={{
                   multiline: true,
                   placeholder: "e.g. Buying a book",
                   onChangeText: (value: string) => handleInput('description', value),
                   value: values.description,
               }}/>

        <Text style={styles.InvalidText}>
            {!isValid && "Invalid Input"}
        </Text>

    </View>
}

const styles = StyleSheet.create({
    InvalidText: {
        color: GlobalStyles.colors.error500,
        textAlign: 'center',
        margin: 20,
        fontSize: 20,
        fontWeight: "bold"
    }
})