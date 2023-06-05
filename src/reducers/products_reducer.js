import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    console.log(SIDEBAR_OPEN)
    return ({ ...state, isSideBarOpen: true })
  }
  if (action.type === SIDEBAR_CLOSE) {
    console.log(SIDEBAR_CLOSE)
    return ({ ...state, isSideBarOpen: false })
  }
  if (action.type === GET_PRODUCTS_BEGIN) {

    return { ...state, product_loading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {

    // const featur_prodcuts = action.payload.filter((product) => {
    //   return product.featured === true
    // })

    const featur_prodcuts = action.payload.products;
    return {
      ...state,
      product_loading: false,
      products: action.payload,
      featur_prodcuts
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      product_loading: false,
      product_error: true
    }
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, single_product_loading: true, single_product_error:false }
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    const single_product = action.payload;
    return {  ...state, 
      single_product_success: true,
       single_product_loading: false,
      single_product
    }
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, single_product_error: true, single_product_loading: false }
  }
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
