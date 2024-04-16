import React, {  useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import {FaArrowAltCircleLeft, FaHome, FaList, FaLock, FaPenAlt} from 'react-icons/fa'
import { Image } from 'react-bootstrap';
import {  CartShow, ShowOnLogin, ShowOnLogout } from './hiddenlinks';
import Logout from './Logout';
import { auth, db } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, getDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_USER, LOGOUT_USER, selectIsLoggedIn, selectUserName, selectUserRole } from '../redux/authSlice';
const Header = () => {
let username=useSelector(selectUserName)
let isLoggedIn=useSelector(selectIsLoggedIn)
let role=useSelector(selectUserRole)
  const dispatch=useDispatch()
    useEffect(()=>{
      onAuthStateChanged(auth, async(user) => {
        if (user) {
            const uid = user.uid;
            try{
              const docRef=doc(db,"users",uid)
              const docSnap=await getDoc(docRef)
              if(docSnap.exists()){
                // console.log(docSnap.data())
                let obj={name:docSnap.data().username
                        ,email:docSnap.data().email,
                        role:docSnap.data().role,
                        id:uid}
                dispatch(LOGIN_USER(obj))
              }              
            }
            catch(error){console.log(error.message)}
        } 
        else {
          dispatch(LOGOUT_USER())
          }
      });
    },[auth])

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
        {(isLoggedIn && role=='0') ?
        <Nav className='me-auto'>
            <button
              type="button"
              class="btn btn-danger btn-lg"
            >
              Admin Panel
            </button>
            
        </Nav> :''}
        <Nav>
            <Nav.Link><CartShow/>
            </Nav.Link>
            <ShowOnLogout>
                  <Nav.Link as={Link} to='/login'><FaLock/> Login</Nav.Link>
                  <Nav.Link as={Link} to='/register'><FaPenAlt/> Register</Nav.Link>
            </ShowOnLogout>
            <ShowOnLogin>
                <Nav.Link as={Link} to='/'>Welcome {username}</Nav.Link>
                <Nav.Link><Logout/></Nav.Link>
            </ShowOnLogin>
         </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Header
