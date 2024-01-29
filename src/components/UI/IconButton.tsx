import {Ionicons} from "@expo/vector-icons";
import {Pressable, StyleSheet, View} from "react-native";

export default function IconButton({name, size, color, onPress}: {
    name: any,
    size: number,
    color: string,
    onPress: () => void
}) {
    return <Pressable onPress={onPress} style={({pressed}) => pressed ? styles.buttonPress : styles.container}>
        <View>
            <Ionicons name={name} color={color} size={size} />
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    buttonPress: {
        opacity: 0.8,
        marginHorizontal: 20,
    }
})