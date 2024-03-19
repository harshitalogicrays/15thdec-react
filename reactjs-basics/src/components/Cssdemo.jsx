import React from 'react'
import cssmodule from './RegisterForm.module.css'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { FaHome, FaSearch } from "react-icons/fa";
import {MyButton, MyTextBox} from './MyButton';
const Cssdemo = () => {
    let styles={
        color:'blue',border:'2px solid red'
    }

  return (
    <>
       {/* <h1 style={{color:'red',backgroundColor:'lightpink'}}>inline css</h1>
       <h2 style={styles}>css variable </h2>
       <h3 className='error'>css file</h3>
       <h4 className={cssmodule.module1}>css module</h4> */}


       <Container>
          <Row>
            <Col className='bg-info'>col1<FaHome/> </Col>
            <Col  className='bg-warning'  xs={6}>
              <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="password" placeholder='sffsfs'/>
                </Form.Group>

                <InputGroup>
                     <Form.Control type="password" placeholder='sffsfs'/>
                     <Button variant="danger"><FaSearch /></Button>
                </InputGroup>
              </Form>
            </Col>
            <Col  className='bg-success'>
                <MyButton>Click Me</MyButton><br/>
                <MyTextBox type="number"></MyTextBox>
            </Col>
          </Row>
       </Container>
    </>
  )
}

export default Cssdemo
