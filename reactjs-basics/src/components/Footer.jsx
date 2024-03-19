import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Footer = () => {
  return (
    <>
       <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className='mt-5'>
      <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="#features">&copy; copyright</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Footer
