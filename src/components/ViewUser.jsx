 
import React, { Component } from 'react'
import User_RequestService from '../services/UserService'

export default class ViewCustomer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then(res => {
            this.setState({user: res.data});
        })
    }
    
    render() {
        return (
            <div>
                <br></br>
              <div className = "card col-md-6 offset-md-3">
                  <h3 className = "text-center">View User Details</h3>
                  <div className = "card-body">
                      <div className = "row">
                          
                         
                         // <div>
                        //  <label>Id: </label>{this.state.user.id}</div>
                        // </div>

                      <div className = "row">

                         <div className = "row"> 
                          <div>
                          <label>Address:</label>
                          {this.state.user.address}</div>
                      </div>
                     

			 <div className = "row">
                          <div>
                          <label>Mobileno:</label>
                              {this.state.user.mobileno}
                        </div>
                      </div>



                      <div className = "row">
                       
                          <div><label>Password:</label>{this.state.user.password}</div>
                      </div>
                     

				 <div className = "row">
                        
                          <div><label>Type:</label>{this.state.user.type}</div>
                      </div>
                      

				<div className = "row">
                         
                          <div><label>User Name:</label>{this.state.user.user_name}</div>
                      </div>
        
                      
                      
                      
                  </div>
              </div>
            </div>
        )
    }
}
