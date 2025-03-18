import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/User/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabnavigation from './Tabnavigation';
import SearchScreen from '../Screens/SearchScreen';
import RegisterScreen from '../Screens/User/RegisterScreen';
import AllCategory from '../Screens/AllCategory';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Tabnavigation">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="AllCategory" component={AllCategory} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
