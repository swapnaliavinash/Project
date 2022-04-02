import React, { Component } from 'react';
import Scrap_RewardService from '../services/Scrap_RewardService';


class ListScrapReward extends Component {
    constructor(props){
        super(props)
            
            this.state={
                scrapreward:[]
            }
            this.editReward = this.editReward.bind(this);
  
    }

    viewReward(id){
        this.props.history.push(`/viewReward/${id}`)
    }


    editReward(id){
        this.props.history.push(`/addReward/${id}`);
    }


componentDidMount(){
         Scrap_RewardService.getScrap_Reward().then((res)=>{
             this.setState({scrapreward:res.data});
         });
}




    render() {
        return (
            <div>
                <h2 className="text-center">ScrapReward</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>  Customerid</th>
                                <th>  Status</th>
                                <th>  Reward</th>
                                <tr> Actions </tr>
                            </tr>
                        </thead>
                            
                            
                        <tbody>
                        {this.state.scrapreward.map(
                                scrapreward=>
                            <tr key = {scrapreward.customerId}>
                                <td>{scrapreward.status}</td>
                                <td>{scrapreward.reward}</td>


                 <button onClick = { () => this.editReward(scrapreward.id)} className="btn btn-info">Update</button>
                <button style= {{marginLeft: "5px"}} onClick = { () => this.viewReward(scrapreward.id)} className="btn btn-success">View</button>

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

                    
export default ListScrapReward;

                