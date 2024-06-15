import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { PRODUCT } from "../data/dummy-data";
import { CommonActions, useRoute } from "@react-navigation/native";
import IconButton from "../components/ui/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addtoCart,
  decrementQuantity,
  incrementQuantity,
} from "../store/cartSlice";


const ProductDetailScreen = ({ navigation }) => {
  const [qty, setQty] = useState(0);
  const route = useRoute();
  const pid = route.params.p_id;

  // Find the product with the given product_id
  const product = PRODUCT.find((product) => product.product_id === pid);

  console.log(product);

  const dispatch = useDispatch();

  const adddButtonHandler = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decrementButtonHandler = (item) => {
    if (item.qty == 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };

  const headerButtonHandler = () => {
    navigation.navigate("AddToCart");
  };
  const addtoCartHandler = () => {
    //  dispatch({...product,qty: qty})
    dispatch(addtoCart({ ...product, qty: qty }));
    ToastAndroid.showWithGravity(
      "Item Added",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="cart-outline"
            color="black"
            onPress={headerButtonHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  if (!product) {
    // Handle the case when the product is not found
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image_url }}
            style={styles.productImage}
          />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>

          <View
            style={{
              flexDirection: "column",
              alignItems: "stretch",
              marginTop: 5,
            }}
          >
            <Text style={styles.productPrice}>₹{product.price}</Text>
            <Text style={styles.qtyTxt}>Qty</Text>
            <Text
              style={{
                marginTop: 4,
                marginLeft: 4,
                fontSize: 16,
                fontWeight: "600",
                marginLeft: 8,
              }}
            >
              {product.qty}
            </Text>
          </View>
          <Text style={styles.productDetails}>Details:- {product.details}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addtoCartHandler}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Button 2 pressed")}
        >
          <Text style={styles.buttonText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  qtyTxt: {
    color: "black",
    fontSize: 16,
    marginTop: 3,
    marginLeft: 4,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    backgroundColor: "#34a9db",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "center",
    // Add styling for the button
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    // Add styling for the button container
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
  productContainer: {
    backgroundColor: "#fff",

    margin: 1,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: "80%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: "#3498db",
    marginBottom: 8,
  },
  productDetails: {
    fontSize: 16,
    color: "#555",
  },
});

export default ProductDetailScreen;
