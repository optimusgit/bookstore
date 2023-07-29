import axios from 'axios';

const API_ENDPOINT = 'https://api.itbook.store/1.0/new';

const fetchProducts = async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products from the API');
  }
};

export default fetchProducts;
