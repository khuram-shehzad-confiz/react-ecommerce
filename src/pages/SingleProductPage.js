import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'

import Loading from '../components/Loading'
import Error from '../components/Error'
import ProductImages from '../components/ProductImages'
import AddToCart from '../components/AddToCart'
import PageHero from '../components/PageHero'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getSingleProduct } from '../redux/slices/ProductSlice'
const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(useParams())
  // console.log(useHistory())
  // const { fetchSingleProduct,
  //   single_product_error: error,
  //   single_product_loading: loading,
  //   single_product: product } = useProductsContext()

    const {
      single_product_error : error,
      single_product_loading: loading,
      single_product:product}=useSelector((store)=>store.product)

      const dispatch=useDispatch()

  useEffect(() => {
    // fetchSingleProduct(`${url}${id}`)
    // console.log("idid"+id)
    dispatch(getSingleProduct(id))
  }, [id])

  if (loading || product == null) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }


  console.log("product")
  console.log(product)
  const { id: SKU, title: name, images, stock, brand: company, price, description } = product
  return (

    <Wrapper>
      <PageHero title={name} product />

      <div className='section section-center page'>
        <Link to='/products' className='btn'>Back to products</Link>
      

      <div className='product-center'>
        <ProductImages images={images}/>
      <section className='content'>
          <h2>{name}</h2>
          <p className='price'>{formatPrice(price)}</p>
          <p className='desc'>{description}</p>
          <p className='info'><span>Available:</span> {stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          <p className='info'><span>SKU:</span> {SKU}</p>
          <p className='info'><span>Brand:</span> {company}</p>

          {stock>0 && <AddToCart product={product}/>}

        </section>
      </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
