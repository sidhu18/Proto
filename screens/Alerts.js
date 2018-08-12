import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Alerts extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Alerts</Text>
            </View>
        );
    }
}
export default Alerts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});