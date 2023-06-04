import React from "react";
import styled from "styled-components";

const OderSummary = () => {
  return (
    <Wrapper>
      <h4 className="title">ORDER SUMMARY</h4>
      <div className="line" />

      <OrderRow>
        <span className="left-col">Item</span>
        <span className="righ-col">$25.6</span>
      </OrderRow>
      <OrderRow>
        <span className="left-col">Shipping</span>
        <span className="righ-col">$5.0</span>
      </OrderRow>
      <OrderRow>
        <span className="left-col">Total</span>
        <span className="righ-col"> $30.6</span>
      </OrderRow>

      <Button className="btn">Place Order</Button>
    </Wrapper>
  );
};

const Button = styled.button`
  margin-top: 1rem;
`;
const OrderRow = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-bottom: 1px solid black;
  height: 50px;
  .left-col {
    width: 50%;
    align-self: center;
  }
  .righ-col {
    width: 50%;
    align-self: center;
    text-align: end;
  }
`;
const Wrapper = styled.section`
  // border: groove;
  align-self: baseline;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
  padding: 20px;
`;

export default OderSummary;
