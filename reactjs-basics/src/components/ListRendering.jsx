import React from 'react'

const ListRendering = () => {
    const names=['aaa','bbb','cccc','ddd','eee']
    let result= names.map((name,index)=>
        <h1 key={index}>{name}</h1>
      )
  return (
    <>
      {/* {names.map((name,index)=>
        <h1 key={index}>{name}</h1>
      )} */}

      {/* {result} */}

      {names.map((name,index)=>{
        return( <h1 key={index}>{name}</h1> )
      }
      )}
    </>
  )
}

export default ListRendering
