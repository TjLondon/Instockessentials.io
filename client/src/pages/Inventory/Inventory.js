import React, { Component } from 'react'
import instockRequests from '../../utilities/apiCalls'
import InventoryList from '../../components/InventoryList/InventoryList'


class Inventory extends Component {
    state = {
        inventories: [], 
    }
    componentDidMount() {
        instockRequests.getWarehouseInventories()
        .then((response)  => {
            this.setState({
                inventories: response.data[0],
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
