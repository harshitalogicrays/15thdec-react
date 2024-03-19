import React from 'react'
const PropsDemoinFun = (props) => {
    //const props={username:"Ram",address:"Pune"}
    // props.username="Meera" //error
  return (
    <div>
       <h2>{props.username}</h2>
        <h3>{props.address}</h3>
    </div>
  )
}
export default PropsDemoinFun
