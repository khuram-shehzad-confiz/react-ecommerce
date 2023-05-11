import React from 'react'
import styled from 'styled-components'
// import { Filters, ProductList, Sort, PageHero, FeaturedProducts } from '../components'
import FeaturedProducts from '../components/FeaturedProducts'
const ProductsPage = () => {
  return <FeaturedProducts/>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
