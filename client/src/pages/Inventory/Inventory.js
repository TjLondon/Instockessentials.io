<<<<<<< HEAD
import React, { Component } from 'react'
import AddInventory from '../AddInventory/AddInventory'
import instockRequests from '../../utilities/apiCalls' 

class Inventory extends Component {
    state = {
        inventories: [],
        selectedInventory: null,
    }
    // getInventory(warehouseID) { 
    getInventory(id) { 
        instockRequests.getAllInventories(id)
        .then((response) => {
            console.log('RESPONSE DATA:::', response.data)
            console.log('RESPONSE ONLY :::', response)
            this.setState({
                inventories: response.data
            })
            console.log('INVENTORIES RESPONSE DATA::: ', this.state.inventories)
        }) 
    }
    componentDidMount() {
        instockRequests.getAllWarehouses()
        .then((response) => {
            this.setState({
                inventories: response.data,
            })
            const id = this.props.match.params.id || response.data[0].id;
            console.log('PARAMS ID: WAREHOUSE ID:: ', )
            this.getInventory(id)
        })
    }
    componentDidUpdate(warehouseID) { 
        if(warehouseID.match.params.id !== this.props.match.params.id) {
            this.getInventory(this.props.match.params.id)
        }
    }
    render() {
        return (
            <div className="inventories">
                <AddInventory inventories={this.state.inventories}/>
            </div>
        )
    }
}
export default Inventory
=======
import React from 'react';

const Inventory = () => {
    return (
        <div>
            
        </div>
    );
};

export default Inventory;
>>>>>>> cf4b6dee5a4192687d1947c7634dd9f15f5e4d1f
