
import React, { useContext, useEffect } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { DataContext } from '../DataProvider'
import { CartShow } from './hiddenlinks'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  const context=useContext(DataContext)
  let handleCart=()=>{  
      context.addToCart(product)
  }
  // useEffect(()=>{
  //   const itemIndex=context.cart.findIndex(item=>item.id==product.id)
  //   console.log(itemIndex)
  // },[context.cart])

  return (
    <Col xs={3}>
        <Card className='mb-3'>
        <Card.Img variant="top"  src={product.image} height={200}/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}  </Card.Text>
                <Button variant="primary" onClick={handleCart}>Add to Cart</Button>
                
                {/* <Button variant="primary" as={Link}  to='/cart'>
               <FaShoppingCart size={30} style={{color:'white'}}/>
                <span class="badge rounded-pill text-bg-danger">                
                  </span ></Button> */}
            </Card.Body>
        </Card>
    </Col>
  )
}

export default ProductCard
