import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabnavigation from './Tabnavigation';
import SearchScreen from '../Screens/SearchScreen';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Tabnavigation">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
