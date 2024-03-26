import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Image, Row ,Form, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Register = () => {
    const redirect=useNavigate()
    let initialState={username:'',email:'',password:'',cpassword:'',role:'1'}
    const [user,setUser]=useState({...initialState})
    // let handleSubmit=async(e)=>{
    //     e.preventDefault()
    //     try{
    //         await axios.post("http://localhost:1000/users",{...user,id:Date.now()})
    //         toast.success("registered successfully")
    //         redirect('/')
    //     }
    //     catch(err){toast.error(err.message)}
    // }

    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await fetch("https://660271eb9d7276a755533dd5.mockapi.io/users",{
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify({...user,id:Date.now()})
            }) 
            toast.success("registered successfully")
            redirect('/login')
        }
        catch(err){toast.error(err.message)}
    }

  return (
    <Container className='mt-5 shadow p-3'>
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
