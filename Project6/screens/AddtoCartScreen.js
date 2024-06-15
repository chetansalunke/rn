import { PRODUCT } from "../data/dummy-data";
import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
const AddtoCartScreen = () => {
  // Example list of products
  const cartItemIds = useSelector((state) => state.cart.ids);

  const item = PRODUCT.filter((product) =>
    cartItemIds.includes(product.product_id)
  );

  console.log(item);

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // State to track items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart

  // Function to render each product item
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <View style={styles.productInnerContainer}>
        <Image source={{ uri: item.image_url }} style={styles.productImage} />
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
        <Text> Quantity</Text>
        <View style={styles.container1}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleDecrement}
            >
              <Icon name="remove" size={30} color="white" />
            </TouchableOpacity>
            <View style={styles.counterContainer}>
            <Text style={styles.counterText}>{count}</Text>
            </View>
            
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleIncrement}
            >
              <Icon name="add" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={item}
        keyExtractor={(item) => item.name}
        renderItem={renderProductItem}
        // You can adjust the number of columns based on your design
      />

      {/* Cart summary */}
      <View style={styles.cartSummary}>
        <Text style={styles.cartSummaryText}>Cart Summary:</Text>
        {cartItems.map((cartItem) => (
          <Text key={cartItem.id}>{cartItem.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    marginTop:15,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems:'center',
    justifyContent:''
  },
  iconButton: {
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  productImage: {
    width: "%",
    height: 250,
    marginBottom: 8,
    resizeMode: "cover",
    borderRadius: 4,
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  productInnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 300,
    marginBottom: 8,
    resizeMode: "cover",
    borderRadius: 4,
  },
  cartSummary: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    padding: 16,
  },
  cartSummaryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddtoCartScreen;
