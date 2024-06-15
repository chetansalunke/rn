import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice'



export const store = configureStore({
    reducer:{
        // key and point to the cart reducer
        cart: cartReducer,
    },
});