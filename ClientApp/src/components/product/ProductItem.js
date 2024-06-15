import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";

const ProductItem = ({ product }) => {
  const navigation = useNavigation();


  const onPressHandler = () => {
    navigation.navigate("Product Details", { p_id: product.item.product_id });
  };

  return (
    <TouchableOpacity style={styles.productContainer} onPress={onPressHandler}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.item.image_url }} style={styles.productImage} />
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.item.name}</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.productPrice}>₹{product.item.price}</Text>
        </View>
        <Text style={{fontSize:13}}>{product.item.details}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    flexDirection: "row", // Align image and info horizontally
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 150, // Width of the image container
  },
  productImage: {
    aspectRatio: 1,
    width: "100%",
    height: 150, // Height of the image
    resizeMode: "cover",
  },
  productInfo: {
    flex: 1, // Take remaining space
    padding: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: "#3498db",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default ProductItem;
