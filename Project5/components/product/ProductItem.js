import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
const ProductItem = ({ product }) => {

  const navigation = useNavigation();

  // console.log("from product");
  // console.log(product);
  const [isLiked, setIsLiked] = useState(false);

  

  // Function to handle the like button press
  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  const onPressHandler = () => {
    navigation.navigate("ProductDetail", { p_id: product.item.product_id });
  };

  return (
    <TouchableOpacity style={styles.productContainer} onPress={onPressHandler}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.item.image_url }}
          style={styles.productImage}
        />
      </View>

      <View style={styles.overlay}>
        <TouchableOpacity onPress={handleLikePress} style={styles.likeButton}>
          <Icon1
            name={isLiked ? "heart" : "heart-o"}
            size={20}
            color={isLiked ? "#e74c3c" : "#fff"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.item.name}</Text>
        <Text style={styles.productPrice}>₹{product.item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
  counterContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  productContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  imageContainer: {
    margin: 12,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  productImage: {
    aspectRatio: 1,
    margin: 8,
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "flex-end",
    padding: 8,
  },
  likeButton: {
    backgroundColor: "transparent",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  productInfo: {
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
});

export default ProductItem;
