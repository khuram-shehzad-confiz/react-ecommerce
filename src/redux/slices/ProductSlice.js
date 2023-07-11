import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://dummyjson.com/products/";

export const getProducts = createAsyncThunk("prodcut/getProducts", async () => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (err) {}
});

export const getSingleProduct = createAsyncThunk(
  "prodcut/getSingleProduct",
  async (productID) => {
    try {
      const resp = await axios.get(`${url}${productID}`);
      console.log("SIngle product with id: " + productID);
      console.log(resp.data);
      return resp.data;
    } catch (err) {}
  }
);
const initialState = {
  //   isSideBarOpen: false,
  product_loading: false,
  product_error: false,
  products: [],
  featur_prodcuts: [],
  filter_products:[],

  single_product_loading: false,
  single_product_error: false,
  single_product_success: false,
  single_product: {},
};
const ProductSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.product_loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.product_loading = false;
        state.products=action.payload
        state.featur_prodcuts = action.payload.products;
        state.filter_products =action.payload.products;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.product_loading = false;
        state.product_error = true;
        console.log(action);
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.single_product_loading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.single_product_loading = false;
        state.single_product_success = true;

        state.single_product = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.single_product_loading = false;
        state.single_product_error = true;
        console.error(action);
      });
  },
});

export default ProductSlice.reducer;
