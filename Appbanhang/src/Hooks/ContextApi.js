import ProductContext from './CallApiApp';
import {useContext} from 'react';
const useProduct = () => {
  return useContext(ProductContext);
};
export default useProduct;
