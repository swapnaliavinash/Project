
import React, { Component } from 'react'
import User_RequestService from '../services/User_RequestService'


export default class User_Request_Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user_Request: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    viewCustomer(id){
        this.props.history.push(`/view-customer/${id}`)
    }

    deleteCustomer(id){
        User_RequestService.deleteCustomer(id).then(res => {
            this.setState({user_Request: this.state.user_Request.filter(user => user.id !== id)})
        });
}


    editCustomer(id){
              this.props.history.push(`/update-customer/${id}`);
    }

    componentDidMount(){
        User_RequestService.getUser_Request().then((res) => {
             this.setState({ user_Request: res.data});
            
        });
        //   console.log(user_Request)
    }

    addCustomer(){
        this.props.history.push('/add-customer')
    }
    render() {
        return (
            <div>
                <h2 className="text-center">User Request Form</h2>
                <div  className = "col-3 m-1">
                   <button className = "btn btn-primary" onClick={this.addCustomer}>Add Customer Request</button>
                   </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                              
                                <th>Address</th>
                                <th>Email Id</th>
                                <th>Items</th> 
                                <th>Password</th>
                                <th>Pickup Date</th>
                                <th>Request Number</th>
                                <th>Rewards</th>
                                <th>Status</th>
                                <th>UserName</th>  
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.user_Request.map(
                                    user =>
                                    <tr key = {user.id}>
                                         <td>{user.address}</td>
                                         <td>{user.email }</td>
                                        <td>{user.items}</td>
                                        <td>{user.password}</td>
                                        <td>{user.pickup_date}</td>
                                        <td>{user.request_number}</td>
                                        <td>{user.rewards}</td>   
                                        <td>{user.status}</td>
                                        <td>{user.user_name}</td>
                                        <td>
                                            <button onClick = { () => this.editCustomer(user.id)} className="btn btn-info">Update</button>
                                            <button style= {{marginLeft: "5px"}} onClick = { () => this.deleteCustomer(user.id)} className="btn btn-danger">Delete</button>
                                            <button style= {{marginLeft: "5px"}} onClick = { () => this.viewCustomer(user.id)} className="btn btn-success">View</button>
                                        </td>
                                   
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}
