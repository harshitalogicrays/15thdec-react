import React, { useCallback, useEffect, useRef, useState } from 'react'

const UseCallbackHookDemo = () => {
    let [length,setLength]=useState(8)
    let [password,setPassword]=useState("")
    let [numbersAllowed,setNumbersAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    let copyRef=useRef() 
    // let passwordGenerator=()=>{
    //     let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //     let data=''
    //     if(numbersAllowed){str+='0987654321'}
    //     if(charAllowed){str+='!@#$%^&*()-+=.'}

    //     for(let i=1;i<=length;i++){
    //         data += str.charAt(Math.floor(Math.random()*str.length))
    //     }
    //     setPassword(data)
    // }

    let passwordGenerator=useCallback(()=>{
            let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            let data=''
            if(numbersAllowed){str+='0987654321'}
            if(charAllowed){str+='!@#$%^&*()-+=.'}
    
            for(let i=1;i<=length;i++){
                data += str.charAt(Math.floor(Math.random()*str.length))
            }
            setPassword(data)
    },[length,numbersAllowed,charAllowed])

    useEffect(()=>{
        passwordGenerator()
    },[length,numbersAllowed,charAllowed])

    let handleCopy=()=>{
        // copyRef.current?.select()
        copyRef.current?.select()
        copyRef.current?.setSelectionRange(0,5)
    }
  return (
    <div className='container col-6 mt-5'>
        <div className="input-group">
            <input type="text" className='form-control' value={password} ref={copyRef}></input>
            <button type="button" className='btn btn-primary' onClick={handleCopy}>copy</button>
        </div>
        <input type="range" min={4} max={100} value={length} 
        onChange={(e)=>setLength(e.target.value)}/> (Length : {length} ){"  "}
        <input type="checkbox" onClick={()=>setNumbersAllowed(!numbersAllowed)}></input><label>Numbers</label>
        <input type="checkbox" onClick={()=>setCharAllowed(!charAllowed)}></input><label>Characters</label>
    </div>
  )
}

export default UseCallbackHookDemo
