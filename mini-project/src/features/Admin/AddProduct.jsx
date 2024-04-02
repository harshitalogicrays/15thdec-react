import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Dropdown, FloatingLabel, Form, FormLabel, Image, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddProduct = () => {
    const {id}=useParams()
 
    let categories= ["Toys","Cloths","Electronics",'Grocery']
    let addProductsSet={name:'',price:'',category:'',image:'',brand:'',desc:'',stock:''}
    const [product,setProduct]=useState({...addProductsSet})
    const navigate=useNavigate()

    let handleImage=(e)=>{
        // console.log(e.target.files[0])
        const reader = new FileReader();
       reader.readAsDataURL(e.target.files[0])
       reader.addEventListener("load",()=>{
        // console.log(reader.result)
            setProduct({...product,image:reader.result})
       })
    }

    //edit 
    let getDataUsingId=async()=>{
        try{
          let res = await axios.get(`https://660271eb9d7276a755533dd5.mockapi.io/products/${id}`)
          setProduct(res.data)
         }
        catch(err){toast.error(err.message)}
    }
    useEffect(()=>{
        if(id){getDataUsingId()}
        else {setProduct({...addProductsSet})}
    },[id])


    let handleSubmit=async(e)=>{
        e.preventDefault()
        // alert(JSON.stringify(product))
        if(!id){ //add
            try{
                await axios.post("https://660271eb9d7276a755533dd5.mockapi.io/products",product)
                toast.success("product added")
                navigate('/admin/view')
            }
            catch(err){
                toast.error(err.message)
            }
        }
        else { //update
            try{
                await axios.put(`https://660271eb9d7276a755533dd5.mockapi.io/products/${id}`,product)
                toast.success("product updated")
                navigate('/admin/view')
            }
            catch(err){
                toast.error(err.message)
            }
        }
        
    }
    return (
        <>
            <Card>
                <Card.Header><h1>{id ? "Edit" : "Add"} Product
                    <Link to='/admin/view' type="button" class="btn btn-danger btn-lg float-end" >
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
                                                {categories.map((c,i)=><option key={i}>{c}</option>)}
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
                                        <Form.Control type="file" name="image" onChange={handleImage} />
                                    </Form.Group>
                                    {id && <Image src={product.image} height={50} width={50} />}
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
