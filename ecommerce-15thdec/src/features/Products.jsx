import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import { Container } from 'react-bootstrap'
import useFetchCollection from '../custom hook/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { STORE_PRODUCTS, selectproducts } from '../redux/productSlice'

const Products = () => {
  const {data}=useFetchCollection("products")
  // console.log(data)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(STORE_PRODUCTS(data))
  },[data])
  const products=useSelector(selectproducts)
  return (
    <>
       <Container className="mt-5">
        <h1>Products Page</h1><hr/>
        <ProductsList products={products}/>
        </Container>
    </>
  )
}

export default Products
