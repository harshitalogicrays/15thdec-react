import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import { Container } from 'react-bootstrap'
import axios from 'axios'

const Products = () => {
  let [products,setProducts]=useState([])
  useEffect(()=>{
      getData()
  },[])


  let getData=async()=>{
      try{
         let res = await axios.get("https://660271eb9d7276a755533dd5.mockapi.io/products")
         setProducts(res.data)
      }
      catch(err){toast.error(err.message)}
  }
  return (
    <>
       <Container className="mt-5">
        <ProductsList products={products}/>
        </Container>
    </>
  )
}

export default Products
