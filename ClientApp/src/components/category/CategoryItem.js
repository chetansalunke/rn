import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CategoryItem = ({ name, image_url, id }) => {
  const navigation = useNavigation();

  const categoryPressHandler = () => {
    navigation.navigate('Our Products', { cat_id: id });
  };

  return (
    <Pressable
      style={styles.container}
      onPress={categoryPressHandler}
    >
      <View style={styles.imageContainer}>
        {image_url && <Image source={{ uri: image_url }} style={styles.image} />}
      </View>
      <Text style={styles.categoryName}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5,
    width: windowWidth / 3.5, // Adjusted width for three items per row
    aspectRatio: 1, // Maintain aspect ratio
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center', // Center the text horizontally
    flexWrap: 'wrap', // Allow long words to wrap onto the next line
  },
});

export default CategoryItem;
