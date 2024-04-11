import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'


const Cart = () => {
   return (
   <>
   <Container className='mt-5 shadow p-2'>
        <h1>Cart Page </h1><hr/>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>Category</th>
          <th>Name</th>
          <th>Image</th><th>Price</th>
            <th>quantity</th><th>Total Price</th> <th>Action</th>        </tr>
      </thead>
      <tbody>
      
      </tbody>
    </Table>
    <Row>
      <Col xs={9}>
          <button
            type="button"
            class="btn btn-danger btn-lg" 
          >
            Empty Cart
          </button>
          
      </Col>
      <Col xs={3}>
          <h3>Total: <span className='float-end'>$</span></h3>
          <hr/>
          <div class="d-grid gap-2">
            <button
              type="button"
              name=""
              id=""
              class="btn btn-primary"
            >
              Checkout
            </button>
          </div>
          
      </Col>
    </Row>
   </Container>
    
   </>
  )
}

export default Cart
