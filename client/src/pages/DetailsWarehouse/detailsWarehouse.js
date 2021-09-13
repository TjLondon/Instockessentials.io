import './DetailsWarehouse.scss'
import { Component } from 'react'
import DetailsWarehousesList from '../../components/DetailsWarehouseList/DetailsWarehouseList'
import instockRequests from '../../utilities/apiCalls'
import { Link } from 'react-router-dom'

class Warehouse extends Component {
    state = {
        warehouses: [],
        selectedWarehouse: []
    }

    getSingleWarehouse = (id) => {
        instockRequests.getSingleWarehouse(id).then(response => {
            this.setState({
                selectedWarehouse: response.data
            })
        })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        instockRequests.getAllWarehouses().then(response => {
            this.setState({
                warehouses: response.data
            })
            const id = this.props.match.params.id
            this.getSingleWarehouse(id)
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <div className='details'>
                <section className='head'>
                    <div className='head__main'>
                        <Link to={`/`}>
                            <img className='head__arrow' src='http://localhost:8080/Assets/Icons/arrow_back-24px.svg' alt='arrow to go back' />
                        </Link>
                        <h2 className='head__title'>{this.state.selectedWarehouse.name}</h2>
                    </div>
                    <button className='head__action'>
                        <img className='head__edit' src='http://localhost:8080/Assets/Icons/edit-white-24px.svg' alt='editing symbol' />
                        <Link to={`/${this.state.selectedWarehouse.id}/edit`}>
                            <p className='head__edit-text'>Edit</p>
                        </Link>
                    </button>
                </section>

                <section className='info'>
                    <div className='info__address'>
                        <h6 className='info__address-title'>WAREHOUSE ADDRESS:</h6>
                        <p className='info__address-text'>{this.state.selectedWarehouse.address}, <br />{this.state.selectedWarehouse.city}</p>
                    </div>
                    <div className='info__contact'>
                        <div className='info__name'>
                            <h6 className='info__name-title'>CONTACT NAME:</h6>
                            <p className='info__name-text'>
                                {this.state.selectedWarehouse.contact && this.state.selectedWarehouse.contact.name} <br />
                                {this.state.selectedWarehouse.contact && this.state.selectedWarehouse.contact.position}
                            </p>
                        </div>
                        <div className='info__information'>
                            <h6 className='info__information-title'>CONTACT INFORMATION</h6>
                            <p className='info__information-text'>
                                {this.state.selectedWarehouse.contact && this.state.selectedWarehouse.contact.phone}<br />
                                {this.state.selectedWarehouse.contact && this.state.selectedWarehouse.contact.email}
                            </p>
                        </div>
                    </div>
                </section>
                <DetailsWarehousesList warehouses={this.state.warehouses} />
            </div>
        )
    }
}

export default Warehouse;