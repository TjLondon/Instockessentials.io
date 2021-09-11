import React, { Component } from 'react'
import AddInventory from '../AddInventory/AddInventory'
import axios from 'axios'

class Inventory extends Component {
    state = {
        inventories: [],
        selectedInventory: null,
    }
    // getInventory(warehouseID) { 
    getInventory(warehouseID) { 
        axios.get(`http://localhost:8080/` + warehouseID + `/inventory`)
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
        this.getInventory()
        console.log('PARAMS ID: WAREHOUSE ID:: ', this.props.match.params.id)
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