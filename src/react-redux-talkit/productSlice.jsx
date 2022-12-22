import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct=createAsyncThunk("fetchProduct",async()=>{
    const res=await fetch("https://fakestoreapi.com/products");
    const data=await res.json();
    return data;
})

const ProductsSlice=createSlice({
    initialState:[],
    name:"ProductsSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
})

export default ProductsSlice.reducer;
export const {}= ProductsSlice.actions;