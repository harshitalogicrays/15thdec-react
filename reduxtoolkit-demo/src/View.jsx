import React from 'react'
import {useSelector} from 'react-redux'
const View = () => {
    useSelector()
  return (
   <>
    <table className='table table-bordered table-striped table-hover'>
        <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Action</th></tr>
        </thead>
        <tbody>
            <tr><td></td><td></td><td></td><td></td></tr>
        </tbody>
    </table>
   </>
  )
}

export default View
