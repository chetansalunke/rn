import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    ids: [],
  },
  // reducer get the current state by default
  reducers: {
    addtoCart: (state, action) => {
      const existingIndex = state.ids.findIndex(
        (id) => id === action.payload.id
      );

      if (existingIndex !== -1) {
        // If the item is already in the cart, you may want to update quantity or handle it as needed
        console.log("Item is already in the cart");
      } else {
        // If not, add the item to the cart
        state.ids.push(action.payload.id);
      }
    },
    removeFromCart: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addtoCart = cartSlice.actions.addtoCart;
export const removeFromCart = cartSlice.actions.removeFromCart;

export default cartSlice.reducer;
