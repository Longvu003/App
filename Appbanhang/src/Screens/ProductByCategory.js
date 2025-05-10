import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useProduct from '../Hooks/ContextApi';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
const ProductByCategory = ({route}) => {
  const {Idcategory} = route.params;
  const {CallProductByCategory, productsBycategory} = useProduct();
  const [loading, setLoading] = useState(true);
  useFocusEffect(
    useCallback(() => {
      CallProductByCategory(Idcategory);
    }, [Idcategory]),
  );
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        {productsBycategory ? (
          <FlatList
            removeClippedSubviews={false}
            data={productsBycategory}
            renderItem={({item}) => {
              return (
                <View>
                  <Text>{item.nameProduct}</Text>
                  <Image
                    style={styles.img__category}
                    source={{uri: item.img[0]}}
                  />
                </View>
              );
            }}
            keyExtractor={item => item._id}
          />
        ) : (
          <View>
            <Text>Không có sản phẩm !</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ProductByCategory;

const styles = StyleSheet.create({
  img__category: {
    width: 106,
    height: 106,
    marginHorizontal: 10,
  },
});
