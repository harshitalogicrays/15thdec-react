
import React, {  useEffect } from 'react'
import { Button, Card, Col } from 'react-bootstrap'

import { CartShow } from './hiddenlinks'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <Col xs={3}>
        <Card className='mb-3'>
        <Card.Img variant="top"  src={product.image} height={200}/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}  </Card.Text>
                <Button variant="primary">Add to Cart</Button>
                
                          </Card.Body>
        </Card>
    </Col>
  )
}

export default ProductCard
