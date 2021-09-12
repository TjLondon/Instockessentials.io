import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
// import './home.scss'
=======
import './AddInventory.scss'
>>>>>>> 3a4d86e65a5514a15f4262778aa3ac07b3e7cee6

function AddInventory({ inventories }) {
    console.log({ inventories })
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
