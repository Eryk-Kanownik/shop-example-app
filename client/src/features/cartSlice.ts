import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface Product{
    id:number;
    name: string;
    description: string;
    price: number;
}

export interface CartItem{
    product: Product;
    count: number;
}

export interface CounterState {
  cartItems: CartItem[]
  itemCount: number
  value: number
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  cartItems: [],
  itemCount: 0,
  value: 0,
  status: 'idle',
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      let product = action.payload;
      let productAlreadyExistInCart = state.cartItems.filter(item => item.product.id === product.id).length === 0 ? false : true
      if(productAlreadyExistInCart){
        let id = state.cartItems.map(item => item.product.id).indexOf(product.id)
        state.cartItems[id].count = state.cartItems[id].count + 1;
        let sum = 0;
        state.cartItems.map(item => sum + item.count)
        state.itemCount = sum
      } else {
        let obj = {
          product,
          count: 1
        }
        state.cartItems = [...state.cartItems, obj]
      }
      state.itemCount = state.cartItems.reduce((acc, item) => {
        return acc + item.count;
      }, 0)

      state.value = state.cartItems.reduce((acc, item) => {
        let multiply = item.product.price * item.count
        return acc + multiply;
      }, 0)
    }, 

    deleteProductFromCart: (state, action) => {

    }
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
