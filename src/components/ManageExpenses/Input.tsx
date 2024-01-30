import {StyleSheet, Text, TextInput, View} from "react-native";
import {GlobalStyles} from "../../Constants/styles";

export default function Input({label, textInputConfigurations}: { label: string, textInputConfigurations: any }) {
    return <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={[styles.input, (textInputConfigurations['multiline'] && styles.longInput)]} {...textInputConfigurations} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginVertical: 10,
    },
    label: {
        fontSize: 15,
        color: GlobalStyles.colors.primary100,
        fontWeight: 'bold',
        marginVertical: 5
    },
    input: {
        fontSize: 20,
        backgroundColor: GlobalStyles.colors.primary200,
        borderRadius: 3,
        padding: 5,
    },
    longInput: {
        textAlignVertical: 'top',
        height: 150
    }
})