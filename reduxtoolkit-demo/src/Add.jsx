import React, { useState } from 'react'
import { useDispatch  } from "react-redux";
import { ADD_USER} from './redux/userSlice'
const Add = () => {
    let [user,setUser]=useState({name:'',email:''})
    const dispatch=useDispatch()
    let handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(ADD_USER(user))
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input type="text" class="form-control" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="text" class="form-control" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
            </div>
            <button  type="submit"  class="btn btn-primary">  Submit </button>
        </form>
    </>
  )
}

export default Add
