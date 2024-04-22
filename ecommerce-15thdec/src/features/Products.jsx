import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import { Container } from 'react-bootstrap'

const Products = () => {
  let [products,setProducts]=useState([])
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
