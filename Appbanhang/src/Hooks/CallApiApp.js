import axios from 'axios';
import ipconfig from '../IpApp';
export const CallProduct = async () => {
  try {
    const respone = await axios.get(`${ipconfig}/products/getProduct`);
    return respone.data.item;
  } catch (error) {
    throw error;
  }
};

export const CallCategory = async () => {
  try {
    const response = await axios.get(`${ipconfig}/Categories/getCategory`);
    return response.data.item;
  } catch (error) {
    throw error;
  }
};

export const CallProductById = async () => {
  try {
  } catch (error) {
    throw error;
  }
};
