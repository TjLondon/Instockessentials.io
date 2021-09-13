import './DetailsWarehouse.scss'
import { Component } from 'react'
import DetailsWarehousesList from '../../components/DetailsWarehouseList/DetailsWarehouseList'
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
            <div className='details'>

                <section className='head'>
                    <div className='head__main'>
                        <img className='head__arrow' src='http://localhost:8080/Assets/Icons/arrow_back-24px.svg' alt='arrow to go back' />
                        <h2 className='head__title'>King West</h2>
                    </div>
                    <button className='head__action'>
                        <img className='head__edit' src='http://localhost:8080/Assets/Icons/edit-white-24px.svg' alt='editing symbol' />
                        <p className='head__edit-text'>Edit</p>
                    </button>
                </section>

                <section className='info'>
                    <div className='info__address'>
                        <h6 className='info__address-title'>WAREHOUSE ADDRESS:</h6>
                        <p className='info__address-text'>469 King Street West, <br />Toronto, CAN</p>
                    </div>
                    <div className='info__contact'>
                        <div className='info__name'>
                            <h6 className='info__name-title'>CONTACT NAME:</h6>
                            <p className='info__name-text'>Graeme Lyon <br />Warehouse Manager</p>
                        </div>
                        <div className='info__information'>
                            <h6 className='info__information-title'>CONTACT INFORMATION</h6>
                            <p className='info__information-text'>+1 (647) 504-0911<br />glyon@instock.com</p>
                        </div>
                    </div>
                </section>

                <DetailsWarehousesList warehouses={this.state.warehouses} />

            </div>
        )
    }
}

export default Warehouse;