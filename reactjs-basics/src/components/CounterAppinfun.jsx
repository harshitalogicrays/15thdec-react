import React, { useState } from 'react'

const CounterAppinfun = () => {
    // let count=''
    // let increaseCount=()=>{
    //     console.log(count)
    //     count++
    // }

    let [count,setCount]=useState('') //variable creation 
    let [a,setA]=useState(0)
    let [b,setB]=useState(0)
    let [obj,setObj]=useState({a:10,b:20}) //let obj={a:10,b:20}
    let [arr,setArr]=useState([]) // arr=[]
      let increaseCount=()=>{
        console.log(count)
        // setCount(parseInt(count+1))
        setCount((prev)=>parseInt(prev+1))
        setObj({a:30,b:40})
        console.log(obj.a + obj.b)
    }
  return (
    <>
        <button type="button" className="btn btn-danger" onClick={increaseCount}>Counter</button>
        
        <> 
            <h1>{count}</h1>
            <h2>{obj.a + obj.b}</h2>
         </>
            {/* <button type="button" className="btn btn-primary">Primary  <i className='bi bi-trash'></i></button> */}   
    </>
  )
}

export default CounterAppinfun
