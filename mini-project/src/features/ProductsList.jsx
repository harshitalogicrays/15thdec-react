import React from 'react'
import { Row, Table } from 'react-bootstrap'
import ProductCard from './ProductCard'

const ProductsList = ({products}) => {
  return (
   <>
      {products.length==0 && <h1>No product found</h1>}
      <Row>
         {products.map((product,i)=><ProductCard key={[product.id]}  product={product}/>)}
      </Row>

   
   </>
  )
}

export default ProductsList
