import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Image, Row ,Form, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    let [user,setUser]=useState({email:'',password:''})
    let redirect=useNavigate()
    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            let res= await axios.get(`https://660271eb9d7276a755533dd5.mockapi.io/users?email=${user.email}`)
            console.log(res.data[0])
            if(res.data[0].password == user.password){
                let obj={useremail:user.email,role:res.data[0].role,isLoggedIn:true}
                sessionStorage.setItem("logindata",JSON.stringify(obj))
                toast.success("loggedIn Successfully")
                redirect('/')
            }
            else toast.error("Invalid Credentials")
        }
        catch(err){
            toast.error("Invalid Credentials")
        }
    }
  return (
    <Container className='mt-5 shadow p-3'>
        <h1>Login Page</h1><hr/>
        <Row>
            <Col>
            <Image src='/src/assets/login.png' fluid />
            </Col>
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder='enter email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder='enter password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
                    </Form.Group>
                    <Button variant='primary' type="submit">Login</Button>
                </Form>
                <p>create an account?? <Link to='/register'>Signup</Link></p>
            </Col>
        </Row>
    </Container>
  )
}

export default Login
