

import React, { Component } from 'react'
import Scrap_Types from '../services/Scrap_Types';

export default class CreateScrapTypesComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            ItemId:'',
            Item_Name:'',
            Item_Quantity:'',
            Item_Rate:''
   
        }
    
    this.changeItemIdHandler = this.changeItemIdHandler.bind(this);
    this.changeItem_NameHandler = this.changeItem_NameHandler.bind(this);
    this.changeItem_QuantityHandler = this.changeItem_QuantityHandler.bind(this);
    this.changeItem_RateHandler = this.changeItem_RateHandler.bind(this);
    this.savescrap=this.savescrap.bind(this);
}
savescrap =(u)=>{
    u.preventDefault();
    let Scrap={ItemId:this.state.ItemId,Item_Name:this.state.Item_Name,Item_Quantity:this.state.Item_Quantity,Item_Rate:this.state.Item_Rate};
    console.log('Scrap =>' +JSON.stringify(Scrap));

    Scrap_Types.createItem(Scrap).then(res =>{
        this.props.history.push('/Scrap_Types');
    })

}

changeItemIdHandler= (event)=>{
    this.setState({ItemId:event.target.value});
}

changeItem_NameHandler= (event)=>{
    this.setState({Item_Name:event.target.value});

}

changeItem_QuantityHandler= (event)=>{
    this.setState({Item_Quantity:event.target.value});
}

changeItem_RateHandler= (event)=>{
    this.setState({Item_Rate:event.target.value});
}

cancel(){
    this.props.history.push('/Scrap_Types')
}

render() {
    return (
        <div>
     <div className='container'>
         <div className='row'>
             <div className ="card col-md-6 offset-md-3">
                 <h3 className='text-center'>Add Items</h3>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label>Item Id</label>
                            <input placeholder="Item Id" name="itemid" className='form-control' 
                                    value={this.state.ItemId} onChange={this.changeItemIdHandler}></input>

                            <label>Item Name</label>
                            <input placeholder="Item Name" name="itemname" className='form-control' 
                                    value={this.state.Item_Name} onChange={this.changeItem_NameHandler}></input>

                            <label>Item Quantity</label>
                            <input placeholder="Item Quantity" name="itemquantity" className='form-control' 
                                    value={this.state.Item_Quantity} onChange={this.changeItem_QuantityHandler}></input>

                            <label>Item Rate</label>
                            <input placeholder="Item Rate" name="itemrate" className='form-control' 
                                    value={this.state.Item_Rate} onChange={this.changeItem_RateHandler}></input>

                            </div>
                            
                            <button className = "btn btn-success" onClick={this.saveScrap}>Save</button>
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





