import React, { Component } from 'react'
import instockRequests from '../../utilities/apiCalls'
import InventoryList from '../../components/InventoryList/InventoryList'


class Inventory extends Component {
    state = {
        inventories: [],
        toggleModal: false
    }

    componentDidMount() {
        instockRequests.getWarehouseInventories()
            .then((response) => {
                console.log(response.data)
                this.setState({
                    inventories: response.data,
                })
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

        return (
            <div className="inventories">
                <InventoryList
                    inventories={this.state.inventories}
                    inventoriesModal={this.inventoriesModal} />
            </div>
        )
    }
}
export default Inventory
