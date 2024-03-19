import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'

const CounterInner = ({increaseCount}) =>
   { let [val,setVal]=useState(1)
  return (
   <>
   <h1>Child Comp.</h1>
   <Row>
        <Col xs={2}>
            <Button type="button"  className='me-2'
            onClick={()=>increaseCount(1)}>
            Increase Count</Button>
        </Col>
        <Col xs={4}>
            <InputGroup>
                <Form.Control value={val} onChange={(e)=>setVal(e.target.value)}></Form.Control>
                <Button type="button" 
            onClick={()=>increaseCount(parseInt(val))}> 
                Increase Count by {val}</Button>
            </InputGroup>
        </Col>
   </Row>
    


   
       
   </>
  )
}

export default CounterInner
