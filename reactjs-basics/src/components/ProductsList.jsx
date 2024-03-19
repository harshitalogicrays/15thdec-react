import React from 'react'
import ProductItem from './ProductItem'
import { Row, Table } from 'react-bootstrap'
import ProductCard from './ProductCard'

const ProductsList = ({products}) => {
  return (
   <>
      {products.length==0 && <h1>No product found</h1>}
      <Row>
         {products.map((product,i)=><ProductCard key={[product.id]}  product={product}/>)}
      </Row>

    {/* <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      {products.length==0 && 
      <tr><td colSpan={5}>No product Found</td></tr>}
        {products.map((product,i)=> 
            <ProductItem key={product.id} product={product}/>
         )}
      </tbody>
    </Table> */}
    
   </>
  )
}

export default ProductsList
