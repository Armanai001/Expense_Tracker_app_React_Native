import {StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../Constants/styles";

export default function ErrorOverlay({msg}: { msg: string }) {


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Some Problem Occurred</Text>
            <Text style={styles.message}>{msg}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 15
    },
    message: {
        textAlign: 'center',
        fontSize: 20,
        color: GlobalStyles.colors.error50,
        paddingHorizontal:20

    }
})