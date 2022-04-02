 
import React, { Component } from 'react'
import Scrap_RewardService from '../services/Scrap_RewardService'

export default class ViewReward extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             reward: {}
        }
    }

    componentDidMount(){
        Scrap_RewardService.getCustomerById(this.state.id).then(res => {
            this.setState({reward: res.data});
        })
    }
    
    render() {
        return (
            <div>
                <br></br>
              <div className = "card col-md-6 offset-md-3">
                  <h3 className = "text-center">View Scrap Reward Details</h3>
                  <div className = "card-body">
                      <div className = "row">
                          <label>CustomerId</label>
                          <div>{this.state.customerId}</div>
                      </div>
                      <div className = "row">
                          <label>Status</label>
                          <div>{this.state.status}</div>
                      </div>
                      <div className = "row">
                          <label>Reward</label>
                          <div>{this.state.reward}</div>
                      </div>
                     
                      </div>
                  </div>
              </div>
           
        )
    }
}
