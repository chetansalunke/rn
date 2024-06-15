import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ip } from '../components/ip';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconButton from '../components/buttons/IconButton';
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from '../redux/cartSlice';
const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const pid = route.params.p_id;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://${ip}:3000/api/productDetail`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log(`Error while fetching product details: ${error}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const headerButtonHandler = () => {
      navigation.navigate("AddToCart");
    };
     
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="cart-outline"
            color="black"
            onPress={headerButtonHandler}
          />
        );
      }
    });
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  const mainProduct = product.find(item => item.product_id === pid);
  const addToCartButtonHandler=()=>{
    dispatch(addtoCart({ ...mainProduct}));
    alert('aad to cart');
  }
  if (!mainProduct) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Product not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: mainProduct.image_url }}
          style={styles.productImage}
        />
      </View>
      <Text style={styles.productName}>{mainProduct.name}</Text>
      <Text style={styles.productPrice}>Price: ₹{mainProduct.price}</Text>
      <Text style={styles.productDescription}>{mainProduct.details}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addToCartButtonHandler}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#228B22' }]} onPress={() => alert('Placed Order')}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20, // Shift content to the top
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  productImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 10,
    color: '#3498db',
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#228B22',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
