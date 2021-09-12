import './WarehousesList.scss'
import WarehousesListItem from '../WarehouseListItem/WarehouseListItem'

const WarehousesList = ({ warehouses }) => {
    return (
        <div className='warehouse-list'>
            {/* <div className='warehouse-list__categories'>
                <h5>Warehouse</h5>
                <h5>Address</h5>
                <h5>Contact Name</h5>
                <h5>Contact Information</h5>
                <h5>Actions</h5>
            </div> */}
            <ul className='warehouse-list__container'>
                {warehouses.map(WarehousesListItem)}
            </ul>
        </div>

    )
}

export default WarehousesList