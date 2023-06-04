import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { checkoutSteps } from "../utils/constants";

const CheckoutSteps = ({ shipping, confirmOrder, payment }) => {
  // const steps=checkoutSteps;
  return (
    <Wrapper className="checkout-progress d-flex justify-content-center mt-5">
      {shipping ? (
        <Link to="/shipping" className="float-right">
          <div className="triangle2-active"></div>
          <div className="step active-step">Shipping</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="#!" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Shipping</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}

      {confirmOrder ? (
        <Link to="/placeorder" className="float-right">
          <div className="triangle2-active"></div>
          <div className="step active-step">Confirm Order</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="#!" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Confirm Order</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}

      {payment ? (
        <Link to="/payment" className="float-right">
          <div className="triangle2-active"></div>
          <div className="step active-step">Payment</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="#!" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Payment</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}
      {/* <Wrapper>
       <ul className='nav-links'>
        {
          checkoutSteps.map((step)=>{
            const { id, text, url } = step
            return <li key={id}>
              <Link to={url} >{text}</Link>
            </li>
          })
        }
      </ul> 
    </Wrapper>*/}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  // .form-control:disabled,
  // .form-control[readonly] {
  //   background-color: white;
  // }

  // .checkout-progress {
  //   display: block;
  //   clear: both;
  //   margin: 20px auto;
  //   width: auto;
  //   font-family: sans-serif;
  //   overflow: auto;
  // }
  // .checkout-progress div {
  //   box-sizing: border-box;
  // }

 
  .triangle2-active {
    width: 0;
    float: left;
    border-top: 20px solid var(--clr-primary-10);;
    border-left: 15px solid #fff;
    border-bottom: 20px solid var(--clr-primary-10);;
    margin-right: -1px;
  }

  .step {
    margin: 0;
    border: 0;
    letter-spacing: 1px;
    line-height: 30px;
    padding: 5px 10px 5px 15px;
    color: grey;
    text-decoration: none;
    cursor: default;
    font-weight: bold;
    float: left;
    height: auto;
  }
  .incomplete {
    background: #eeeeee;
  }

  .active-step {
    background: var(--clr-primary-5);
    color: #fff;
  }

  .triangle-active {
    float: left;
    width: 0;
    border-top: 20px solid transparent;
    border-left: 15px solid var(--clr-primary-5);
    border-bottom: 20px solid transparent;
    margin-left: -1px;
  }

  .triangle2-active {
    width: 0;
    float: left;
    border-top: 20px solid var(--clr-primary-5);
    border-left: 15px solid #fff;
    border-bottom: 20px solid var(--clr-primary-5);
    margin-right: -1px;
  }

  .triangle-incomplete {
    float: left;
    width: 0;
    border-top: 20px solid transparent;
    border-left: 15px solid #eeeeee;
    border-bottom: 20px solid transparent;
    margin-left: -1px;
  }

  .triangle2-incomplete {
    width: 0;
    float: left;
    border-top: 20px solid #eeeeee;
    border-left: 15px solid #fff;
    border-bottom: 20px solid #eeeeee;
    margin-right: -1px;
  }
`;
// const Wrapper=styled.nav`

// .nav-links {
//   display: flex;
//   justify-content: center;
//   li {
//     margin: 0 0.5rem;
//   }
//   a {
//     color: var(--clr-grey-3);
//     font-size: 1rem;
//     text-transform: capitalize;
//     letter-spacing: var(--spacing);
//     padding: 0.5rem;
//     &:hover {
//       border-bottom: 2px solid var(--clr-primary-7);
//     }
//   }
// }
// `
export default CheckoutSteps;
