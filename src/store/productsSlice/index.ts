import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/product.interface";
import { getProducts } from "../../apis/productsApi";

export const fetchProducts: any = createAsyncThunk(
  "products/fetch",
  getProducts
);

export interface ProductState {
  products: Product[];
  isLoading: Boolean;
  loaded: Boolean;
  error: any;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  loaded: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loaded = true;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
