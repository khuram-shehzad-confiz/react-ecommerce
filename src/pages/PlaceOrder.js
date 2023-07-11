import React from "react";
import styled from "styled-components";
// import { useCartContext } from "../context/cart_context";
import OrderItem from "../components/OrderItem";
import OderSummary from "../components/OderSummary";
import CartTotals from "../components/CartTotals";
import OrderDeatails from "../components/OrderTotal";
import CartContent from "../components/CartContent";
import PaymentMethodPage from "./PaymentMethodPage";
import ShippingAddressScreen from "./ShippingAddressScreen";
import CheckoutSteps from "../components/CheckoutSteps";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const PlaceOrder = () => {
  // const { cart: cartItems, clearCart, total_item , shipping_address} = useCartContext();

  const { shipping_address } = useSelector((store) => store.cart);

  return (
    <div>
      <PageHero title="PlaceOrder" />
      <CheckoutSteps shipping confirmOrder />

      <Wrapper className="section section-center page">
        <section>
          {/* <section className='content'> */}

          <h4>SHIPPING INFO</h4>

          <p className="shipping">
            <span>Phone: </span>

            <label>{`${shipping_address.ph}`}</label>
          </p>

          <div>
            <p className="shipping">
              <span>Address:</span>
              <label>{`${shipping_address.addressLine1}${shipping_address.addressLine2} , 
${shipping_address.city}, ${shipping_address.zipCode}, ${shipping_address.state}
`}</label>
            </p>
          </div>

          <div className="line"></div>
          {/* <ShippingAddressScreen/> */}
          {/* <PaymentScreen/> */}
          {/* <PaymentMethodPage/> */}
          {/* <h4> PAYMENT METHOD</h4>
<p> Method:</p>
<div class="line"></div> */}

          {/* <OrderItems>
<h4>Order items</h4>
{cartItems.map((item) => {
          console.log(item);
          return <OrderItem key={item.id} {...item} />;
        })}
</OrderItems> */}

          {/* <CartContent/> */}
          {/* </section> */}

          {/* <section></section> */}
          {/* <OderSummary/> */}

          <OrderDeatails />

          {/* <CartTotals/> */}
        </section>

        <OrderSummary>
          <Title>ORDER SUMMARY</Title>
          <CartTotals />
          {/* 
      <button className='btn' onClick={()=>{
        // console.log(`userInfo: ${userInfo}`)
        // console.log(`shipping_fee: ${shipping_fee}`)
        console.log('oRDER has been placed')
        
      }}>Place Order</button> */}

          <Link to="/payment" className="btn">
            Payment
          </Link>
        </OrderSummary>
      </Wrapper>
    </div>
  );
};

const OrderItems = styled.div`
  margin-top: 20px;
`;

const OrderSummary = styled.section`
  align-self: baseline;
`;

const Title = styled.h4`
  border: 1px solid var(--clr-grey-8);
  margin-bottom: -3rem;
  border-radius: var(--radius);
  padding: 1.5rem 3rem;
`;
const Wrapper = styled.section`



min-height: 60vh;
display: grid;
place-items: center;

.shipping{
  text-transform: capitalize;
  // width: 300px;
  display: grid;
  grid-template-columns: 85px 1fr;
  span {
    font-weight: 700;
  }
}

.content{
    // background: #fffff5;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
    width: 125%;
    margin-left: 25%;
    padding: 20px;
}
@media (min-width: 992px) {
    // section{
    // height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    // }
}
.line {
    border-top: 1px solid black; /* Set the line properties */
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
  }
`;
export default PlaceOrder;
