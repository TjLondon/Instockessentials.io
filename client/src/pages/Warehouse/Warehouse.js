import './Warehouse.scss'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import WarehousesList from '../../components/WarehousesList/WarehousesList'
import instockRequests from '../../utilities/apiCalls'

class Warehouse extends Component {
    state = {
        warehouses: []
    }

    componentDidMount() {
        instockRequests.getAllWarehouses().then(response => {
            this.setState({
                warehouses: response.data
            })
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <div className='warehouses'>
                <div className='warehouses__header'>
                    <h1 className='warehouses__title'>Warehouses</h1>
                    <div className='warehouses__container'>
                        <SearchBar className='warehouses__search' />
                        <Link to='/add' className='warehouses__button'>+ Add New Warehouse</Link>
                    </div>                
                </div>
                <WarehousesList warehouses={this.state.warehouses} />
            </div>
        )
    }
}

export default Warehouse;