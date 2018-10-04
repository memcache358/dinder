import React from 'react'
import {createBottomTabNavigator } from 'react-navigation'
import  Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/homeScreen'
import ProfileScreen from '../screens/profileScreen'

export default AppNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-browsers`;
          } else if (routeName === 'Profile') {
            iconName = `md-restaurant`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
  );