import React, { Component, PureComponent } from 'react'

export default class PureCompDemo extends PureComponent {
    constructor(props) {
      super(props)  
      this.state = {
         username:"Harshita"
      }
    }
    
  render() {
    console.log("render called")
    return (
      <div>
        {this.state.username}
        <button type="button" onClick={()=>this.setState({username:"happy"})}>Change Name</button>
      </div>
    )
  }
}


