import { Text, View,StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen({}) {
  //   

  const favoriteMealIds = useSelector((state)=>state.favoriateMeals.ids);


  
  const favoriteMeal = MEALS.filter((meal) =>
   favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeal.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No Favorite Meals Yet</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeal} />;
}


export default FavoritesScreen;

const styles = StyleSheet.create({

  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center', 
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
});