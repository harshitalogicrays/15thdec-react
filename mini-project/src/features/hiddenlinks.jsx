import { FaArrowAltCircleLeft, FaHome, FaList, FaLock, FaPenAlt, FaShoppingCart } from "react-icons/fa"
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";

export const ShowOnLogin=({children})=>{
    if(sessionStorage.getItem("logindata")!=null){
        let obj=JSON.parse(sessionStorage.getItem("logindata"))
        if(obj.isLoggedIn){
            return children
        }
        else return null   
    
    }
}

export const ShowOnLogout=({children})=>{
    if(sessionStorage.getItem("logindata")==null)
    return children
    else 
        return null
      
}


export const AdminLayout=({children})=>{
    let [username,setUsername]=useState("")
  const navigate=useNavigate()
    let handleLogout=()=>{
                sessionStorage.removeItem("logindata")
                toast.success("loggedOut successfully")
                navigate('/')
    }
  useEffect(()=>{
    if(sessionStorage.getItem("logindata") != null){
      let obj=JSON.parse(sessionStorage.getItem("logindata"))
      setUsername(obj.username)
    }
  },[sessionStorage.getItem("logindata")])

    return (
        <>
         <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">
        <Image src={'/src/assets/images/a.jpg'} width={40} height={40}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/admin'><FaHome/> Home</Nav.Link>
          <NavDropdown title="Product" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to='/admin/add'>Add</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to='/admin/view'> View </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
            <ShowOnLogout>
                  <Nav.Link as={Link} to='/login'><FaLock/> Login</Nav.Link>
                  <Nav.Link as={Link} to='/register'><FaPenAlt/> Register</Nav.Link>
            </ShowOnLogout>
            <ShowOnLogin>
                <Nav.Link as={Link} to='/'>Welcome {username}</Nav.Link>
                <Nav.Link onClick={handleLogout}><FaArrowAltCircleLeft/> Logout</Nav.Link>
            </ShowOnLogin>
        </Nav>
      </Navbar.Collapse>
    </Container>
        </Navbar>
         <Container className="mt-5">
                <Outlet/>
         </Container>
        </>
       )
     }
