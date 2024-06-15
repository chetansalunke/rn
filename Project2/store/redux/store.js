import { configureStore } from "@reduxjs/toolkit";
import favoriateReducer from "./favorites";
export const store  = configureStore({
    reducer:{

        favoriateMeals: favoriateReducer

    }
});