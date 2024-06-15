import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
// import { PRODUCT } from "../data/dummy-data";
const maids = [
  {
    "id": "1",
    "name": "Aanya Sharma",
    "age": 28,
    "address": "123 Main Street, Cityville",
    "category": "Cleaning",
    "experience": "5 years",
    "image_url": "https://img.freepik.com/free-vector/woman-silhouette-with-bun_23-2147524226.jpg?w=740&t=st=1706987652~exp=1706988252~hmac=dd072d87afd0c1d0434ac0b4e7bb975501f862b533499d3560e81a77c3ab8899"
  },
  {
    "id": "2",
    "name": "Nandini Patel",
    "age": 35,
    "address": "456 Oak Avenue, Townsville",
    "category": "Cooking",
    "experience": "8 years",
    "image_url": "https://img.freepik.com/free-vector/woman-silhouette-with-bun_23-2147524226.jpg?w=740&t=st=1706987652~exp=1706988252~hmac=dd072d87afd0c1d0434ac0b4e7bb975501f862b533499d3560e81a77c3ab8899"
  },
  {
    "id": "3",
    "name": "Anika Singh",
    "age": 30,
    "address": "789 Pine Lane, Villagetown",
    "category": "Babysitting",
    "experience": "6 years",
    "image_url": "https://img.freepik.com/free-vector/woman-silhouette-with-bun_23-2147524226.jpg?w=740&t=st=1706987652~exp=1706988252~hmac=dd072d87afd0c1d0434ac0b4e7bb975501f862b533499d3560e81a77c3ab8899"
  },
  {
    "id": "4",
    "name": "Riya Chatterjee",
    "age": 28,
    "address": "123 Main Street, Cityville",
    "category": "Cleaning",
    "experience": "5 years",
    "image_url": "https://img.freepik.com/free-vector/woman-silhouette-with-bun_23-2147524226.jpg?w=740&t=st=1706987652~exp=1706988252~hmac=dd072d87afd0c1d0434ac0b4e7bb975501f862b533499d3560e81a77c3ab8899"
  },
  {
    "id": "5",
    "name": "Saanvi Reddy",
    "age": 35,
    "address": "456 Oak Avenue, Townsville",
    "category": "Cooking",
    "experience": "8 years",
    "image_url": "https://img.freepik.com/free-vector/woman-silhouette-with-bun_23-2147524226.jpg?w=740&t=st=1706987652~exp=1706988252~hmac=dd072d87afd0c1d0434ac0b4e7bb975501f862b533499d3560e81a77c3ab8899"
  },
  {
    "id": "6",
    "name": "Ishita Desai",
    "age": 30,
    "address": "789 Pine Lane, Villagetown",
    "category": "Babysitting",
    "experience": "6 years",
    "image_url": "https://img.freepik.com/free-vector/woman-silhouette-with-bun_23-2147524226.jpg?w=740&t=st=1706987652~exp=1706988252~hmac=dd072d87afd0c1d0434ac0b4e7bb975501f862b533499d3560e81a77c3ab8899"
  },
  {
    "id": "7",
    "name": "Arya Gupta",
    "age": 28,
    "address": "123 Main Street, Cityville",
    "category": "Cleaning",
    "experience": "5 years",
    "image_url": "https://img.freepik.com/free-vector/woman-silhouette-with-bun_23-2147524226.jpg?w=740&t=st=1706987652~exp=1706988252~hmac=dd072d87afd0c1d0434ac0b4e7bb975501f862b533499d3560e81a77c3ab8899"
  },
  {
    "id": "8",
    "name": "Meher Khanna",
    "age": 35,
    "address": "456 Oak Avenue, Townsville",
    "category": "Cooking",
    "experience": "8 years",
    "image_url": "https://img.freepik.com/free-vector/woman-silhouette-with-bun_23-2147524226.jpg?w=740&t=st=1706987652~exp=1706988252~hmac=dd072d87afd0c1d0434ac0b4e7bb975501f862b533499d3560e81a77c3ab8899"
  },
  {
    "id": "9",
    "name": "Kavya Verma",
    "age": 30,
    "address": "789 Pine Lane, Villagetown",
    "category": "Babysitting",
    "experience": "6 years",
    "image_url": "https://img.freepik.com/free-vector/woman-silhouette-with-bun_23-2147524226.jpg?w=740&t=st=1706987652~exp=1706988252~hmac=dd072d87afd0c1d0434ac0b4e7bb975501f862b533499d3560e81a77c3ab8899"
  }
];

const OurMaidScreen = () => {
const navigation =   useNavigation();
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  const onPressHandler = () => {
    navigation.navigate('Booking')
  };

  const renderItem = (maid) => {
    return (
      <TouchableOpacity style={styles.productContainer} onPress={onPressHandler}>
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: maid.item.image_url }} style={styles.productImage} />
            <Text style={styles.additionalInfo}>{`Exp: ${maid.item.experience}`}</Text>
          </View>

          <View style={styles.productInfo}>
            <Text style={styles.productName}>{maid.item.name}</Text>
            <Text style={styles.additionalInfo}>{`Category: ${maid.item.category}`}</Text>
            <Text style={styles.additionalInfo}>{`Age: ${maid.item.age}`}</Text>
            <Text style={styles.additionalInfo}>{`Address: ${maid.item.address}`}</Text>
            
            {/* Updated the line above to use maid.item.experience */}
          </View>
        </View>

        <View style={styles.overlay}>
          <TouchableOpacity onPress={handleLikePress} style={styles.likeButton}>
            <Icon name={isLiked ? "heart" : "heart-o"} size={20} color={isLiked ? "#e74c3c" : "#fff"} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={maids}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 6,
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
  rowContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    margin: 8,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 100,
  },
  productImage: {
    aspectRatio: 1,
    margin: 8,
    width: "50%",
    borderRadius:50,
    height: 80,
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
    flex: 1,
    padding:6,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  additionalInfo: {
    fontSize: 14,
    color: "#777",
    marginBottom: 4,
  },
});

export default OurMaidScreen;
