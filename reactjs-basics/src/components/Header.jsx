import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
            <img src={require('../assets/images/d.jpg')} width={40} height={40}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'   style={({ isActive}) => {
                return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "white"
                };
            }}>Home</Nav.Link>
            <Nav.Link as={NavLink} to='hookform' className={({ isActive }) =>
                isActive ? "active bold" : ""}>Hook Form</Nav.Link>
            <NavDropdown title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">New Arrivals</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/products'>
                    Sale Products
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to='/counter'>Lifting the state up</Nav.Link>
            <Nav.Link as={Link} to='/classcomp'>class component</Nav.Link>
            <Nav.Link as={Link} to='/ref'>uncontrolled component</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link  href="#memes"> Register  </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
