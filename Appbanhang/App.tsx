import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import StackNavigation from './src/Navigation/StackNavigation';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <StackNavigation />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
