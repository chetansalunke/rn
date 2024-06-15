import React from 'react';
import { FlatList } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({ data }) => {
  const renderItem = (product) => {
    return <ProductItem product={product} />
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.name}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

export default ProductList;
