import React, { Component } from 'react'
import instockRequests from '../../utilities/apiCalls'
// import InventoryItemDetails from '../../components/InventoryItemDetails/InventoryItemDetails'
import InventoryList from '../../components/InventoryList/InventoryList'


class Inventory extends Component {
    state = {
        inventories: null, 
    }
    componentDidMount() {
        instockRequests.getWarehouseInventories()
        .then((response)  => {
            console.log(response.data)
            this.setState({
                inventories: response.data
            })
        }).catch(error => console.log(error))
    }
    render() {
        return (
            <div className="inventories">
                <InventoryList inventories={this.state.inventories} /> 
                
            </div>
        )
    }
}
export default Inventory
