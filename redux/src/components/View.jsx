import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { REMOVE_ALL, REMOVE_USER_ID, REMOVE_USER_INDEX, selectUsers } from '../redux/userSlice'
const View = () => {
//    const allUsers = useSelector(state=>state.user.users)
    const allUsers=useSelector(selectUsers)
   console.log(allUsers)
   const dispatch=useDispatch()
  return (
   <>
    <table className='table table-bordered table-striped table-hover'>
        <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Remove</th></tr>
        </thead>
        <tbody>
            {allUsers.length==0 && <tr><td colSpan={4}>No user found</td></tr>}
            {allUsers.map((user,index)=>
             <tr key={user.id}>
                <td>{user.id}</td><td>{user.name}</td><td>{user.email}</td>
                <td><button type="button"  class="btn btn-danger m-2"  
                onClick={()=>dispatch(REMOVE_USER_ID(user.id))} >
                    by id  </button>
                    <button type="button"  class="btn btn-danger m-2"
                    onClick={()=>dispatch(REMOVE_USER_INDEX(index))}  >
                    by index  </button>
                </td>
                </tr>
            )}
           
        </tbody>
    </table>
    <button type="button"  class="btn btn-danger m-2"
                    onClick={()=>dispatch(REMOVE_ALL())}  >
                    Remove All  </button>
   </>
  )
}

export default View
