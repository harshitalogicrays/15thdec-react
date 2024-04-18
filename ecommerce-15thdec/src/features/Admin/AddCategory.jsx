import { Timestamp, addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../../firebase/config'

const AddCategory = () => {
    let [category,setCategory]=useState({title:'',desc:'',status:''})
    let [isActive,setIsActive]=useState(false)
    const navigate=useNavigate()
    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const docRef=collection(db,"categories")
            await addDoc(docRef,{...category,
                status:isActive ? "Active":"Inactive", createdAt:Timestamp.now().toMillis() })
            toast.success("category added")
            navigate('/admin/viewcategory')
        }
        catch(error){
            toast.error(error.message)
        }
    }
  return (
   <>
    <Card>
        <Card.Header>
            <h1>Add Category <Button variant='danger' size="lg" className='float-end' as={Link} to='/admin/viewcategory'>View Categories</Button></h1>
        </Card.Header>
        <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={category.title} onChange={(e)=>setCategory({...category,title:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='textarea' value={category.desc} onChange={(e)=>setCategory({...category,desc:e.target.value})}></Form.Control>
                    </Form.Group>
                    <label className='me-3 mb-3'>Status</label>
                        <Form.Check inline type="radio" checked={isActive} 
                        onClick={(e)=>setIsActive(!isActive)}/>
                        <label>{isActive ? "(Active)" :"(Inactive)"}</label>
                    <br/>
                    <Button type="submit">Submit</Button>
                </Form>
        </Card.Body>
    </Card>
   </>
  )
}

export default AddCategory
