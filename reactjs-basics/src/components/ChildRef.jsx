import React, { forwardRef } from 'react'

const ChildRef = forwardRef((props,ref) => {
  return (
    <div>
        <input ref={ref}/>
    </div>
  )
})

export default ChildRef
