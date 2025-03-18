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
} from 'react-native';
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
const HEIGHT__SCREEN = Dimensions.get('screen').height;
const WIDTH__SCREEN = Dimensions.get('screen').width;
import useCallItem from '../Hooks/useCallItem';
const HomeScreen = ({navigation}) => {
  const {products, Categories} = useCallItem();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Image source={require('../../assets/img/profile.png')} />
        <Image source={require('../../assets/img/cart2.png')} />
      </View>
      <View style={styles.header__search}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <Image source={require('../../assets/img/search.png')} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 8}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container__category}>
            <Text>Categories</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AllCategory')}>
              <Text>get all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={Categories}
            renderItem={({item}) => {
              return (
                <View style={styles.item__categories}>
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      style={styles.img__category}
                      source={{uri: item.imageCategory}}
                    />
                    <Text numberOfLines={1}>{item.categoryName}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={item => item._id}
          />
          <View style={styles.container__product}>
            <Text>Top selling</Text>
          </View>
          <View style={{flex: 5}}>
            <FlatList
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={products}
              renderItem={({item}) => {
                return (
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
                      <Text style={styles.txt__product}>
                        {item.priceProduct} vnđ
                      </Text>
                      <Text style={styles.txt__product}>
                        Số lượng:{item.quantityProduct}
                      </Text>
                      <Text style={styles.txt__product}>
                        Đã bán:{item.quantitySold}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={item => item._id}
            />
          </View>
        </ScrollView>
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
    margin: 10,
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
    flex: 2,
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
  },
});
