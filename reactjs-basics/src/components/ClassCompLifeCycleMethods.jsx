import React, { Component } from 'react'

export default class ClassCompLifeCycleMethods extends Component {
    constructor(props) {
      super(props)
      console.log("constructor called")
      this.state = {
         username:this.props.uname,users:[]
      }
    }
    static getDerivedStateFromProps(state,props){
        console.log("getDerivedStateFromProps called")
        return {state}
    }

componentDidMount(){
    console.log("componentDidMount called")
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => this.setState({users:json}))
}
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called")
    }
    getSnapshotBeforeUpdate(prevState,prevProps){
        console.log("getSnapshotBeforeUpdate",prevState)
        return {prevState}
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called")
    }
  render() { console.log("render called")
    return (
      <div>
        {this.state.username}
        <button type="button" class="btn btn-primary" onClick={()=>{
            console.log("click called")
            this.setState({username:"Riya"})
        }}>
            Change Name
        </button>
        
        {/* {this.state.users.map((user)=><h3 key={user.id}>{user.name}</h3>)} */}
      </div>
    )
  }

  
}
