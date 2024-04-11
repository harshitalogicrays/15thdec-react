import { FaArrowAltCircleLeft, FaHome, FaList, FaLock, FaPenAlt, FaShoppingCart } from "react-icons/fa"
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, NavDropdown } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";

export const ShowOnLogin=({children})=>{
   
}

export const ShowOnLogout=({children})=>{
          
}

export const CartShow=()=>{
  return (<>
  <Link to='/cart' >
          <FaShoppingCart size={30} style={{color:'white'}}/>
                <span class="badge rounded-pill text-bg-danger">0</span >
  </Link>
    
                
  </>)
}