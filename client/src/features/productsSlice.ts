import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product{
    id:number;
    name: string;
    description: string;
    price: number;
}

export interface CounterState {
  productList: Product[] | Array<never>
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  productList: [],
  status: 'idle',
};

export const fetchProducts = createAsyncThunk("productSlice/fetchProducts", async () => {
    let res = await axios.get("./products.json")
    let {data} = res;
    return data;
})


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state,action) => {
        state.status = "loading"
    }).addCase(fetchProducts.rejected, (state,action) => {
        state.status = "failed"
    }).addCase(fetchProducts.fulfilled, (state,action) => {
        state.status = "idle"
        state.productList = action.payload
    })
  }
});

export default productsSlice.reducer;
