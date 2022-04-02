import React, { Component } from 'react';
import UserService from '../services/UserService';
import image from "./image/image1.jpeg";


export default class CreateUserComponent extends Component {

    constructor(props){
        super(props)

        this.state ={
            address:'',
            mobileno:'',
            password:'',
            type:'',
            user_name:''
   
        }

    //this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeaddressHandler = this.changeaddressHandler.bind(this);
    this.changemobilenoHandler = this.changemobilenoHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
    this.changetypeHandler = this.changetypeHandler.bind(this);
    this.changeuser_nameHandler = this.changeuser_nameHandler.bind(this);
    this.saveuser=this.saveuser.bind(this);
}

    saveuser =(u)=>{
        u.preventDefault();
        let user={address:this.state.address,mobileno:this.state.mobileno,password:this.state.password,type:this.state.type,user_name:this.state.user_name};
        console.log('user =>' +JSON.stringify(user));
    
        UserService.createUser(user).then(res =>{
            this.props.history.push('/user');
        })
    
    }


    
    changeaddressHandler= (event)=>{
        this.setState({address:event.target.value});
    }
    
    
    changemobilenoHandler= (event)=>{
        this.setState({mobileno:event.target.value});
    }

    changepasswordHandler= (event)=>{
        this.setState({password:event.target.value});
    }
    
    
    changetypeHandler= (event)=>{
        this.setState({type:event.target.value});
    }
    
    
    changeuser_nameHandler= (event)=>{
        this.setState({user_name:event.target.value});
    }

    cancel(){
        this.props.history.push(`/user`)
    }



    render() {
       
        return (

            <div style={{ backgroundImage: `url(${image1.jpeg})` }}>
        
 
    
            
            <div>
         <div className='container'>
             <div className='row'>
                 
                 <div className = "card col-md-6 offset-md-3  offset-md-3">
                     <h3 className='text-center'>Add User</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                              {/* //  <label>User Id</label>
                              //  <input placeholder="id" name="id" className='form-control' 
                               //         value={this.state.id} onChange={this.changeidHandler}></input> */}


                                <label>User Address</label>
                                <input placeholder="address" name="address" className='form-control' 
                                        value={this.state.address} onChange={this.changeaddressHandler}></input>
					</div>

					<div className='form-group'>
                                <label>Mobile NO</label>
                                <input placeholder="mobileno" name="mobileno" className='form-control' 
                                        value={this.state.mobileno} onChange={this.changemobilenoHandler}></input>

					</div>
                            
					<div className='form-group'>
                                <label>Password</label>
                                <input placeholder="password" name="password" className='form-control' 
                                        value={this.state.password} onChange={this.changepasswordHandler}></input>
					</div>

					<div className='form-group'>
					<label>Type</label>
                                <input placeholder="type" name="type" className='form-control' 
                                        value={this.state.type} onChange={this.changetypeHandler}></input>
					</div>

					<div className='form-group'>
                                    <label>User_name</label>
                                <input placeholder="user_name" name="user_name" className='form-control' 
                                        value={this.state.username} onChange={this.changeuser_nameHandler}></input>

                            </div>
                            
                            <button className = "btn btn-success" onClick={this.saveuser}>Save</button>
                             <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                        </form>
                    </div>

                 </div>
             </div>
         </div>
         </div>
         </div>
       
         
          
         
        );
    }
}

// export default CreateUserComponent;