import {Pressable, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../Constants/styles";

export default function ExpenseItem({description, date, amount}: {
    description: string,
    date: Date,
    amount: number
}) {
    return (
        <Pressable style={styles.container}>
            <View>
                <Text style={styles.descriptionText}>{description}</Text>
                <Text style={styles.dateText}>{`${date.toDateString()}`}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amountText}>{amount} ₹</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    dateText: {
        fontSize: 15,
        color:'#170101',
        fontStyle: 'italic'
    },

    descriptionText: {
        fontWeight: "bold",
        fontSize: 18,
        paddingBottom: 4
    },
    amountContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        minWidth: 90
    },
    amountText: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'right'
    }

})