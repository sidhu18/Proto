import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Categoty extends Component {
    render() {
        return (
            <View style={{ height:130, width:130,marginLeft:20 }}>
                <View style={{flex:3}}>
                    <Image source = {this.props.imageUri}
                    style={{flex:2 , width:null,height:null,resizeMode:'cover',borderRadius:8}}/> 
                </View>
                <View style={{flex:1}}>
                </View>
            </View>                        
        );
    }
}
export default Categoty;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});