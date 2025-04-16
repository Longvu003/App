import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
  ActivityIndicator,
  FlatListComponent,
} from 'react-native';
import React, {useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
const HEIGHT__SCREEN = Dimensions.get('screen').height;
const WIDTH__SCREEN = Dimensions.get('screen').width;
import useProduct from '../Hooks/ContextApi';

const HomeScreen = ({navigation}) => {
  const {products, Categories, CallCategory, CallProduct} = useProduct();
  const handleCategory = async Idcategory => {
    navigation.navigate('ProductByCategory', {Idcategory});
  };
  useFocusEffect(
    useCallback(() => {
      CallCategory(), CallProduct();
    }, []),
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Image source={require('../../assets/img/profile.png')} />
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Image source={require('../../assets/img/cart2.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.header__search}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Image source={require('../../assets/img/search.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.container__category}>
        <Text>Danh mục</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AllCategory')}>
          <Text>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 9}}>
        <FlatList
          data={products}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item._id.toString()}
          ListHeaderComponent={() => (
            <View>
              {Categories.length > 0 ? (
                <FlatList
                  horizontal
                  data={Categories}
                  scrollEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item._id.toString()}
                  renderItem={({item}) => (
                    <View style={styles.item__categories}>
                      <TouchableOpacity
                        style={{alignItems: 'center'}}
                        onPress={() => handleCategory(item._id)}>
                        <Image
                          style={styles.img__category}
                          source={{uri: item.imageCategory}}
                        />
                        <Text numberOfLines={1}>{item.categoryName}</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              ) : (
                <ActivityIndicator size="large" color="orange" />
              )}

              <View style={styles.container__product}>
                <Text>Bán chạy</Text>
              </View>
            </View>
          )}
          renderItem={({item}) => (
            <View style={styles.item__container}>
              <TouchableOpacity style={styles.item__product}>
                <Image
                  style={styles.img__product}
                  source={{uri: item.img[0]}}
                />
                <Text style={styles.txt__product} numberOfLines={1}>
                  {item.nameProduct}
                </Text>
                <Text style={styles.txt__product} numberOfLines={2}>
                  {item.description}
                </Text>
                <Text style={styles.txt__product}>{item.priceProduct} vnđ</Text>
                <Text style={styles.txt__product}>
                  Số lượng:{item.quantityProduct}
                </Text>
                <Text style={styles.txt__product}>
                  Đã bán:{item.quantitySold}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={() => (
            <ActivityIndicator size="large" color="orange" />
          )}
        />
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  img__category: {
    width: 56,
    height: 56,
    borderRadius: 40,
  },

  item__categories: {
    marginLeft: 20,
    height: HEIGHT__SCREEN * 0.1,
    borderRadius: 10,
    justifyContent: 'center',
    width: WIDTH__SCREEN * 0.3,
  },

  item__container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },

  img__product: {
    height: 100,
    width: 150,
    marginTop: 10,
    marginHorizontal: 10,
  },
  item__product: {
    width: WIDTH__SCREEN * 0.45,
    height: 220,
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  container__product: {
    flex: 1,
    marginHorizontal: 20,
  },
  container__category: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  txt__product: {
    marginHorizontal: 10,
    color: 'black',
  },
  header__search: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    flex: 1,
    zIndex: 10,
  },
});
