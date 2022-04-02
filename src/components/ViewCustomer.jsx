 
import React, { Component } from 'react'
import User_RequestService from '../services/User_RequestService'

export default class ViewCustomer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             user: {}
        }
    }

    componentDidMount(){
        User_RequestService.getCustomerById(this.state.id).then(res => {
            this.setState({user: res.data});
        })
    }
    
    render() {
        return (
            <div>
                <br></br>
              <div className = "card col-md-6 offset-md-3">
                  <h3 className = "text-center">View Customer Details</h3>
                  <div className = "card-body">
                      <div className = "row">
                          
                         
                          <div>
                          <label>Address: </label>{this.state.user.address}</div>
                         </div>

                      <div className = "row">

                          
                          <div>
                          <label>Email ID:</label>
                          {this.state.user.email}</div>
                      </div>
                      <div className = "row">
                          <div>
                          <label>Items:</label>
                              {this.state.user.items}
                        </div>
                      </div>
                      <div className = "row">
                       
                          <div><label>Password:</label>{this.state.user.password}</div>
                      </div>
                      <div className = "row">
                        
                          <div><label>Pickup Date:</label>{this.state.user.pickup_date}</div>
                      </div>
                      <div className = "row">
                         
                          <div><label>Request Number:</label>{this.state.user.request_number}</div>
                      </div>
                      <div className = "row">
                         
                          <div><label>Rewards:</label>{this.state.user.rewards}</div>
                      </div>
                      <div className = "row">
                         
                          <div><label>Status:</label>{this.state.user.status}</div>
                      </div>
                      <div className = "row">
                         
                          <div><label>Username:</label>{this.state.user.user_name}</div>
                      </div>
                  </div>
              </div>
            </div>
        )
    }
}
