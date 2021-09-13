import './DetailsWarehouseList.scss';
import DetailsWarehousesItem from '../DetailsWarehouseItem/DetailsWarehouseItem';

const DetailsWarehouseList = ({ warehouses }) => {
    return (
        <div className='warehouse-list'>
            <div className='warehouse-list__categories'>
                <div className='warehouse-list__category-container'>
                    <h5 className='warehouse-list__category warehouse-list__category--warehouses'>INVENTORY ITEM</h5>
                    <img src='http://localhost:8080/Assets/Icons/sort-24px.svg' alt='sort button' />
                </div>
                <div className='warehouse-list__category-container'>
                    <h5  className='warehouse-list__category warehouse-list__category--address'>CATEGORY</h5>
                    <img src='http://localhost:8080/Assets/Icons/sort-24px.svg' alt='sort button' />
                </div>
                <div className='warehouse-list__category-container'>
                    <h5  className='warehouse-list__category warehouse-list__category--name'>STATUS</h5>
                    <img src='http://localhost:8080/Assets/Icons/sort-24px.svg' alt='sort button' />
                </div>
                <div className='warehouse-list__category-container'>
                    <h5  className='warehouse-list__category warehouse-list__category--phone'>QUANTITY</h5>
                    <img src='http://localhost:8080/Assets/Icons/sort-24px.svg' alt='sort button' />
                </div>
                <div className='warehouse-list__category-container'>
                    <h5  className='warehouse-list__category warehouse-list__category--actions'>ACTIONS</h5>
                </div>
            </div>
            <ul className='warehouse-list__container'>
                {warehouses.map(DetailsWarehousesItem)}
            </ul>
        </div>

    )
}

export default DetailsWarehouseList;