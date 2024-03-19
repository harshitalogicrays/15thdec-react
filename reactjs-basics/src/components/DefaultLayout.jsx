import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'

const DefaultLayout = ({children}) => {
  return (
    <>
        <Header/>
        <Container className='mt-5'>
            {children}
        </Container>
        <Footer/>
    </>
  )
}

export default DefaultLayout
