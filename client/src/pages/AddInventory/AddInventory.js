import React from 'react'
import { Link } from 'react-router-dom'
// import './home.scss'
import './AddInventory.scss'

function AddInventory({ inventories }) {
    console.log({ inventories })
    return (
        <div className="inventories__container">
            <Link to={`/:id/inventory/:itemId`}
            className='inventory__itemName--arrow'>
            </Link>
            <Link
                to={`/:id/inventory/:itemId/edit`}
                className="inventory__actions--edit">
            </Link>
            {inventories.map((inventory) => {
                <div
                    key={inventory.id}
                    className="inventory__List">
                    <div className='inventory__itemName'>{inventory.itemName}
                        <div className='inventory__itemName--arrow'></div>
                    </div>
                    <div className="inventory__category">{inventory.category}</div>
                    <div className="inventory__status">{inventory.status}</div>
                    <div className="inventory__quantity">{inventory.quantity}</div>
                    <div className="inventory__warehouse">{inventory.warehouseName}</div>
                    <div className="inventory__actions--edit"></div>
                    <div className="inventory__actions--delete"></div>
                </div>
            })}
        </div>
    )
}
export default AddInventory
