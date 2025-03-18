import {useState, useEffect} from 'react';
import {CallProduct, CallCategory} from './CallApiApp';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useMemo} from 'react';
const useCallItem = () => {
  const [products, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const response = await CallProduct();
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProduct();
  }, []);

  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const response = await CallCategory();
        setCategories(response);
      } catch (error) {
        console.error;
      }
    };
    getAllCategory();
  }, []);
  return {products, Categories};
};

export default useCallItem;
