import React, { Component } from 'react'
import AddInventory from '../AddInventory/AddInventory'
import instockAPIUrl from '../../utilities/apiCalls'
import instockResponse from '../../utilities/apiCalls'

class Inventory extends Component {
    state = {
        inventories: [],
        selectInventories: null,
    }
    getInventoryId(id) { 
        axios.get(`${instockAPIUrl}/` + id + `${instockResponse}`)
        .then((response) => {
            this.setState({
                selectedInventory: response.data,
            })
        }) 
    }
    getInventoryList(id, itemId) { 
        axios.get(`${instockAPIUrl}/` + id + `${instockResponse}/`+ itemId)
        .then((response) => {
            this.setState({
                inventories: response.data,
            })
            this.getInventoryId(response.data[0].id)
        }
    )}
    componentDidMount(id) {
        this.getInventoryList()
    }
    componentDidUpdate(prevProps, _prevState) {
        const { inventoryId } = this.props.match.params;
        if(prevProps.match.params.inventoryId !== inventoryId) {
            this.getInventoryList(inventoryId)
        }
    }
    render() {
        const filteredInventory = this.state.inventories.filter((inventory) => inventory.id !== this.state.selectedInventory.id)
        return (
            <div className="inventories">
                <AddInventory inventories={this.state.inventories}/>
                
            </div>
        )
    }
}
export default Inventory