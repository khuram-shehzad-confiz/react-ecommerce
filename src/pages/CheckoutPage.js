import React from 'react'
import styled from 'styled-components'
// import { PageHero } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import ShippingAddressScreen from './ShippingAddressScreen'
import PaymentMethodPage from './PaymentMethodPage'

const CheckoutPage = () => {
  return <Wrapper>

<div className='section section-center page'>

<div className='product-center'>
  <ShippingAddressScreen/>
 

  <section className='payment' >
  <PaymentMethodPage/>
  </section>
  <PaymentMethodPage/>
  <section >
  <PaymentMethodPage/>
  </section>
</div>
  </div>

  </Wrapper>
}
const Wrapper = styled.div`
.product-center {
  display: grid;
  gap: 4rem;
  margin-top: 2rem;
}
@media (min-width: 992px) {
  .product-center {
    grid-template-columns: 1fr 1fr;
    align-items: baseline;
  }
}
`
export default CheckoutPage
