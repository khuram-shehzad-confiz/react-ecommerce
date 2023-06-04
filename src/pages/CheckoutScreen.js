import React from 'react'
import styled from 'styled-components'
import ShippingAddressScreen from './ShippingAddressScreen';

 const CheckoutScreen=()=> {
  return (
    <Wrapper>
      {/* <div className='section section-center page'> */}
      <ShippingAddressScreen/>
      {/* </div> */}
    </Wrapper>
  )
}
const Wrapper = styled.div`
display: grid;
  gap: 4rem;
  margin-top: 2rem;`

export default CheckoutScreen;