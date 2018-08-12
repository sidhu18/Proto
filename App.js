import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './screens/Home'
import Offers from './screens/Offers'
import Services from './screens/Services'
import Alerts from './screens/Alerts'
import Profile from './screens/Profile'


export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home-outline" color={tintColor} size={24} />
      )
    }
  },
  Offers: {
    screen: Offers,
    navigationOptions: {
      tabBarLabel: 'OFFERS',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-pricetags-outline" color={tintColor} size={24} />
      )
    }
  },
  Alerts: {
    screen: Alerts,
    navigationOptions: {
      tabBarLabel: 'ALERTS',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-notifications-outline" color={tintColor} size={24} />
      )
    }
  },
  Services: {
    screen: Services,
    navigationOptions: {
      tabBarLabel: 'SERVICES',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-help-buoy-outline" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person-outline" color={tintColor} size={24} />
      )
    }
  }
},
 {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});