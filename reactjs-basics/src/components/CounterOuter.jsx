import React from 'react'
import { useState } from 'react'
import CounterInner from './CounterInner'

const CounterOuter = () => {
    let [count,setCount]=useState('')
    let handleCount=(i)=>{
        console.log(count)    
        setCount(prev =>parseInt(prev+i))
    }
  return (
   <>
            <h1>Parent Comp.</h1>
            <h1>Count: - {count}</h1>
            <hr/>
            <CounterInner increaseCount={handleCount}/>
   </>
  )
}

export default CounterOuter
