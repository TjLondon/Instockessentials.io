import React from 'react'
import './InventoryItemDetails.scss'
import { Link } from 'react-router-dom'

function InventoryItemDetails ( props ) {
    const { InventoryList, itemName, id } = props
    return (
        <div>
            {!InventoryList ? null : InventoryList.map((inventory) => (
                <Link to={`/inventory/${id}`}
                key={inventory.id} 
                {...inventory}/>
            ))}
            <div className="inventorydetails__container">
                <div className="inventorydetails__itemanme-edit">
                    <div className='inventorydetails__itemName'>{itemName}
                        <div className='inventorydetails__itemName--backarrow'>
                        </div>
                    </div>
                    <div className="inventory__actions--edit"><img src={`http://localhost:8080/Assets/Icons/edit-24px.svg`} alt='/'/>
                    </div>
                </div>
                <hr className="inventorydetails__divider"/>
            </div>
        </div>
    
    )
}
export default InventoryItemDetails