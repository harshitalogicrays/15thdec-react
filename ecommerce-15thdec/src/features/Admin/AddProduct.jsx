import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Dropdown, FloatingLabel, Form, FormLabel, Image, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import useFetchCollection from '../../custom hook/useFetchCollection'

const AddProduct = () => {
  const {data:categories}=useFetchCollection("categories")
    const {id}=useParams()
    let addProductsSet={name:'',price:'',category:'',image:'',brand:'',desc:'',stock:''}
    const [product,setProduct]=useState({...addProductsSet})
    const navigate=useNavigate()

    let handleImage=(e)=>{
        console.log(e.target.files)
    }

    //edit 

 let handleSubmit=async(e)=>{
        e.preventDefault()
        alert(JSON.stringify(product))
    }
    return (
        <>
            <Card>
                <Card.Header><h1>{id ? "Edit" : "Add"} Product
                    <Link to='/admin/viewproduct' type="button" class="btn btn-danger btn-lg float-end" >
                        View Products</Link>
                </h1></Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                            <Form.Label>Category</Form.Label>
                                            <Form.Select name="category" value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}>
                                                <option value='' disabled>select one </option>
                                                {categories.map((c,i)=><option key={i}>{c.title}</option>)}
                                            </Form.Select>
                                        </Form.Group>
                                        <Row>
                                        <Form.Group className='mb-3 col-6'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control  name="name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group className='mb-3 col-6'>
                                        <Form.Label>Brand</Form.Label>
                                        <Form.Control  name="brand" value={product.brand} onChange={(e)=>setProduct({...product,brand:e.target.value})} />
                                    </Form.Group>
                                    </Row>                                  
                                    <Row>
                                    <Form.Group className='mb-3 col-6'>
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="number"  name="price" value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})}/>
                                    </Form.Group>
                                    <Form.Group className='mb-3 col-6'>
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control  type="number" name="stock" value={product.stock} onChange={(e)=>setProduct({...product,stock:e.target.value})}/>
                                    </Form.Group>
                                    </Row>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label> file upload </Form.Label>
                                        <Form.Control type="file" name="image" onChange={handleImage} multiple/>
                                    </Form.Group>
                                 
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Description</Form.Label>
                                  
                                        <Form.Control as="textarea" name='desc' value={product.desc} onChange={(e)=>setProduct({...product,desc:e.target.value})}/>
                                    </Form.Group>
                                    <Button variant='primary' type="submit" 
                                  >{id?"Update ": "Submit"}</Button>
                                </Form>
                            </Col>
                        </Row>


                    </Container>
                    </Card.Body>
            </Card>
        </>
    )
}

export default AddProduct
