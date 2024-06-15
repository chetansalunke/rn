import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigation } from "@react-navigation/native";

const AddToCartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.item);
  const navigation = useNavigation();

  const getTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.qty * item.price;
    });
    return total.toFixed(2);
  };

  const incrementButtonHandler = (item) => {
    dispatch(incrementQuantity(item)); // Dispatch increment action
  };

  const decrementButtonHandler = (item) => {
    if (item.qty === 1) {
      dispatch(removeFromCart(item)); // Dispatch remove action when quantity is 1
    } else {
      dispatch(decrementQuantity(item)); // Dispatch decrement action
    }
  };

  const placeOrderHandler = () => {
    // Calculate total items
    const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);
    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
    
    // Navigate to the checkout screen with total items and total price as route params
    navigation.navigate('Checkout', { totalItems, totalPrice });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image_url }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>Price: ₹{item.price}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => decrementButtonHandler(item)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.qty}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => incrementButtonHandler(item)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.product_id.toString()}
        contentContainerStyle={{ paddingTop: 20 }} // Shift content to the top
      />
      {cartItems.length > 0 && (
        <View style={styles.bottomContainer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              {"Added Item (" + cartItems.length + ")"}
            </Text>
            <Text style={styles.totalText}>Total: ₹{getTotal()}</Text>
          </View>
          <TouchableOpacity
            style={styles.placeOrderButton}
            onPress={placeOrderHandler} // Placeholder function
          >
            <Text style={styles.placeOrderText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    width: "100%",
    height: 120,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: "#3498db",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#228B22",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  totalText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#000",
  },
  placeOrderButton: {
    backgroundColor: "#228B22",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  placeOrderText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddToCartScreen;
