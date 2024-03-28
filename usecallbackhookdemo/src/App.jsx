import { useEffect, useState } from 'react'
import UseCallbackHookDemo from './UseCallbackHookDemo'

function App() {
  let [data,setData]=useState(0)
  let [count,setCount]=useState(0)
  // useEffect(()=>{
  //   alert("useeffect called")
  // },[]) //componentDidMount
  useEffect(()=>{
    setCount(data+5)
  },[data]) //componentDidUpdate
  return (
    <>
    <div className='container'>
      {/* <button type="button" className='btn btn-primary' 
      onClick={()=>setData(prev=>prev+1)}>Counter</button>
      <h1> Data : {data}
      </h1>   
      <h1>Count: {count}</h1>  */}

      <UseCallbackHookDemo/>
      </div>
      </>
      )
}

export default App
