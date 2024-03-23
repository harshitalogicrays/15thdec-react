import React from 'react'
import { toast } from 'react-toastify'

const Home = () => {
    let handleclick=(err)=>{
        toast.error(err)
    }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={()=>handleclick("something went wrong")}>click</button>
    </div>
  )
}

export default Home
