import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions

} from "react-native";

const { height,width } = Dimensions.get('window')

import Icon from "react-native-vector-icons/Ionicons"
import Category from "./components/explore/Category"
import ExclusiveOffers from "./components/explore/ExclusiveOffers";
class Home extends Component {

    componentWillMount(){
        this.startHeaderHeight = 80
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View style={{height:this.startHeaderHeight,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#dddddd'}}>
                        <View style={{ flexDirection:'row' ,padding:10 ,backgroundColor:'white',marginHorizontal:20,
                        shadowOffset:{width:0,height:0},
                        shadowColor:'black',
                        shadowOpacity:0.2,
                        elevation:1,
                        marginTop:Platform.OS =='android' ? 30 : null}}>
                        <Icon name="ios-search" size={20}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder=" Search something..."
                            placeholderTextColor="grey"
                            style={{flex:1,fontWeight:'700',backgroundColor:'white'}}
                        />
                        </View>
                    </View>

                    <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex:1,backgroundColor:'white',paddingTop:20 }}>
                            <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                                Get top branded phones at unbelivable rates..
                            </Text>
                            <View style={{ height:130, marginTop:20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    style = {{ paddingEnd:5 }}
                                >
                                    <Category imageUri = {require('../assets/iphone.jpg')}></Category>
                                    <Category imageUri = {require('../assets/samsung.jpg')}></Category>
                                    <Category imageUri = {require('../assets/moto.png')}></Category>
                                </ScrollView>
                            </View>
                            <View style={{ marginTop:20,paddingHorizontal:20}} >
                                <Text style={{fontSize:24,fontWeight:'700'}} >
                                    Exclusive offers available for you.
                                </Text>
                                <ExclusiveOffers exclusiveImg = {require('../assets/black.jpg')} ></ExclusiveOffers>
                                <ExclusiveOffers exclusiveImg = {require('../assets/nike.jpg')} ></ExclusiveOffers>
                                <ExclusiveOffers exclusiveImg = {require('../assets/rain.png')} ></ExclusiveOffers>
                                <ExclusiveOffers exclusiveImg = {require('../assets/adidas.jpg')} ></ExclusiveOffers>
                            </View>
                            <View style ={{ marginTop:20}} ></View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});