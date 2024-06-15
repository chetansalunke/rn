import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import ProductList from '../components/product/ProductList';
import {ip} from '../components/ip'
const ProductScreen = () => {
  const route = useRoute();
  const catId = route.params.cat_id;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://${ip}:3000/api/productDetail/${catId}`)
      .then(res => {
        setProducts(res.data); // Corrected to res.data
        console.log('The products:', res.data);
      })
      .catch(error => {
        console.log('Error while fetching products:', error);
      });
  }, [catId]); // Include catId in the dependency array

  return <ProductList data={products} />;
};

export default ProductScreen;
