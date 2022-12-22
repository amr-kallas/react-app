import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        add:(state,action)=>{
            const copy=state.find((product)=>product.id==action.payload.id)
            if(copy){
                console.log(copy);
                copy.quantity+=1;
            }else{
                const productCopy={...action.payload,quantity:1};
                state.push(productCopy);
                console.log(productCopy);
            }

        },
        deleteCart:(state,action)=>{
           return state.filter((product)=>{
                if(product.id != action.payload.id){
                    return product
                }
            })
        },
        clear:(state,action)=>{
            return state=[]
        },
    }
})
export const {add,clear,deleteCart}=cartSlice.actions
export default cartSlice.reducer;