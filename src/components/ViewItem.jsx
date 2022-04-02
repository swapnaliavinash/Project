 
import React, { Component } from 'react'
import Scrap_Types from '../services/Scrap_Types'

export default class ViewItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             item: {}
        }
    }

    componentDidMount(){
        Scrap_Types.getItemId(this.state.id).then(res => {
            this.setState({item: res.data});
        })
    }
    
    render() {
        return (
            <div>
                <br></br>
              <div className = "card col-md-6 offset-md-3">
                  <h3 className = "text-center">View Scrap Item Details</h3>
                  <div className = "card-body">
                      <div className = "row">
                          <label>Item Id</label>
                          <div>{this.state.item.Id}</div>
                      </div>
                      <div className = "row">
                          <label>Item Name</label>
                          <div>{this.state.item.Name}</div>
                      </div>
                      <div className = "row">
                          <label>Item Quantity</label>
                          <div>{this.state.item.quantity}</div>
                      </div>
                      <div className = "row">
                          <label>Item Rate</label>
                          <div>{this.state.item.rate}</div>
                      </div>
                     
                      </div>
                  </div>
              </div>
           
        )
    }
}
