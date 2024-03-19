import React, { Component } from 'react'

export default class ForminClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:{username:'',email:'',password:'',cpassword:''},
         usersData:localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")):[]
      }
    }
    
    handleChange=(e)=>{
        this.setState({
            user:{
                ...this.state.user,
                [e.target.name]:e.target.value
            }
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        // alert(JSON.stringify(this.state.user))
        this.setState({usersData:[...this.state.usersData,this.state.user]})
        localStorage.setItem("users",JSON.stringify([...this.state.usersData,this.state.user]))
    }
  render() {
    return (
     <>
     <div className="container">
        <div className="row">
            <div className="col-6"> <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor='username' className="form-label">Username</label>
                        <input type="text" 
                        className="form-control" name="username" 
                        value={this.state.user.username} onChange={this.handleChange}
                       /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor='email' className="form-label">Email</label>
                        <input type="text" className="form-control" name="email"
                       value={this.state.user.email} onChange={this.handleChange} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor='username' className="form-label">Password</label>
                        <input type="password" className="form-control" name="password"
                       value={this.state.user.password} onChange={this.handleChange} /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor='username' className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="cpassword" 
                      value={this.state.user.cpassword} onChange={this.handleChange} /> 
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    
                </form></div>
            <div className="col-6">
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.usersData.length==0 && <tr><td colSpan={5}>No user found</td></tr>}
                        {this.state.usersData.map((u,i)=>
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>{u.password}</td>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-success me-2"
                                >
                                    <i className="bi bi-pen"></i>
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>

                        </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div>
     </div>
    
     </>
    )
  }
}
