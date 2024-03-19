import React, { Component } from 'react'

export default class PropsDemoinClass extends Component {
    //this.props ={username:"Ram",address:"Pune"}
  render() {
    return (
      <div>
        <h2>{this.props.username}</h2>
        <h3>{this.props.address}</h3>
      </div>
    )
  }
}
