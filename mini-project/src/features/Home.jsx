import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Loader from './Loader'
// import { DataContext } from '../DataProvider'

const Home = () => {
  // const data=useContext(DataContext)
  // console.log(data)
  let [todos,setTodos]=useState([])
    // let handleclick=(err)=>{
    //     toast.error(err)
    // }
    useEffect(()=>{
      getData()
    },[])

    // let getData=()=>{
    //   fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
    //     return res.json().then((data)=>{
    //       console.log(data)
    //       setTodos(data)
    //     })
    //   })
    //   .catch((err)=>toast.error(err.message))
    // }

    // let getData=async()=>{
    //   try{
    //     let res= await fetch("https://jsonplaceholder.typicode.com/todos")
    //     let data=await res.json()
    //     setTodos(data)
    //   }
    //   catch(err){
    //     toast.error(err.message)
    //   }
    // }

    // let getData=()=>{
    //   axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
    //     console.log(res);
    //     setTodos(res.data)        
    //   }).catch((err)=>toast.error(err.message))
    // }

    let getData=async()=>{
      try{
        let res= await axios.get("https://jsonplaceholder.typicode.com/todos")        
        setTodos(res.data) 
      }catch(err){toast.error(err.message)}
    }

    let getlocaljsondata=async()=>{
      try{
        let res= await axios.get("http://localhost:1000/users")        
        console.log(res.data)
      }catch(err){toast.error(err.message)}
    }
  return (
    <div>
      <h1>Home Page</h1>
      {/* <button type="button" o nClick={getlocaljsondata}>users data</button> */}
      {/* <button onClick={()=>handleclick("something went wrong")}>click</button> */}
      {/* {todos.map((todo,i)=><h1 key={i}>{i}. {todo.title}</h1>)} */}
    </div>
  )
}

export default Home
