import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import {FaArrowAltCircleLeft, FaHome, FaList, FaLock, FaPenAlt, FaShoppingCart} from 'react-icons/fa'
import { Image } from 'react-bootstrap';
import {  CartShow, ShowOnLogin, ShowOnLogout } from './hiddenlinks';
import { toast } from 'react-toastify';
import { DataContext } from '../DataProvider';
const Header = () => {

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
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">
        <Image src={'/src/assets/images/a.jpg'} width={40} height={40}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'><FaHome/> Home</Nav.Link>
          <Nav.Link as={Link} to='/products'><FaList/> Products</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
            <Nav.Link><CartShow/>
            </Nav.Link>
            <ShowOnLogout>
                  <Nav.Link as={Link} to='/login'><FaLock/> Login</Nav.Link>
                  <Nav.Link as={Link} to='/register'><FaPenAlt/> Register</Nav.Link>
            </ShowOnLogout>
            <ShowOnLogin>
                {/* <Nav.Link as={Link} to='/'>{username.length==0 ? "Welcome" :<> {username} </> }</Nav.Link> */}
                <Nav.Link as={Link} to='/'>Welcome {username}</Nav.Link>
                <Nav.Link onClick={handleLogout}><FaArrowAltCircleLeft/> Logout</Nav.Link>
            </ShowOnLogin>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Header
