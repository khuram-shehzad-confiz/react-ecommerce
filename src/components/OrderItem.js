import React from 'react'
import styled from 'styled-components'
import { formatPrice } from "../utils/helpers";


const OrderItem=({ id, image, name, price, amount, max: stock })=> {

  return (
    <Wrapper>
     
        <img src={image} alt={name} className='item-img' />
        <span className='amount'>{amount}</span>
        <div className='item-info'>
          <h5 className="name">{name}</h5>
        </div>



  
      <bold className="price">{` ${amount} x ${formatPrice(price)} = ${formatPrice(price*amount)}`}</bold>
   
    </Wrapper>
    
  )

  }
  const Wrapper= styled.section`
  display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 15px;

// width: 90%;
// background:pink;
height: 80px;

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin-top: 10px;
margin-bottom: 10px;

.name{

}
.price{
    display: flex;
flex-direction: column;
align-items: flex-end;
padding: 0px;
gap: 24px;

// width: 56px;
height: 80px;


// /* Inside auto layout */

// flex: none;
// order: 1;
// flex-grow: 1;
}
.amount{
    // position: absolute;
    margin-left: -32px;
    margin-top: -10px;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
}
.item-img{
    width: 80px;
height: 60px;
flex: none;
order: 0;
flex-grow: 0;
border-radius: var(--radius);
}

.item-info{
// display: flex;
// flex: 1;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;
width: 300px;
height: 79px;
flex: none;
flex-grow: 0;
}
  `

export default OrderItem