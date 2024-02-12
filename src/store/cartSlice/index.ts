import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/product.interface";

interface CartState {
  items: Product[];
  totalQty: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQty: 0,
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.items = [action.payload];
    }
  },
});

export const { addToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
