import React, { useState } from 'react'
import { Col, Container, Image, Row ,Form, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
    const redirect=useNavigate()
    let initialState={username:'',email:'',password:'',cpassword:'',role:'1'}
    const [user,setUser]=useState({...initialState})
    const [isLoading,setIsLoading]=useState(false)
       let handleSubmit=async(e)=>{
        e.preventDefault()
        setIsLoading(true)
         }

  return (
    <Container className='mt-5 shadow p-3'>
        {isLoading && <h1>Loading</h1>}
        <h1>Register Page</h1><hr/>
        <Row>
            <Col>
            <Image src='/src/assets/register.png' fluid />
            </Col>
            <Col>
                <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder='enter username' name="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder='enter email' name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
                    </Form.Group>
                    
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  name="password" placeholder='enter password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="cpassword" placeholder='enter confirm password' value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}/>
                    </Form.Group>
                    <Button variant='primary' type="submit">Register</Button>
                </Form>
                <p>Already an account?? <Link to='/login'>Login</Link></p>
            </Col>
        </Row>
    </Container>
  )
}

export default Register
