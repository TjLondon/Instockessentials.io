import './DetailsWarehouseItem.scss'
import { Link } from 'react-router-dom'

const DetailsWarehouseItem = (warehouses) => {
    return (
        <li key={warehouses.id} className='item'>
            <div className='item__container'>
                <div className='item__column'>
                    <div className='item__category-container'>
                        <h5 className='item__category'>INVENTORY ITEM</h5>
                        <div className='item__link item__content'>
                            <Link to={`/${warehouses.id}`} >{warehouses.name}</Link>
                            <img src='http://localhost:8080/Assets/Icons/chevron_right-24px.svg' alt='arrow' />
                        </div>
                    </div>
                    <div className='item__category-container'>
                        <h5 className='item__category'>CATEGORY</h5>
                        <div className='item__content'>
                            <p className='item__info'>{warehouses.address},</p>
                            <p className='item__info'>{warehouses.city}, {warehouses.country}</p>
                        </div>
                    </div>
                </div>
                <div className='item__column'>
                    <div className='item__category-container'>
                        <h5 className='item__category'>STATUS</h5>
                        <div className='item__content'>
                            <p className='item__info'>{warehouses.contact.name}</p>
                        </div>
                    </div>
                    <div className='item__category-container'>
                        <h5 className='item__category'>QUANTITY</h5>
                        <div  className='item__content'>
                            <p className='item__info'>{warehouses.contact.phone}</p>
                            <p className='item__info'>{warehouses.contact.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='item__actions'>
                <h5 className='item__category item__category--actions'>ACTIONS</h5>
                <div className='item__icons'>
                    <img className='item__icon' src='http://localhost:8080/Assets/Icons/delete_outline-24px.svg' alt='delete button'/>
                    <img className='item__icon' src='http://localhost:8080/Assets/Icons/edit-24px.svg' alt='edit button'/>
                </div>
            </div>
        </li>
    )
}

export default DetailsWarehouseItem;