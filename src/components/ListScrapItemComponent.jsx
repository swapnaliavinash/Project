import React, { Component } from 'react';
import Scrap_Types from '../services/Scrap_Types';

class ListScrapItemComponent extends Component {
constructor(props)
{
    super(props)
    this.state ={
       Scrap_Types:[]

    }
    this.addItem =this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
}

viewItem(id){
    this.props.history.push(`/view-Item/${id}`)
}

deleteItem(id){
    Scrap_Types.deleteItem(id).then(res => {
        this.setState({Scrap_Types: this.state.Scrap_Types.filter(Scrap_Types => Scrap_Types.id !== id)})
    });
}

editItem(id){
    this.props.history.push(`/update-Item/${id}`);
}

componentDidMount()
{
    Scrap_Types.getScrap_Types().then((res) => {
        this.setState({Scrap_Types: res.data});

    });
}

addItem()
{
    this.props.history.push(`/add-Item`);
}

    render() {
        return (
            <div>

            <h2 className='text-center'>Scrap Lists</h2>    
           
           <div className ="row">
               <button className='btn btn-primary' onClick={this.addItem}>Add Item </button>
           </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>

                <thead>
                <tr>
                 <th>Item id</th> 
                  <th>Item Name</th>
                  <th>Item Quantity</th> 
                  <th>Item Rate</th>   
                  
                </tr>

                </thead>

            <tbody>
                {
                    this.state.Scrap_Types.map(
                            Item =>
                            <tr key ={Item.id}>
                                <td>{Item.Name}</td>
                                <td>{Item.Quantity}</td>
                                <td>{Item.Rate}</td>
                            
                                <td>
                                    <button onClick={() => this.editItem(Item.id)} className="btn-btn-info">Update</button>
                                    <button style= {{marginLeft: "5px"}} onClick = { () => this.deleteItem(this.addItem.id)} className="btn btn-danger">Delete</button>
                                     <button style= {{marginLeft: "5px"}} onClick = { () => this.viewItem(Item.id)} className="btn btn-success">View</button>
                                </td>
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

export default ListScrapItemComponent;