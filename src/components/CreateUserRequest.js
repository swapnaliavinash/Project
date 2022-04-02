import React, { Component } from 'react'
import User_RequestService from '../services/User_RequestService';

export default class CreateUserRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             address: '',
             email: '',
             items: '',
             password: '',
             pickup_date: '',
             request_no: '',
             reward: '',
             status: '',
             username: ''
        }
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeItemHandler = this.changeItemHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changePickupDateHandler = this.changePickupDateHandler.bind(this);
        this.changeRequestNoHandler = this.changeRequestNoHandler.bind(this);
        this.changeRewardHandler  = this.changeRewardHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.saveRequest = this.saveRequest.bind(this);

    }
    saveRequest = (s) => {
        s.preventDefault();
        let customer = {address:this.state.address, email: this.state.email, items: this.state.items,password: this.state.password, pickup_date: this.state.pickup_date, request_no: this.state.request_no, reward:this.state.reward, status: this.state.status, username: this.state.username};
        console.log('customer =>' + JSON.stringify(customer));

        User_RequestService.createCustomer(customer).then(res =>{
            this.props.history.push('/customer');

        })
    }

    changeAddressHandler = (event) =>{
         this.setState({address: event.target.value});
    }

    changeEmailHandler = (event) =>{
        this.setState({email: event.target.value});
   }
   changeItemHandler = (event) =>{
    this.setState({items: event.target.value});
   }
   changePasswordHandler = (event) =>{
    this.setState({password: event.target.value});
   }
   changePickupDateHandler = (event) =>{
    this.setState({pickup_date: event.target.value});
   }
   changeRequestNoHandler = (event) =>{
    this.setState({request_no: event.target.value});
   }
   changeRewardHandler = (event) =>{
    this.setState({reward: event.target.value});
   }
   changeStatusHandler = (event) =>{
    this.setState({status: event.target.value});
   }
   changeUserNameHandler = (event) =>{
    this.setState({username: event.target.value});
   }
   
    cancle(){
        this.props.history.push('/CustomerRequests')
    }

    render() {
        return (
            <div>

                <div className = "container">
                    <div className = "row">
                           <div className = "card col-md-6 offset-md-3  offset-md-3">
                               <h3 className="text-center">Add Customer Request</h3>
                               <div className = "card-body">
                                   <form>
                                          <div className = "form-group">
                                              <label>Address :</label>
                                              <input placeholder="Enter Address" name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler}/>
                                         </div>
                                         <div className = "form-group">
                                              <label>Email ID :</label>
                                              <input placeholder="Enter EmailId" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                         </div>
                                       
                                         <div className = "form-group">
                                              <label>Items :</label>
                                              <input placeholder="Enter Item Type" name="items" className="form-control" value={this.state.items} onChange={this.changeItemHandler}/>
                                         </div>
                                       
                                         <div className = "form-group">
                                              <label>Password :</label>
                                              <input placeholder="Enter Password" name="pwd" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                         </div>
                                         <div className = "form-group">
                                              <label>Pickup Date :</label>
                                              <input placeholder="Enter Pickup Date" name="date" className="form-control" value={this.state.pickup_date} onChange={this.changePickupDateHandler}/>
                                         </div>
                                         <div className = "form-group">
                                              <label>Request Number :</label>
                                              <input placeholder="Enter Request Number" name="reqno" className="form-control" value={this.state.request_no} onChange={this.changeRequestNoHandler}/>
                                         </div>
                                         <div className = "form-group">
                                              <label>Rewards :</label>
                                              <input name="reward" className="form-control" value={this.state.reward} onChange={this.changeRewardHandler}/>
                                         </div>
                                         <div className = "form-group">
                                              <label>Status :</label>
                                              <input placeholder="Enter Status" name="status" className="form-control" value={this.state.status} onChange={this.changeStatusHandler}/>
                                         </div>
                                         <div className = "form-group">
                                              <label>UserName :</label>
                                              <input placeholder="Enter UserName" name="uname" className="form-control" value={this.state.username} onChange={this.changeUserNameHandler}/>
                                              <br></br>
                                         </div>
                                       
                                         
                                               <button className = "btn btn-success" onClick={this.saveRequest}>Save</button>
                                               <button className = "btn btn-danger" onClick={this.changePickupDateHandler.bind(this)} style={{marginLeft: "10px"}}>Cancle</button>
                                       
                                   </form>
                               </div>
                           </div>
                    </div>
                </div>
            </div>
        )
    }
}
