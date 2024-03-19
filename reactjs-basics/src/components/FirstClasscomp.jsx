// import { Component } from "react";
// import FirstFuncomp from "./FirstFuncomp";
// class FirstClasscomp extends Component{
//     render(){
//         return (
//             <div>
//                 <h2>Class component</h2>
//                 <FirstFuncomp/>
//             </div>
//         )
//     }
// }
// export default FirstClasscomp

import React, { Component } from 'react'
import FirstFuncomp from './FirstFuncomp'

export default class FirstClasscomp extends Component {
  render() {
    return (
      <div>
         <h2>Class component</h2>
        <FirstFuncomp/>
      </div>
    )
  }
}

