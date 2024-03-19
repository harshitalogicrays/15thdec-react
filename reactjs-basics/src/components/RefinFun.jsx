import React, { useRef } from 'react'

const RefinFun = () => {
    const countRef=useRef()
  return (
    <div>
      <button type="button" 
      onClick={()=>{countRef.current.value > 1 && countRef.current.value--}}>-</button>
      <input type="text" style={{width:'40px',textAlign:'center'}} 
      defaultValue={1} ref={countRef}/>
      <button type="button" onClick={()=>countRef.current.value++}>+</button>
    </div>
  )
}

export default RefinFun
