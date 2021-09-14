import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './InventoryList.scss'
import { Link } from 'react-router-dom'
import InventoryColumnHeader from '../InventoryColumnHeader/InventoryColumnHeader'


const InventoryList = ({ inventories, selectedInventories, inventoriesModal }) => {
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
                        <Link to={`/inventory/add`}>
                            <button className="inventories__buttonbox" type="submit">+ Add New Item
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="inventory__subtitle-header">
                <InventoryColumnHeader />
            </div>

            <div className="inventory__allcontent-container">
                {inventories.map((inventory) => {
                    return (
                        <>
                            <hr className="inventory__divider" />
                            <div className='inventory__allcontent'>
                                <div className="inventory__divcontainer">
                                    <div className="inventory__item-category">
                                        <h5 className="inventory__subtitle inventory__subtitle--inventoryitem">INVENTORY ITEM</h5>

                                        <div className='inventory__itemName--arrow'>
                                            <div className='inventory__itemName'>
                                                <Link to={`/inventory/${inventory.id}`}>{inventory.itemName}
                                                </Link>
                                                <img className="inventory__itemName--arrowimg" src={`http://localhost:8080/Assets/Icons/chevron_right-24px.svg`} alt="/" />
                                            </div>
                                        </div>
                                        <div className="inventory__divitems">
                                            <h5 className="inventory__subtitle">CATEGORY</h5>
                                            <div className="inventory__p2">
                                                <p className="inventory__category">{inventory.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inventory__divitems">
                                        <div className="inventory__subtitle">
                                            <h5 className="inventory__subtitle--status">STATUS</h5>
                                        </div>
                                        <div className={`inventory__p2 inventory__status${stockStatus()}`}> {inventory.status}
                                        </div>

                                        <div className="inventory__subtitle">
                                            <h5 className="inventory__subtitle--qty">QTY</h5>
                                        </div>
                                        <div className="inventory__p2">
                                            <p className="inventory__quantity">{inventory.quantity}</p>
                                        </div>

                                        <div className="inventory__subtitle">
                                            <h5 className="inventory__subtitle--warehouse">WAREHOUSE</h5>
                                        </div>
                                        <div className="inventory__p2">
                                            <p className="inventory__warehouse">{inventory.warehouseName}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="inventory__subtitle">
                                    <h5 className="inventory__actions--title">ACTIONS</h5>
                                </div>
                                <div className="inventory__actions">
                                    <div className="inventory__actions--edit">
                                        <img src={`http://localhost:8080/Assets/Icons/edit-24px.svg`} alt="/" />
                                    </div>
                                    <div className="inventory__actions--delete">
                                        <img src={`http://localhost:8080/Assets/Icons/delete_outline-24px.svg`} alt="/" />
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div >
    )
}
export default InventoryList