// const OurMaidScreen=()=>{
// return<Text></Text>
// }
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// export default OurMaidScreen;
import { FlatList } from 'react-native';

import ProductList from "../components/product/ProductList";
import { PRODUCT } from "../data/dummy-data";

import ProductItem from "../components/product/ProductItem";



const OurMaidScreen = () => {
    const navigation = useNavigation();

  console.log("from product");

  const [isLiked, setIsLiked] = useState(false);
    const handleLikePress = () => {
        setIsLiked(!isLiked);
      };
    
      const onPressHandler = () => {
        navigation.navigate('Booking');
      };
    
    const renderItem = (product) => {
       
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
                  <Icon
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

return (
  <FlatList
    data={PRODUCT}
    keyExtractor={(item) => item.name}
    renderItem={renderItem}
    contentContainerStyle={{ padding: 16 }}
  />
);
}
export default OurMaidScreen;

const styles = StyleSheet.create({
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
    imageContainer:{
      margin:12,
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      height:200,
    },
    productImage: {
      aspectRatio: 1,
      margin:8,
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
  });
  