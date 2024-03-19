import React, { useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const FormValidationusinghookform = () => {
    const {register,handleSubmit,formState:{errors},trigger,getValues}=useForm()
    let [userdata,setUserData]=useState({})
    const formdata=(user)=>{
        // alert(JSON.stringify(user))  
        setUserData(user)  }
  return ( <>
        <Form onSubmit={handleSubmit(formdata)}>
        <FloatingLabel label="username" className="mb-3" >
            <Form.Control type="text" placeholder=""  {...register('uname',{required:"username is required"})}  onBlur={()=>trigger("uname")}
                className={errors.uname ? "is-invalid" : "is-valid"}
            /></FloatingLabel>
           {errors.uname && <span className="text-danger">{errors.uname.message}</span>} 
        <FloatingLabel label="Email" className="mb-3" >
            <Form.Control type="text" placeholder="" {...register('email',{required:"email is required",
            pattern:{value:/^[\w\!\@\#\$\%\^\&\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/,message:"Invalid Email"}    })} 
            onBlur={()=>trigger("email")}/>
        </FloatingLabel>
        {errors.email && <span className="text-danger">{errors.email.message}</span>} 
     <FloatingLabel label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" {...register('password',{
            required:"password is required",minLength:{value:8,message:"min 8 char"},maxLength:{value:12,message:"max 12 char"}
        })} onBlur={()=>trigger("password")}/>
      </FloatingLabel>
      {errors.password && <span className="text-danger">{errors.password.message}</span>} 
   
      <FloatingLabel label="Confirm Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" {...register('cpassword',{required:"confirm password is required" , validate:(cpassword)=>{
                const {password}=getValues()
                return password==cpassword || "passwords not match" }} )}  
                onBlur={()=>trigger("cpassword")}/>
      </FloatingLabel>
      {errors.cpassword && <span className="text-danger">{errors.cpassword.message}</span>} <br/>
      <Button type="submit">Submit</Button> 
      </Form>       
       <h1>{Object.keys(userdata).length != 0 &&  JSON.stringify(userdata)}</h1>
   </>
  )
}

export default FormValidationusinghookform
