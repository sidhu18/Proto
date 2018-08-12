import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from "react-native";

const { height,width } = Dimensions.get('window')

class ExclusiveOffers extends Component {
    render() {
        return (
            <View style={{ width:width-35,height:200,marginTop:20 }} >
                <Image style= {{ flex:1, height:null,width:null,resizeMode:'cover',borderRadius:5,borderWidth:1,borderColor:'#dddddd', }}
                    source = {this.props.exclusiveImg}/>
            </View>
        );
    }
}
export default ExclusiveOffers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});