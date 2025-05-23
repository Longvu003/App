import axios from 'axios';
import ipconfig from '../IpApp';
import {createContext, useState, useCallback, useEffect} from 'react';
const ProductContext = createContext();
export const CallApiApp = ({children}) => {
  const [products, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [productsBycategory, setProductsBycategory] = useState([]);
  const [productsById, setProductsById] = useState([]);

  const CallProduct = async () => {
    try {
      const respone = await axios.get(`${ipconfig}/products/getProduct`);
      if (respone.status === 200) {
        setProducts(respone.data.item);
      }
      return false;
    } catch (error) {
      console.log('Lỗi nè: ', error);
    }
  };

  const CallCategory = async () => {
    try {
      const response = await axios.get(`${ipconfig}/Categories/getCategory`);
      setCategories(response.data.item);
    } catch (error) {
      console.log(error);
    }
  };

  const CallProductByCategory = async Idcategory => {
    try {
      const response = await axios.get(
        `${ipconfig}/Categories/getProductByCategory`,
        {params: {Idcategory}},
      );
      setProductsBycategory(response.data.item);
      return response.data.item;
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async idProduct => {
    try {
      const response = await axios.get(`${ipconfig}/products/getProductById`, {
        params: {idProduct},
      });
      setProductsById(response.data.item);
      return response.data.item;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        Categories,
        productsBycategory,
        CallCategory,
        CallProduct,
        CallProductByCategory,
        getProductById,
        productsById,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
