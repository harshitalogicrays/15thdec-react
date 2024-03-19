import React, { useState } from 'react'
import './RegisterForm.css'
import Cssdemo from './Cssdemo'
import { Outlet } from 'react-router-dom'
// import Image1 from '../assets/images/register.png'
const RegisterForm = () => {
    let initialState={username:'',email:'',password:'',cpassword:''}
    let [user,setUser]=useState({...initialState})
    let [errors,setErrors]=useState({})

    let handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    let validations=(user)=>{
        let formerrors={}
        let pexp=/^[a-zA-Z]+$/
        if(user.username==''){
            formerrors.unameerr="Username is required"// let formerrrors={unameerr:"username is required"}
        }
        else if(!pexp.test(user.username)){
            formerrors.unameerr="alphabets only"
        }
        if(user.email==''){
            formerrors.emailerr="Email is required"// let formerrrors={unameerr:"username is required",emailerr:"Email is required"}
        }
        return formerrors
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        let myerrors=validations(user)//formerrors object
        if(Object.keys(myerrors).length==0){
            setErrors({})
            setUser({...initialState})
            alert(JSON.stringify(user))
        }
        else {setErrors(myerrors)}
    }
    return (
    <div className='container shadow p-3'>
        <h1>Register Form</h1><hr/>
        <div className="row">
            <div className="col-6">
                {/* <img src={Image1} className='img-fluid'/> */}
                <img src={require('../assets/images/register.png')} className='img-fluid'/>
            </div>
            <div className="col-6">
                {/* <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor='username' className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" 
                        value={user.username}
                        onChange={(e)=>setUser({...user,username:e.target.value})}/> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor='email' className="form-label">Email</label>
                        <input type="text" className="form-control" name="email"
                        value={user.email}  
                        onChange={(e)=>setUser({...user,email:e.target.value})}/> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor='username' className="form-label">Password</label>
                        <input type="password" className="form-control" name="password"
                        value={user.password}  
                        onChange={(e)=>setUser({...user,password:e.target.value})}/> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor='username' className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="cpassword" 
                        value={user.cpassword}  
                        onChange={(e)=>setUser({...user,cpassword:e.target.value})}/> 
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    
                </form> */}

<form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor='username' className="form-label">Username</label>
                        <input type="text" 
                        className={`form-control ${errors.unameerr && 'is-invalid'}`} name="username" 
                        value={user.username}
                        onChange={handleChange}/> 
                    </div>
                    {errors.unameerr && <span className='error'>{errors.unameerr}</span>}
                    <div className="mb-3">
                        <label htmlFor='email' className="form-label">Email</label>
                        <input type="text" className="form-control" name="email"
                        value={user.email}  
                        onChange={handleChange}/> 
                    </div>
                    {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}
                    <div className="mb-3">
                        <label htmlFor='username' className="form-label">Password</label>
                        <input type="password" className="form-control" name="password"
                        value={user.password}  
                        onChange={handleChange}/> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor='username' className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="cpassword" 
                        value={user.cpassword}  
                        onChange={handleChange}/> 
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <Cssdemo/> 
    </div>
  )
}

export default RegisterForm
