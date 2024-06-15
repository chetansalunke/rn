import { createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const incdecSlice = createSlice({
    name:'qtyIncDec',
    initialState: {
        quantity:1,
    },
    reducers:{
        incrementQuantity: (state)=>{
            state.quantity += 1;
        },
         decrementQuantity:(state)=>{
            if(state.quantity > 1 ){
                state.quantity -= 1;
            }
         },
         setQuantity:(state,action)=>{
            state.quantity = action.payload;
         }  
    }
});

export const {incrementQuantity,decrementQuantity,setQuantity} = incdecSlice.actions; 
export default incdecSlice.reducer;