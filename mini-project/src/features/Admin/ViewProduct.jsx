import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ViewProduct = () => {
    let [products,setProducts]=useState([])
    useEffect(()=>{
        getData()
    },[])


    let getData=async()=>{
        try{
           let res = await axios.get("https://660271eb9d7276a755533dd5.mockapi.io/products")
           setProducts(res.data)
        }
        catch(err){toast.error(err.message)}
    }

    let handleDelete=async(id)=>{
        if(window.confirm("are you sure you want to delete??")){
            try{
                await axios.delete(`https://660271eb9d7276a755533dd5.mockapi.io/products/${id}`)
                toast.success("product deleted")
                getData()
            }
            catch(err){toast.error(err.message)}
          
        }
    }
  return (
    <Card>
    <Card.Header><h1>View Products
        <Link to='/admin/add' type="button" class="btn btn-primary btn-lg float-end" >
            Add Product</Link>              
        </h1></Card.Header>
        <Card.Body>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Name</th>
          <th>Image</th><th>Price</th>
            <th>Stock</th> <th>Action</th>        </tr>
      </thead>
      <tbody>
        {products.length==0 && <tr><td colSpan={7}>No product found</td></tr>}
        {products.map((product,i)=>
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td><img src={product.image} height="50px" width={50}/></td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td> <button type="button" class="btn btn-success me-2"><FaPenAlt/></button>
                 <button type="button" class="btn btn-danger me-2" 
                 onClick={()=>handleDelete(product.id)}><FaTrashAlt/></button>
             </td>
            </tr>
        )}      
        </tbody>
    </Table>
        </Card.Body>
</Card>
  )
}

export default ViewProduct
