import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
import ProductReducer from "./slices/ProductSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    cart: cartReducer,
product:ProductReducer
  },
});

export default store;
