import React, { Component } from 'react'
import instockRequests from '../../utilities/apiCalls'
import InventoryList from '../../components/InventoryList/InventoryList'


class Inventory extends Component {
    state = {
        inventories: [],
        selectedInventories: [],
        selectedWarehouse: null,
        toggleModal: false
    }
getSingleInventories = (itemId) => {
    instockRequests.getSingleInventories(itemId)
    .then((response) => {
        this.setState({ selectedInventories: response.data, })
    }).catch(error => console.log(error))
} 
componentDidMount() {
        instockRequests.getWarehouseInventories()
        .then((response)  => {
            console.log(response.data)
            this.setState({
                inventories: response.data,
            })
            const itemId = this.props.match.params.id || response.data[0].warehouseID;
            console.log('this.props.match.params::', this.props.match.params)
            this.getSingleInventories(itemId)
        }).catch(error => console.log(error))
    }
    inventoriesModal = (selectedInventories) => {
        this.setState({
            toggleModal: true,
            selectedInventories: selectedInventories
        })
    }

    closeWarehouseModal = () => {
        this.setState({
            toggleModal: false,
        })
    }
    inventoriesDelete = (id) => {
        instockRequests.DeleteWarehouse(id)
            .then(res => {
                this.closeWarehouseModal()
                instockRequests.getAllWarehouses()
                    .then(res => {
                        this.setstate({
                            warehouses: res.data,
                        })
                    })
            })
    }
    render() {
        if (!this.state.selectedInventories) {
            return <h1>Inventories List Pending...</h1>
        }
        const findInventories = this.state.inventories.find(inventory => this.props.match.params.id === this.state.inventories)

        console.log('this.state.inventories.warehouseID::', this.state.inventories.warehouseID, findInventories)

        return (
            <div className="inventories">
                <InventoryList 
                inventories={this.state.inventories} 
                selectedInventories={this.state.selectedInventories} 
                inventoriesModal={this.inventoriesModal}/> 

            </div>
        )
    }
}
export default Inventory
