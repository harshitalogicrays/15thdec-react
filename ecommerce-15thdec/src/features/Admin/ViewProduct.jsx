import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ViewProduct = () => {
    let [products,setProducts]=useState([])
   let handleDelete=async(id)=>{
     
    }
  return (
    <Card>
    <Card.Header><h1>View Products
        <Link to='/admin/addproduct' type="button" class="btn btn-primary btn-lg float-end" >
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
        {/* {products.length==0 && <tr><td colSpan={7}>No product found</td></tr>}
        {products.map((product,i)=>
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td><img src={product.image} height="50px" width={50}/></td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td> <Link to={`/admin/edit/${product.id}`} type="button" class="btn btn-success me-2"><FaPenAlt/></Link>
                 <button type="button" class="btn btn-danger me-2" 
                 onClick={()=>handleDelete(product.id)} ><FaTrashAlt/></button>
             </td>
            </tr>
        )}       */}
        </tbody>
    </Table>
        </Card.Body>
</Card>
  )
}

export default ViewProduct
