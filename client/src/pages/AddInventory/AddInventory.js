import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'

function AddInventory({ inventories }) {
    console.log({inventories})
    return (
        <div className="inventories__container">
            {inventories.map((inventory) => {
                <Link 
                to={`/:id/inventory`}
                key={inventory.id}
                className="inventories__List">
                <div className='inventories__itemName'>{inventory.itemName}</div>
                <div className="inventories__category">{inventory.category}</div>
                <div className="inventories__status">{inventory.status}</div>
                <div className="inventories__quantity">{inventory.quantity}</div>
                <div className="inventories__warehouseID">{inventory.warehouseID}</div>
                <div className="inventories__warehouseName">{inventory.warehouseName}</div>
                </Link>
            })}
        </div>
    )
}
export default AddInventory
