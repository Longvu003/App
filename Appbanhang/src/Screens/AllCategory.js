import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Baseheader from '../CustomHeader/Baseheader';
const AllCategory = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <Baseheader
          leftIcon={require('../../assets/img/back4.png')}
          title="Danh mục"
        />
      </View>
    </View>
  );
};

export default AllCategory;

const styles = StyleSheet.create({});
