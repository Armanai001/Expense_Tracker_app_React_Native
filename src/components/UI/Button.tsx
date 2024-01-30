import {Pressable, StyleSheet, Text} from "react-native";
import {GlobalStyles} from "../../Constants/styles";

export default function Button({title}: { title: string }) {
    return <Pressable style={styles.container}>
        <Text style={styles.text}>
            {title}
        </Text>
    </Pressable>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary100,
        margin: 5,
        padding: 5,
        borderRadius: 5,
        minWidth: 100,
        height: 40,
        justifyContent: 'center',
        flex: 1
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary800
    }
})