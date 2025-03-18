import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Baseheader = ({rightIcon, title, leftIcon}) => {
  const navigation = useNavigation();
  {
    return (
      <View style={styles.container__header}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.iconSize} source={leftIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <Text>{title}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image style={styles.iconSize} source={rightIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Baseheader;

const styles = StyleSheet.create({
  iconSize: {
    width: 40,
    height: 40,
  },
  container__header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 27,
    alignItems: 'center',
  },
});
