import React from 'react'
import { Link } from 'react-router-dom'
// import './home.scss'
import './AddInventory.scss'
import SearchBox from '../../components/SearchBox/SearchBox'

function AddInventory({ inventories }) {
    console.log({ inventories })
    return (
        <div className="inventories__container">
            <div className="inventories__inventory-search-button">
                <h2 className="inventories__title">Inventory</h2>
                <div className="inventories__search-button">
                    <SearchBox placeholder={'Search...'}/> 
                        <button className="inventories__buttonbox" type="submit">+ Add New Item
                        </button>
                </div>
            </div>
            <Link to={`/:id/inventory/:itemId`}
            className='inventory__itemName--arrow'>
            </Link>
            <Link
                to={`/:id/inventory/:itemId/edit`}
                className="inventory__actions--edit">
            </Link>
            {inventories.map((inventory) => (
                <div
                    key={inventory.id}
                    className="inventory__List">
                    <hr className="inventory__divider"/>
                    <div className="inventory__divcontainer">
                        <div className="inventory__item-category">
                            <div className="inventory__subtitle inventory__subtitle--inventoryitem">INVENTORY ITEM</div>
                            <div className='inventory__itemName'>{inventory.itemName}
                            <div className='inventory__itemName--arrow'><img className="inventory__itemName--arrowimg"src={`http://localhost:8080/Assets/Icons/chevron_right-24px.svg`} alt="/" /></div>
                            </div>
                            <div className="inventory__subtitle inventory__subtitle--category">CATEGORY</div>
                            <div className="inventory__p2 inventory__category">{inventory.category}</div>
                        </div>
                        <div className="inventory__divitems">
                            <div className="inventory__subtitle inventory__subtitle--status">STATUS</div>
                            <div className="inventory__p2 inventory__status">{inventory.status}</div>
                            <div className="inventory__subtitle inventory__subtitle--qty">QTY</div>
                            <div className="inventory__p2 inventory__quantity">{inventory.quantity}</div>
                            <div className="inventory__subtitle inventory__subtitle--warehouse">WAREHOUSE</div>
                            <div className="inventory__p2 inventory__warehouse">{inventory.warehouseName}</div>
                        </div>
                    </div>
                    <div className="inventory__subtitle inventory__actions--title">ACTIONS</div>
                    <div className="inventory__actions">
                        <div className="inventory__actions--edit"><img src={`http://localhost:8080/Assets/Icons/edit-24px.svg`} alt="/"/></div>
                        <div className="inventory__actions--delete"><img src={`http://localhost:8080/Assets/Icons/delete_outline-24px.svg`} alt="/"/></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default AddInventory
