import { createSlice } from "@reduxjs/toolkit";

const MyproductSlice = createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addMyProducts(state,action){
            state.push(action.payload)
        },
        increaseQty(state,action){
            let myindex = -1;
            state.map((item,index)=>{
                if(item.product_id == action.payload ){
                    myindex = index;
                }
                else{
                    state[myindex].qty = state[myindex].qty+1;
                }
            })
        }

    },

});

export const {addMyProducts}  = MyproductSlice.actions;
export default MyproductSlice.reducer;