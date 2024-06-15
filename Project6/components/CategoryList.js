import CategoryItem from "./CategoryItem";
import { View, Text, StyleSheet, FlatList } from "react-native";
const CategoryList = ({ data }) => {

  
  const renderItem = ({ item }) => (
    <CategoryItem name={item.title} image_url={item.imageUrl} id={item.id}  />
  );

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // Assuming id is unique, convert it to a string
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
