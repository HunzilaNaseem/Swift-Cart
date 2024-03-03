import axios from 'axios';

export const getAllProducts = () => {
  return axios.get("https://dummyjson.com/products")
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const getProductsByCategory = (category) => {
  return axios.get(`https://dummyjson.com/products/category/${category}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const getCart = () => {
  return axios.get("https://dummyjson.com/carts/1")
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const addToCart = (id) => {
  return axios.post("https://dummyjson.com/carts/add", {
      userId: 1,
      products: [
        {
          id: id,
          quantity: 1,
        },
      ],
    }, {
      headers: { "Content-Type": "application/json" }
    })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};