import { createContext, useState } from "react";

export const FavoritesContext = createContext({

    ids:[],
    addFavorite:(id)=>{},
    removeFunction:(id)=>{},
});

function FavoritesContextProvider({children}){
const [favoriteMealsIds,setFavoriteMealIds]=useState([]);

function addFavorite(id){
    setFavoriteMealIds((currentFavIds)=>[...currentFavIds,id]);

}

function removeFavorite(id){
    setFavoriteMealIds((currentFavIds)=>currentFavIds.filter((mealId)=>mealId !== id));
}

const value = {
    ids: favoriteMealsIds,
    addFavorite:addFavorite,
    removeFavorite:removeFavorite,
}

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;
