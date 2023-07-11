import React, {useEffect} from 'react'
import styled from 'styled-components'
// import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import {  useSelector } from 'react-redux';

const CartTotals = () => {
 
  // const{shipping_fee, total_amount}=useCartContext()
  // console.log(shipping_fee)
const location=window.location.pathname;
  const{userInfo}=useUserContext()



  const { shipping_fee,  total_price } =useSelector((store)=>store.cart)

  return <Wrapper>
    <div>
      <article>
      
        <h5>Subtotal:<span>{formatPrice(total_price)}</span> </h5>

        <p>Shipping Fee:<span>{formatPrice(shipping_fee)}</span> </p>

        <hr/>

        <h4>Order Total : <span>{formatPrice(shipping_fee+total_price)}</span></h4>
        <div>
   
    
    </div>
      </article>

      {
      location==='/placeorder'?
      <span/>

      // <button className='btn' onClick={()=>{
      //   console.log(`userInfo: ${userInfo}`)
      //   console.log(`shipping_fee: ${shipping_fee}`)
      //   console.log('oRDER has been placed')
        
      // }}>Place Order</button>
      :
      userInfo ? 
      <Link to='/shipping'className='btn' >Proceed to checkout</Link>
      : 
      <Link to='/login' className='btn' >Login</Link>
    }
    </div>

    
  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
