import React, { Component } from 'react'
import UserService from '../services/UserService'

export default class ListUserComponent extends Component {
constructor(props)
{
    super(props)
    this.state ={
        user:[]

    }
    this.addUser =this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
}

viewUser(id){
    this.props.history.push(`/view-user/${id}`)
}

deleteUser(id){
    UserService.deleteUser(id).then(res => {
        this.setState({user: this.state.user.filter(user => user.id !== id)})
    });
}

editUser(id){
    this.props.history.push(`/update-user/${id}`);
}

componentDidMount()
{
    UserService.getUser().then((res) => {
        this.setState({user: res.data});

    });
}

addUser()
{
    this.props.history.push(`/add-user`);
}

    render() {
        return (
            <div>

            <h2 className='text-center'>Users Lists</h2>    
           
           <div className ="col-3 m-1">
               <button className='btn btn-primary' onClick={this.addUser}>Add User </button>
           </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>

                <thead>
                <tr>
                 {/* //<th>User id</th>  */}
                  <th>User Address</th>
                  <th>Mobile No</th> 
                  <th>Password</th>   
                  <th>Type</th> 
                  <th>User Name</th> 
                  <th>Actions</th> 
                </tr>

                </thead>

            <tbody>
                {
                    this.state.user.map(
                            user =>
                            <tr key ={user.id}>
                                <td>{user.address}</td>
                                <td>{user.mobile}</td>
                                <td>{user.password}</td>
                                <td>{user.type}</td>
                                <td>{user.user_name}</td>
                                <td>
                                    <button onClick={() => this.editUser(user.id)} className="btn-btn-info">Update</button>
                                    <button style= {{marginLeft: "5px"}} onClick = { () => this.deleteUser(user.id)} className="btn btn-danger">Delete</button>
                                     <button style= {{marginLeft: "5px"}} onClick = { () => this.viewUser(user.id)} className="btn btn-success">View</button>
                                </td>
                            </tr>

                    )
                }
            </tbody>

                </table>
                
                
                </div>

            </div>
        );
    }
}

// export default ListUserComponent;