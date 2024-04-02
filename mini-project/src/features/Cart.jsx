import React, { useContext } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { DataContext } from '../DataProvider'
import { FaTrashAlt } from 'react-icons/fa'

const Cart = () => {
  const context=useContext(DataContext)
  let {cart,total}=context
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
        {cart.length ==0 &&   <tr><td colspan={8}>No Item in Cart</td></tr>}
        {cart.map((c,i)=>
          <tr key={i}>
              <td>{i+1}</td>
              <td>{c.category}</td>
              <td>{c.name}</td>
              <td><img src={c.image} height={40} width={40}/></td>
              <td>{c.price}</td>
              <td> 
                <button type="button">-</button>
                <input type="text" style={{width:'40px',textAlign:'center'}} value="1"/>
                <button type="button">+</button>
              </td>
              <td>{c.price}</td>
              <td>
                <button  type="button" class="btn btn-danger">
                  <FaTrashAlt/>Remove
                </button>
                </td>       
          </tr>
           )}
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
