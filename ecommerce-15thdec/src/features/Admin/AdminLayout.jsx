import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'

const AdminLayout = () => {
  return (
    <>
        <AdminNavbar/>
        <Row>
            <Col xs={2}>
                <Sidebar/>
            </Col>
            <Col xs={10}>
              <Container className='mt-5 col-11'>
                 <Outlet/>
              </Container>
            </Col>
        </Row>
       
    </>
  )
}

export default AdminLayout
