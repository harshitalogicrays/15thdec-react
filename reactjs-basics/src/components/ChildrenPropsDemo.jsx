// import React from 'react'

// const ChildrenPropsDemo = (props) => {
//     console.log(props)
//   return (
//    <>
//     <h1>Children Props demo</h1>
//     {/* {props.children} */}
//     {props.children[1]}
//    </>
//   ) 
// }

// export default ChildrenPropsDemo


import React from 'react'

const ChildrenPropsDemo = ({username,children}) => {
  return (
    <>
      {username}<br/>
      {/* {children} */}
      {children.map((item,i)=>
          <div key={i} style={{border:'2px solid blue',marginBottom:'10px'}}>{item}</div>
      )}
    </>
  )
}

export default ChildrenPropsDemo
