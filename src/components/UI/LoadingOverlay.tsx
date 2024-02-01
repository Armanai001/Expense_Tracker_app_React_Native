import {ActivityIndicator, StyleSheet, View} from "react-native";

export default function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color="white"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})
