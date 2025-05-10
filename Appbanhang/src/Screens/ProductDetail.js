import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Baseheader from '../CustomHeader/Baseheader';
import useProduct from '../Hooks/ContextApi';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
const WIDTH__SCREEN = Dimensions.get('screen').width;
const HEIGHT__SCREEN = Dimensions.get('screen').height;
const ProductDetail = ({navigation, route}) => {
  const {idProduct} = route.params;
  const {productsById, getProductById} = useProduct();
  useFocusEffect(
    useCallback(() => {
      getProductById(idProduct);
    }, [idProduct]),
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Baseheader
        leftIcon={require('../../assets/img/back4.png')}
        rightIcon={require('../../assets/img/heart.png')}
      />
      <View style={{flex: 2}}>
        <FlatList
          data={productsById ? [productsById] : []}
          removeClippedSubviews={false}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1, padding: 10}}>
                <Image
                  source={{
                    uri: item?.img?.[0] || 'https://via.placeholder.com/150',
                  }}
                  style={{width: '100%', height: 200, resizeMode: 'cover'}}
                />
                <Text style={styles.txt__product}>{item.nameProduct}</Text>
                <Text>{item.description}</Text>
                <Text>{item.priceProduct}</Text>
              </View>
            );
          }}
          ListEmptyComponent={() => (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" color="orange" />
              <Text style={{marginTop: 10}}>Loading...</Text>
            </View>
          )}
          keyExtractor={item =>
            item?._id?.toString?.() || Math.random().toString()
          }
        />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity style={styles.btn__size}>
          <Text style={{marginHorizontal: 20}}>Kích cỡ</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Text style={{marginHorizontal: 20}}>S</Text>
            <Image source={require('../../assets/img/arrowdown2.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn__size}>
          <Text style={{marginHorizontal: 20}}>Màu sắc</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Text style={{marginHorizontal: 20}}>S</Text>
            <Image source={require('../../assets/img/arrowdown2.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 2, alignItems: 'center'}}></View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  btn__size: {
    backgroundColor: '#f4f4f4',
    width: WIDTH__SCREEN * 0.9,
    height: HEIGHT__SCREEN * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
  txt__product: {
    color: 'black',
    fontSize: 16,
  },
});
