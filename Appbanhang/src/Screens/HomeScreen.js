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
import {useState, useEffect} from 'react';
const HEIGHT__SCREEN = Dimensions.get('screen').height;
const WIDTH__SCREEN = Dimensions.get('screen').width;
import ipconfig from '../IpApp';
import axios from 'axios';
const HomeScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const getAllProduct = async () => {
    try {
      const respone = await axios.get(`${ipconfig}/products/getProduct`);
      if (respone.status === 200) {
        setProducts(respone.data.item);
      } else {
        Alert.alert('Có lỗi khi lấy data');
      }
    } catch (error) {
      console.log('Lỗi nè', error);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
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
            <TouchableOpacity>
              <Text>get all</Text>
            </TouchableOpacity>
          </View>
          <Text>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            áddddddddddddddddddddđaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Text>
          <View style={styles.container__product}>
            <Text>Top selling</Text>
            <TouchableOpacity>
              <Text>get all</Text>
            </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
