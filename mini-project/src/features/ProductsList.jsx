import React from 'react'
import { Row, Table } from 'react-bootstrap'
import ProductCard from './ProductCard'
import Loader from './Loader'

const ProductsList = ({products}) => {
  return (
   <>
      {products.length==0 && <Loader/>}
      <Row>
         {products.map((product,i)=><ProductCard key={[product.id]}  product={product}/>)}
      </Row>

   
   </>
  )
}

export default ProductsList
