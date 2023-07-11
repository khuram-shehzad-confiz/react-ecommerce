import { createSlice } from "@reduxjs/toolkit";
import { CART_ITEMS, SHIPPING_ADDRESS } from "../../utils/constants";

const getLocalStorageCart = () => {
  let cartItems = localStorage.getItem(CART_ITEMS);
  if (cartItems) {
    return JSON.parse(cartItems);
  } else {
    return [];
  }
};

const getLocalStorageAddress = () => {
  return localStorage.getItem(SHIPPING_ADDRESS)
    ? JSON.parse(localStorage.getItem(SHIPPING_ADDRESS))
    : {};
};

const initialState = {
  cart: getLocalStorageCart(),
  total_items: 0,
  total_price: 0,
  shipping_fee: 22,
  shipping_address: getLocalStorageAddress(),
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleReduxCart: (state, { payload }) => {
      const { id, actionType } = payload;
       state.cart.map((item) => {
        if (item.id === id) {
          if (actionType === "inc" && item.amount + 1 < item.max) {
            item.amount = item.amount + 1;
          }
          if (actionType === "dec" && item.amount > 1) {
            item.amount = item.amount - 1;
          }
        } else {
          console.log("No item found for id: " + id);
        }
      });
    },

    addToReduxCart: (state, action) => {

      const { id, amount, product } = action.payload;

      const itemExists = state.cart.some((i) => i.id === id);
      console.log("tempItem" + itemExists);
      if (!itemExists) {
        const newItem = {
          id,
          name: product.name,
          amount,
          price: product.price,
          max: product.stock,
          image: product.images[0],
        };
        state.cart.push(newItem);
      }
    },

    removeToReduxCart: (state, action) => {
      const removeId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== removeId);
    },

    clearReduxCart: (state) => {
      state.cart = [];
    },

    calculateReduxCartTotal: (state) => {
      const total = state.cart.reduce(
        (total, cartItems) => {
          const { amount, price } = cartItems;
          total.total_item += amount;
          total.total_price += price * amount;

          return total;
        },
        { total_item: 0, total_price: 0 }
      );

      state.total_items = total.total_item;
      state.total_price = total.total_price;
    },
    saveReduxShippingAddress:(state, action)=>{
console.log('saveReduxShippingAddress')
      state.shipping_address=action.payload
    }
  },
});

export const {
  addToReduxCart,
  removeToReduxCart,
  clearReduxCart,
  toggleReduxCart,
  calculateReduxCartTotal,
  saveReduxShippingAddress
} = CartSlice.actions;
export default CartSlice.reducer;
