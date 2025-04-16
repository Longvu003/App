import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import StackNavigation from './src/Navigation/StackNavigation';

import {CallApiApp} from './src/Hooks/CallApiApp.js';
const App = () => {
  return (
    <CallApiApp>
      <View style={{flex: 1}}>
        <StackNavigation />
      </View>
    </CallApiApp>
  );
};

export default App;
