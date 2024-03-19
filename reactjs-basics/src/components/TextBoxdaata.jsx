import React, { useState } from 'react'

const TextBoxdaata = () => {
    let [num1,setNum1]=useState('')
    let [num2,setNum2]=useState('')
    let [add,setAdd]=useState('')
    let handleAdd=()=>{
        setAdd(Number(num1)+Number(num2))
    }
  return (
    <div className="container col-6">
        <div className="mb-3">
            <label htmlFor='num1' className="form-label">Num1</label>
            <input type="text" className="form-control" name="num1" value={num1} 
            onChange={(e)=>setNum1(e.target.value)}/> </div>
        <div className="mb-3">
            <label htmlFor='num2' className="form-label">Num2</label>
            <input type="text" className="form-control" name="num2" value={num2}
             onChange={(e)=>setNum2(e.target.value)}/>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAdd}> Add </button>
        <br></br>
        <h2>{add}</h2>
    </div>
  )
}

export default TextBoxdaata
