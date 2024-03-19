import React, { Component, createRef } from 'react'
import RefinFun from './RefinFun'
import ChildRef from './ChildRef'

export default class UncontrolledComponentinClass extends Component {
    constructor(props) {
      super(props)
      this.state = {uname:'ram' }
      this.unameRef=createRef()
    }
    
    handleClick=()=>{
        alert(this.state.uname)
    }
    handleClick1=()=>{
        this.unameRef.current.style.color="blue"
        alert(this.unameRef.current.value)
    }
    componentDidMount(){
        // this.unameRef.current.focus()
    }
  render() {
    console.log("render called")
    return (
      <div>        
     {/* <input type="text" className='form-control' ref={this.unameRef} defaultValue="ram"
         ></input>
        <button type="button" className='btn btn-primary' onClick={this.handleClick1}>Get Name</button>
    <button type="button" className='btn btn-primary' 
    onClick={()=>this.unameRef.current.value="Neha"}>Change Name</button>
     */}


         {/* <input type="text" className='form-control' value={this.state.uname}
            onChange={(e)=>this.setState({uname:e.target.value})}
         ></input>
        <button type="button" className='btn btn-primary' onClick={this.handleClick}>Get Name</button> */}
   
     

        <RefinFun/>
        <hr/>
        <ChildRef ref={this.unameRef}/>
        <button type="button" onClick={()=>{this.unameRef.current.focus();this.unameRef.current.value="parent called"}}>focus</button>
     </div>
    )
  }
}
