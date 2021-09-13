import './Warehouse.scss'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import WarehousesList from '../../components/WarehousesList/WarehousesList'
import instockRequests from '../../utilities/apiCalls'
import DeleteModal from '../../components/DeleteModal/DeleteModal'
import axios from 'axios'

class Warehouse extends Component {
    state = {
        warehouses: [],
        selectedWarehouse: null,
        toggleModal: false,
    }

    componentDidMount() {
        instockRequests.getAllWarehouses().then(response => {
            this.setState({
                warehouses: response.data
            })
        }).catch(error => console.log(error))
    }

    warehouseModal = (warehouse) => {
        this.setState({
            toggleModal: true,
            selectedWarehouse: warehouse
        })
    }

    closeWarehouseModal = () => {
        this.setState({
            toggleModal: false,
        })
    }

    warehouseDelete = (id) => {
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
            <div className='warehouses'>
                <DeleteModal
                    toggleModal={this.state.toggleModal}
                    selectedWarehouse={this.state.selectedWarehouse}
                    warehouseModal={this.warehouseModal}
                    closeWarehouseModal={this.closeWarehouseModal}
                    warehouseDelete={this.warehouseDelete}
                />
                <div className='warehouses__header'>
                    <h1 className='warehouses__title'>Warehouses</h1>
                    <div className='warehouses__container'>
                        <SearchBar className='warehouses__search' />
                        <Link to='/add' className='warehouses__button'>+ Add New Warehouse</Link>
                    </div>
                </div>
                <WarehousesList
                    warehouses={this.state.warehouses}
                    warehouseModal={this.warehouseModal}
                    warehouseDelete={this.warehouseDelete} />
            </div>
        )
    }
}

export default Warehouse;