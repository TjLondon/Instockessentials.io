import React, { Component } from 'react'
import AddInventory from '../AddInventory/AddInventory'
// import DetailsInventory from '../DetailsInventory/DetailsInventory'
import instockRequests from '../../utilities/apiCalls'
// import SearchBox from '../../components/SearchBox/SearchBox'
import InventoryList from '../../components/InventoryList/InventoryList'

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
                console.log('PARAMS ID: WAREHOUSE ID:: ',)
                this.getInventory(id)
            })
    }
    componentDidUpdate(warehouseID) {
        if (warehouseID.match.params.id !== this.props.match.params.id) {
            this.getInventory(this.props.match.params.id)
        }
    }
    render() {
        const filteredInventory = this.state.inventories.filter((id) =>  id !== this.state.inventories)
        console.log(filteredInventory)
        return (
            <div className="inventories">
                <AddInventory inventories={this.state.inventories} />
                <InventoryList filteredInventory={this.state.inventories}/> 
            </div>
        )
    }
}
export default Inventory
