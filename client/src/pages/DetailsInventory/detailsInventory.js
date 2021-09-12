import React from 'react'
import { Link } from 'react-router-dom'

function DetailsInventory({ filteredInventory }) {
    const inventories = filteredInventory
    console.log(inventories)
    return (
        <div className="inventorydetails__container">
            <Link 
            to={'/:id/inventory'}
            className="inventorydetails__itemName--backarrow">
            </Link>
            <Link
                to={`/:id/inventory/:itemId/edit`}
                className="inventory__actions--edit">
            </Link>
            {inventories.map((inventory) => {
                <div
                    key={inventory.id}
                    className="inventorydetails__list">
                    <div className='inventorydetails__itemName'>{inventory.itemName}
                        <div className='inventorydetails__itemName--backarrow'></div>
                    </div>
                    <div className="inventorydetails__description">{inventory.description}</div>
                    <div className="inventorydetails__category">{inventory.category}</div>
                    <div className="inventorydetails__status">{inventory.status}</div>
                    <div className="inventorydetails__quantity">{inventory.quantity}</div>
                    <div className="inventorydetails__warehouse">{inventory.warehouseName}</div>
                    <div className="inventory__actions--edit"></div>
                </div>
            })}
        </div>
    )
}

export default DetailsInventory
