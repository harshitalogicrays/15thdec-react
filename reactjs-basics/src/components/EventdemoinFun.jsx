import React, { Fragment } from 'react'

const EventdemoinFun = () => {
    function fun(){
        alert("button clicked")
    }
    // let fun=()=>{}
    let sum=(a,b)=>{
        alert(a+b)
    }
  return (
    <Fragment>
      <button type="button" onClick={()=>alert("button clicked")}>Click Me</button>
      <button type="button" onClick={fun}>fun </button>
      <button type="button" onClick={()=>fun()}>fun </button>
      <button type="button" onClick={()=>sum(2,3)}>sum function </button>
    </Fragment>
  )
}

export default EventdemoinFun
