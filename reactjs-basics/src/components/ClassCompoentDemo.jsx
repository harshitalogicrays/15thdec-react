import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import ForminClass from './ForminClass'
import ClassCompLifeCycleMethods from './ClassCompLifeCycleMethods'
import PureCompDemo from './PureCompDemo'

export default class ClassCompoentDemo extends Component {
    //constructor - rconst
    constructor(props) {
      super(props)    
      this.state = {a:10,b:20,add:0 , num1:'',num2:''}
    }
    
    // handleClick=()=>{
    //     // alert("button clicked")
    //     this.setState({add:(this.state.a + this.state.b)})
    // }
    // handleClick1=(a,b)=>{
    //     alert(a+b)
    // }

    handleAdd=(e)=>{
        e.preventDefault()
        this.setState({add: (parseInt(this.state.num1) + parseInt(this.state.num2))})
    }
  render() {
    return (
     <>
        <h1>Class Component demo</h1><hr/>
        {/* {this.props.username}<br/>
        <Button onClick={this.handleClick}>Click Me</Button>
        <Button onClick={()=>this.handleClick1(2,3)}>Click Me</Button><br/><br/>
        {this.state.a} and {this.state.b}<br/>
        {this.state.add} */}

        <Container>
            {/* <ClassCompLifeCycleMethods uname="Meera"/> */}
        <PureCompDemo/>

            {/* <ForminClass/> */}


        {/* <Form  onSubmit={this.handleAdd}>
            <Form.Group className='mb-3'>
                <Form.Label>Enter Number1</Form.Label>
                <Form.Control 
                value={this.state.num1} 
                onChange={(e)=>this.setState({num1:e.target.value})}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Enter Number1</Form.Label>
                <Form.Control value={this.state.num2}
                onChange={(e)=>this.setState({num2:e.target.value})}></Form.Control>
            </Form.Group>
            <Button type="submit">Add Numbers</Button>
        </Form>
        <h1>Result - {this.state.add}</h1> */}
        </Container>
     </>
    )
  }
}
