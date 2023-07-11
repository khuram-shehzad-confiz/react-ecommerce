import React , {useEffect} from "react";
import CartTotals from "./CartTotals";
import style from "styled-components";
import CartContent from "./CartContent";
// import { useCartContext } from "../context/cart_context";
import CartItem from "./CartItem";
import OrderItem2 from "./OrderItem2";


import { useSelector, useDispatch } from "react-redux";
import { CART_ITEMS } from "../utils/constants";
import { calculateReduxCartTotal } from "../redux/slices/CartSlice";

const OrderDeatails = () => {
    // const { cart, clearCart } = useCartContext();
 
    const dispatch=useDispatch()

    const { cart } = useSelector((store) => store.cart);
    useEffect(() => {
      // localStorage.setItem(CART_ITEMS, JSON.stringify(cart));
      dispatch(calculateReduxCartTotal());
    }, [cart]);
  return (
    <Wrapper>
        
        <hr/>
        {cart.map((item) => {
        return <OrderItem2 key={item.id} {...item} />;
      })}

    </Wrapper>
  );
};

const Wrapper = style.div`
align-self: baseline;
box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
`;

const Title = style.h4`
border: 1px solid var(--clr-grey-8);
    margin-bottom: -3rem;
    border-radius: var(--radius);
    padding: 1.5rem 3rem;

`;

export default OrderDeatails;
