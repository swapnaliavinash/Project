import React, { Component } from 'react';
import UserService from '../services/UserService';

export default class UpdateUserComponent extends Component {
  constructor(props){
    super(props)

    this.state ={
        id: this.props.match.params.id,
       // UserId:'',
        address:'',
        mobileno:'',
        type:'',
        user_name:''

    }

//this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
this.changeaddressHandler = this.changeaddressHandler.bind(this);
this.changemobilenoHandler = this.changemobilenoHandler.bind(this);
this.changetypeHandler = this.changetypeHandler.bind(this);
this.changeusernameHandler = this.changeusernameHandler.bind(this);
this.updateUser=this.updateUser.bind(this);
}

componentDidMount(){
  UserService.getUserById(this.state.id).then((res) => {
      let user = res.data;
      this.state({address:user.address,
        mobileno:user.mobileno,type:user.type,user_name:user.user_name})
  })

}



updateUser =(u)=>{
    u.preventDefault();
    let user={address:this.state.address,mobileno:this.state.mobileno,type:this.state.type,user_name:this.state.user_name};
    console.log('user =>' +JSON.stringify(user));

    //UserService.updateUser(user).then(res =>{
     // this.props.history.push('/Users');
//})
}

//changeUserIdHandler= (event)=>{
 ////   this.setState({userId:event.target.value});
// }


changeaddressHandler= (event)=>{
    this.setState({address:event.target.value});
}


changemobilenoHandler= (event)=>{
    this.setState({mobileno:event.target.value});
}


changetypeHandler= (event)=>{
    this.setState({type:event.target.value});
}


changeusernameHandler= (event)=>{
    this.setState({user_name:event.target.value});
}

cancel(){
    this.props.history.push('/users')
}


render(){
    return (
        <div>
     <div className='container'>
         <div className='row'>
             <div className ="card col-md-6 offset-md-3">
                 <h3 className='text-center'>Update User</h3>
                <div className='card-body'>
                    <form>
                        
                          {/* //  <label>User Id</label>
                         //   <input placeholder="User Id" name="userid" className='form-control' 
                          //          value={this.state.userId} onChange={this.changeUserIdHandler}></input> */}


				<div className='form-group'>
                            <label>User Address</label>
                            <input placeholder="User Address" name="address" className='form-control' 
                                    value={this.state.address} onChange={this.changeaddressHandler}></input>
				</div>

				<div className='form-group'>
                            <label>Mobile NO</label>
                            <input placeholder="Mobile no" name="mobileno" className='form-control' 
                                    value={this.state.mobileno} onChange={this.changemobilenoHandler}></input>
				</div>

                        
				<div className='form-group'>
                            <label>Password</label>
                            <input placeholder="Password" name="password" className='form-control' 
                                    value={this.state.password} onChange={this.changePasswordHandler}></input>
				</div>

				<div className='form-group'>
                                 <label>Type</label>
                            <input placeholder="Type" name="type" className='form-control' 
                                    value={this.state.type} onChange={this.changetypeHandler}></input>
					</div>
                    
                    <div className='form-group'>
                                <label>UserName</label>
                            <input placeholder="UserName" name="username" className='form-control' 
                                    value={this.state.user_name} onChange={this.changeusernameHandler}></input>
                        </div>
                        <button className = "btn btn-success" onClick={this.updateUser}>Save</button>
                        <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                    </form>
                </div>

             </div>
         </div>
     </div>
      
     </div> 
 
    )

  }  
}