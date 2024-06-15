import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Pressable, StyleSheet, Platform } from 'react-native';

const CategoryItem = ({ name, image_url,id }) => {
  // console.log("from the item");
  // console.log(name, image_url,id);

  const navigation = useNavigation();

  // item click handler
  const categoryPressHandler=()=>{
    navigation.navigate('Product',{cat_id:id});
  }
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.containerPressed,
      ]}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      onPress={categoryPressHandler}
    >
      {image_url && <Image source={{ uri: image_url }} style={styles.image} />}

      <View style={styles.overlay}>
        <Text style={styles.categoryName}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 3,
    width: '48%', // Adjusted width for a two-column layout
    aspectRatio: 1, // Maintain aspect ratio
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  containerPressed: {
    opacity: 0.6,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.27)',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CategoryItem;
