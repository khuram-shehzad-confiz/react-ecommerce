import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  SAVE_SHIPPING_ADDRESS,
} from "../actions";
import { SHIPPING_ADDRESS } from "../utils/constants";

const getLocalStorageCart = () => {
  let cartItems = localStorage.getItem("cart");
  if (cartItems) {
    return JSON.parse(cartItems);
  } else {
    return [];
  }
};

const getLocalStorageAddress=()=>{
  return localStorage.getItem(SHIPPING_ADDRESS)?
  JSON.parse(localStorage.getItem(SHIPPING_ADDRESS)):
  {}
}
const initialState = {
  cart: getLocalStorageCart(),
  total_item: 0,
  total_amount: 0,
  shipping_fee: 22,
  shipping_address:getLocalStorageAddress()
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //add to cart
  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
  };

  //remove to cart
  const removeToCart = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
  };
  //toggle amount
  const toggleCart = (id, value) => {
    console.log(id + "\t" + value);

    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  //clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };


  //save shipping address
  const saveShippingAddress=(address)=>{
    // localStorage.setItem(SHIPPING_ADDRESS, JSON.stringify(address))
    dispatch({type:SAVE_SHIPPING_ADDRESS, payload:address})
  }
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeToCart, toggleCart, clearCart, saveShippingAddress }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
