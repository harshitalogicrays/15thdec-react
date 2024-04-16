import { signOut } from 'firebase/auth';
import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
    const navigate=useNavigate()
    let handleLogout=()=>{
        signOut(auth).then(() => {
            toast.success("loggedout successfully")
            navigate('/')
          }).catch((error) => {
             toast.error(error.message)
          });
          
    }
  return (
  <>
   <span onClick={handleLogout}> <FaArrowAltCircleLeft/> Logout</span>
  </>
  )
}

export default Logout
