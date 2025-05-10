import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Baseheader from '../CustomHeader/Baseheader';
import useProduct from '../Hooks/ContextApi';
import {useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
const HEIGHT__SCREEN = Dimensions.get('screen').height;
const WIDTH__SCREEN = Dimensions.get('screen').width;
const AllCategory = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const {Categories, CallCategory} = useProduct();
  const handleGetProductbyCategory = async Idcategory => {
    navigation.navigate('ProductByCategory', {Idcategory});
  };
  const isFocused = useIsFocused();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <Baseheader
          leftIcon={require('../../assets/img/back4.png')}
          title="Danh mục"
        />
      </View>
      <View style={{flex: 7}}>
        <Text style={styles.txt__header}>Danh mục sản phẩm </Text>
        {isFocused && (
          <FlatList
            removeClippedSubviews={false}
            data={Array.isArray(Categories) ? Categories : []}
            renderItem={({item}) => (
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={styles.item__container}
                  onPress={() => handleGetProductbyCategory(item._id)}>
                  <Image
                    style={styles.img__category}
                    source={{uri: item.imageCategory}}
                  />
                  <Text numberOfLines={1}>{item.categoryName}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item._id.toString()}
            ListEmptyComponent={() => (
              <ActivityIndicator size={'large'} color="orange" />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default AllCategory;

const styles = StyleSheet.create({
  item__container: {
    marginTop: 8,
    backgroundColor: '#f4f4f4',
    width: WIDTH__SCREEN * 0.9,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: HEIGHT__SCREEN * 0.1,
  },

  txt__header: {
    fontSize: 20,
    fontWeight: 'bold',
    height: HEIGHT__SCREEN * 0.06,
    marginLeft: 20,
  },
  img__category: {
    width: 56,
    height: 56,
    borderRadius: 40,
    marginHorizontal: 10,
  },
});
