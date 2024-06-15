import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { item: [] },
  reducers: {
    addtoCart: (state, action) => {
      const existingIndex = state.item.findIndex(
        (item) => item.product_id === action.payload.product_id
      );

      if (existingIndex !== -1) {
        // If the item is already in the cart, update the quantity
        state.item[existingIndex].qty += 1;
      } else {
        // If not, add the item to the cart
        state.item.push({
          product_id: action.payload.product_id,
          name: action.payload.name,
          details: action.payload.details,
          price: action.payload.price,
          image_url: action.payload.image_url,
          qty: 1, // Set initial quantity to 1 for a new item
        });
      }
    },
    removeFromCart: (state, action) => {
      const indexToRemove = state.item.findIndex(
        (item) => item.product_id === action.payload.product_id
      );

      if (indexToRemove !== -1) {
        // If the item is found, decrement the quantity
        state.item[indexToRemove].qty -= 1;

        // If quantity becomes 0, remove the item from the cart
        if (state.item[indexToRemove].qty === 0) {
          state.item.splice(indexToRemove, 1);
        }
      }
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.item.find(
        (item) => item.product_id == action.product_id
      );
     
      itemInCart.qty++;
      console.log("Item in the cart");
      console.log(itemInCart);
    },
    decrementQuantity: (state, action) => {
      // we have to find the items in the cart
      const itemInCart = state.item.find(
        (item) => item.product_id == action.payload.product_id
      );
     
      
      if (itemInCart.qty == 1) {
        const removeFromCart = state.item.filter(
          (item) => item.product_id !== action.payload.product_id
        );
        state.cart = removeFromCart;
      } else {
        itemInCart.qty--;
      }
    },
  },
});

export const {
  addtoCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
