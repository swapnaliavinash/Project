import React, { Component } from 'react';
import Scrap_RewardService from '../services/Scrap_RewardService';

export default class UpdateScrapRewardComponent extends Component {
  constructor(props){
    super(props)

    this.state ={
        id: this.props.match.params.id,
        CustomerId:'',
        Status:'',
        Reward:'',
            
    }

this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
this.changeStatusHandler = this.changeStatusHandler.bind(this);
this.changeRewardHandler = this.changeItem_RewardHandler.applybind(this);

this.updateReward=this.updateReward.bind(this);
}

componentDidMount(){
  Scrap_RewardService.getCustomerId(this.state.id).then((res) => {
      let ScrapReward = res.data;
      this.state({CustomerId:ScrapReward.CustomerId,Status:ScrapReward.Status,
        Reward:ScrapReward.Reward});
  });

}



UpdateReward =(u)=>{
    u.preventDefault();
    let ScrapReward={CustomerId:this.state.CustomerId,Status:this.state.Status,Reward:this.state.Reward};
    console.log('ScrapReward =>' +JSON.stringify(ScrapReward));

   Scrap_RewardService.updateReward(ScrapReward).then(res =>{
      this.props.history.push('/Scrap_Reward');
})
}

changeCustomerIdHandler= (event)=>{
    this.setState({CustomerId:event.target.value});
}


changeStatusHandler= (event)=>{
    this.setState({Status:event.target.value});
}


changeRewardHandler= (event)=>{
    this.setState({Reward:event.target.value});
}

cancel(){
    this.props.history.push('/Scrap_Reward')
}



render() {
    return (
        <div>
     <div className='container'>
         <div className='row'>
             <div className ="card col-md-6 offset-md-3">
                 <h3 className='text-center'>Update Reward</h3>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label>Customer Id</label>
                            <input placeholder="Customer Id" name="customerid" className='form-control' 
                                    value={this.state.CustomerId} onChange={this.changeCustomerIdHandler}></input>



                            <label>Status</label>
                            <input placeholder="Status" name="status" className='form-control' 
                                    value={this.state.Status} onChange={this.changeStatusHandler}></input>



                       
                                       
                            <label>Reward</label>
                            <input placeholder="Reward" name="Reward" className='form-control' 
                                    value={this.state.Reward} onChange={this.changeRewardHandler}></input>

                                 
                        </div>
                        <button className = "btn btn-success" onClick={this.updateReward}>Save</button>
                        <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                    </form>
                </div>

             </div>
         </div>
     </div>
      
     </div> 
    );
}
}