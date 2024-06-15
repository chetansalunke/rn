import CategoryItem from "./CategoryItem";
import { View, Text, StyleSheet, FlatList } from "react-native";
const CategoryList = ({ data }) => {
  console.log('From the List');
  console.log(data);

  const renderItem = ({ item }) => (
    <CategoryItem name={item.name} image_url={item.image_url} id={item.category_id}  />
  );

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name} 
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        numColumns={3} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 5, // Add horizontal padding
    paddingTop: 10,
    paddingVertical: 10, // Add padding to the content container
  },
});

export default CategoryList;
