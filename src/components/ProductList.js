import React from 'react'
// import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

import { useSelector } from 'react-redux'

const ProductList = () => {

  const {filter_products}=useSelector((store)=>store.product)
console.log(filter_products.length)
  return <GridView products={filter_products}></GridView>
}

export default ProductList
