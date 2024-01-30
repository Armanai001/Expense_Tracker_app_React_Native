import {View} from "react-native";
import Input from "./Input";
import {Dispatch, SetStateAction} from "react";

interface valuesInterface {
    amount: string,
    date: string,
    description: string
}

export default function ExpenseForm({values, setValues}: {
    values: valuesInterface,
    setValues: Dispatch<SetStateAction<valuesInterface>>
}) {

    const handleInput = (identifier: string, value: string) => {
        setValues((currentValues: valuesInterface) => {
            return {
                ...currentValues,
                [identifier]: value
            }
        })
    }

    return <View>

        <Input label="Amount"
               textInputConfigurations={{
                   keyboardType: 'decimal-pad',
                   placeholder: "e.g. 200",
                   onChangeText: (value: string) => handleInput('amount', value),
                   value: values.amount
               }}/>

        <Input label="Date"
               textInputConfigurations={{
                   placeholder: "YYYY-MM-DD",
                   maxLength: 10,
                   onChangeText: (value: string) => handleInput('date', value),
                   value: values.date
               }}/>

        <Input label="Description"
               textInputConfigurations={{
                   multiline: true,
                   placeholder: "e.g. Buying a book",
                   onChangeText: (value: string) => handleInput('description', value),
                   value: values.description
               }}/>
    </View>
}
