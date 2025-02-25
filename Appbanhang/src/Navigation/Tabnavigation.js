import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notification from '../Screens/Notification';
import UserScreen from '../Screens/UserScreen';
import OrderScreen from '../Screens/OrderScreen';
import HomeScreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

const Tabnavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image source={require('../../assets/img/home2.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: () => (
            <Image source={require('../../assets/img/notificationbing.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: () => (
            <Image source={require('../../assets/img/Order.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Image source={require('../../assets/img/profile.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabnavigation;

const styles = StyleSheet.create({});
