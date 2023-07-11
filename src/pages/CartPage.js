import React, { useEffect } from "react";
import styled from "styled-components";
// import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartContent from "../components/CartContent";
import PageHero from "../components/PageHero";
import { CART_ITEMS } from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { calculateReduxCartTotal } from "../redux/slices/CartSlice";

const CartPage = () => {
  // const { cart } = useCartContext();

  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  console.log("cart length: " + cart.length);

  useEffect(() => {
    localStorage.setItem(CART_ITEMS, JSON.stringify(cart));
    dispatch(calculateReduxCartTotal());
  }, [cart]);
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your Cart is empty</h2>

          <Link to="/products" className="btn">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="section section-center">
      <PageHero title="Cart" />
      <CartContent />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
