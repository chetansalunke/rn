import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealDetailsScreen from "./MealDetailScreen";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.catgoryId;


  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  // useEffect(()=>{
  //   const categoryTitle = CATEGORIES.find((category)=> category.id===catId).title;
  //   navigation.setOptions({
  //     title:categoryTitle,
  //   });

  // },[navigation,catId]);
  // dependent array

  const displayMeals = MEALS.filter((mealItem) => {
    // we have to retue true of the item is belong to the category we receive (when the user select )

    // console.log("the Indexxx"+mealItem.categoryIds.indexOf(catId)>=0);
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // dataItem is the convential name to the paramenter
  

 return <MealsList items={displayMeals} />
}

export default MealsOverviewScreen;

