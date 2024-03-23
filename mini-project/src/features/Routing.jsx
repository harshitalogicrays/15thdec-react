import React from 'react'
import DefaultLayout from './DefaultLayout'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Pagenotfound from './Pagenotfound'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'

const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<DefaultLayout> <Home/> </DefaultLayout>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/products' element={<DefaultLayout> <Products/></DefaultLayout>}/>
    <Route path='*' element={<Pagenotfound/>}></Route>
  </Routes>
  )
}

export default Routing
