import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
// import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

import { useDispatch } from "react-redux";
import { addToReduxCart } from "../redux/slices/CartSlice";

const AddToCart = ({ product }) => {
  const { id, stock } = product;

  // const{addToCart}=useCartContext()
  const dispatch= useDispatch();
  const [amount, setAmount] = useState(1);

  const increment = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    });
  };
  const decrement = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    });
   };
  return (
    <Wrapper>
      <AmountButtons
        amount={amount}
        increment={increment}
        decrement={decrement}
      />

      {/* <Link to="/cart" className="btn" onClick={()=>addToCart(id,amount, product)}> */}
      <Link to="/cart" className="btn" onClick={()=>{
// addToCart(id,amount, product)
dispatch(addToReduxCart({id,amount, product}))
      }}>

        Add to Cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
