import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import InventoryItemDetails from '../InventoryItemDetails/InventoryItemDetails'
import { Link } from 'react-router-dom'

const InventoryList = ( props ) => {
    const {itemName, category, status, quantity, warehouseName, inventories, id } = props
    console.log('category::' , category)
    console.log('status::' , status)
    console.log('quantity::' , quantity)
    console.log('warehouseName::' , warehouseName)
    console.log('inventories::' , inventories)

    const stockStatus = () => {
        if (quantity !== 0) {
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
                {!inventories ? null : inventories.map((inventory) => (
                    <Link 
                    to={`/inventory/${id}`} 
                    key={inventory.id} >
                <hr className="inventory__divider"/>
                    <div className="inventory__divcontainer">
                        <div className="inventory__item-category">
                            <div className="inventory__subtitle inventory__subtitle--inventoryitem">INVENTORY ITEM</div>
                            <div className='inventory__itemName'>{itemName}
                            <div className='inventory__itemName--arrow'><img className="inventory__itemName--arrowimg"src={`http://localhost:8080/Assets/Icons/chevron_right-24px.svg`} alt="/" /></div>
                            </div>
                            <div className="inventory__subtitle inventory__subtitle--category">CATEGORY</div>
                            <div className="inventory__p2 inventory__category">{category}</div>
                        </div>
                        <div className="inventory__divitems">
                            <div className="inventory__subtitle inventory__subtitle--status">STATUS</div>
                            <div className={`inventory__p2 inventory__status${stockStatus()}`}>{status}</div>
                            <div className="inventory__subtitle inventory__subtitle--qty">QTY</div>
                            <div className="inventory__p2 inventory__quantity">{quantity}</div>
                            <div className="inventory__subtitle inventory__subtitle--warehouse">WAREHOUSE</div>
                            <div className="inventory__p2 inventory__warehouse">{warehouseName}</div>
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