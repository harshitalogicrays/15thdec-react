import React from 'react'

const ConditionalRendering = ({flagprop,name}) => { //props={flagprop:false,name:"Ram"}
    // console.log(flagprop)
   /* if(flagprop){ //flagprop==true
        return(<>
            <h1>Welcome {name}</h1>
        </>)
    }
    else {
        return(<>
            <h1>Welcome Guest</h1>
        </>)
    } */

   /* let result
    if(flagprop){ //flagprop==true
        result= <h1>Welcome {name}</h1>
    }
    else {
        result=<h1>Welcome Guest</h1>
    }
 
    return(<>  {result}  </>) */


    return (
        <>
            <h3>sfkhfshf</h3>
            {flagprop ?  <h1>Welcome {name}</h1>  : <h1>Welcome Guest</h1>}<br/>
            {flagprop && <><h1>Hello {name}</h1>Thanks for Coming!!</>}
            <br/>
            {/* {flagprop && name=="Ram" ? <>ok</> :''} */}
        </>
    )
}

export default ConditionalRendering
