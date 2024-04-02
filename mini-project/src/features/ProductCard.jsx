
import React, { useContext } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { DataContext } from '../DataProvider'

const ProductCard = ({product}) => {
  const context=useContext(DataContext)
  let handleCart=()=>{  
      context.addToCart(product)
  }
  return (
    <Col xs={3}>
        <Card className='mb-3'>
        <Card.Img variant="top"  src={product.image} height={200}/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}  </Card.Text>
                <Button variant="primary" onClick={handleCart}>Add to Cart</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default ProductCard
