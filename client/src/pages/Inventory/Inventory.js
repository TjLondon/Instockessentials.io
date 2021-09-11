import React, { Component } from 'react'
import AddInventory from '../AddInventory/AddInventory'
import axios from 'axios'

class Inventory extends Component {
    state = {
        inventories: [],
        selectedInventory: null,
    }
    // getInventory(warehouseID) { 
    getInventory(warehouseID, id) { 
        axios.get(`http://localhost:8080/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9/inventory`)
        // axios.get(`http://localhost:8080/` + warehouseID + `/inventory`)
        .then((response) => {
            console.log('RESPONSE DATA:::', response.data)
            console.log('RESPONSE ONLY :::', response)
            this.setState({
                inventories: response.data
            })
            console.log('INVENTORIES RESPONSE DATA::: ', this.state.inventories)
        }) 
    }
    // getInventoryId(id) { 
    //     axios.get(`http://localhost:8080/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9/inventory`+ id)
    //     console.log('id means', id)
    // // getInventoryList(warehouseID, id) { 
    // //     axios.get(`http://localhost:8080/` + warehouseID + `/inventory/`+ id)
    //     .then((response) => {
    //         console.log('GET INVENTORY SELECTEDID DATA', response)
    //         this.setState({
    //             selectedInventory: response.data,
    //         })
    //         this.getInventory(response.data[0].id)
    //         // console.log(selectedInventory)
    //     }
    // )}
    componentDidMount() {
        this.getInventory()
        console.log('PARAMS ID MEANS: WAREHOUSE ID:: ', this.props.match.params.id)
    }
    render() {
        // if(!this.state.inventories) {
        //     return <div>Page does not exit</div>
        // }
        //     const findInventory = this.state.inventories.find((id) => id !== this.state.inventories) 

        // console.log('FIND THE INVENTORY:: ', findInventory)
        return (
            <div className="inventories">
                <AddInventory inventories={this.state.inventories}/>
            </div>
        )
    }
}
export default Inventory