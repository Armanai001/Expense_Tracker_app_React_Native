import {Text, View} from "react-native";
import {useLayoutEffect} from "react";

export default function ManageExpenses({route, navigation}: { route: any, navigation: any }) {
    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit expense' : 'Add expense'
        })
    }, [isEditing, navigation])


    return <>
        <View>
            <Text>
                {isEditing ? 'Edit expense' : 'Add expense'}
            </Text>
        </View>
    </>
}