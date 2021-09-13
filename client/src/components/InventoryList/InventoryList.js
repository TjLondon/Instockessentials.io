import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './InventoryList.scss'
import { Link } from 'react-router-dom'
import InventoryColumnHeader from '../InventoryColumnHeader/InventoryColumnHeader'

const InventoryList = ({ inventories } ) => {
    // const {itemName, category, status, quantity, warehouseName, id } = props
    console.log('category::' , inventories)
    console.log('status::' , inventories.status)
    console.log('quantity::' , inventories.quantity)
    console.log('warehouseName::' , inventories.warehouseName)
    // console.log('inventories::' , props)

    const stockStatus = () => {
        if (inventories.quantity !== 0) {
            return "In Stock"
        } else {
            return 'Out of Stock'
        }
    }
    return (
        <div>
            <div className="inventories__container">
                <div className="inventories__inventory-search-button">
                    <h2 className="inventories__title">Inventory</h2>
                    <div className="inventories__search-button">
                        <SearchBar /> 
                            <button className="inventories__buttonbox" type="submit">+ Add New Item
                            </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="inventory__subtitle-header">
                    <InventoryColumnHeader />
                </div>
                {[inventories].map((inventory) => (
                    <Link 
                    to={`/inventory/${inventory.id}`} 
                    key={inventory.id}
                    className="id">
                <hr className="inventory__divider"/>
                    <div className="inventory__divcontainer">
                        <div className="inventory__item-category">
                            <div className="inventory__subtitle inventory__subtitle--inventoryitem">INVENTORY ITEM</div>
                                
                                <div className='inventory__itemName--arrow'>
                                    <div className='inventory__itemName'>
                                        <Link to={`/inventory/${inventory.id}`}>{inventories.itemName}
                                        <img className="inventory__itemName--arrowimg"src={`http://localhost:8080/Assets/Icons/chevron_right-24px.svg`} alt="/" />
                                        </Link>
                                    </div>
                                </div>
                            <div className="inventory__subtitle inventory__subtitle--category">CATEGORY</div>
                                <div className="inventory__p2 inventory__category">{inventories.category}</div>
                        </div>
                        <div className="inventory__divitems">
                            <div className="inventory__subtitle inventory__subtitle--status">STATUS</div>
                            <div className={`inventory__p2 inventory__status${stockStatus()}`}>{inventories.status}</div>
                            <div className="inventory__subtitle inventory__subtitle--qty">QTY</div>
                            <div className="inventory__p2 inventory__quantity">{inventories.quantity}</div>
                            <div className="inventory__subtitle inventory__subtitle--warehouse">WAREHOUSE</div>
                            <div className="inventory__p2 inventory__warehouse">{inventories.warehouseName}</div>
                        </div>
                    </div>
                    <div className="inventory__subtitle inventory__actions--title">ACTIONS</div>
                    <div className="inventory__actions">
                        <div className="inventory__actions--edit"><img src={`http://localhost:8080/Assets/Icons/edit-24px.svg`} alt="/"/></div>
                        <div className="inventory__actions--delete"><img src={`http://localhost:8080/Assets/Icons/delete_outline-24px.svg`} alt="/"/></div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default InventoryList