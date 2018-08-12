import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Services extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Services</Text>
            </View>
        );
    }
}
export default Services;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});