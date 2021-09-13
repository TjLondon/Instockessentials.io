import React from 'react'
import './InventoryItemDetails.scss'
import { Link } from 'react-router-dom'

function InventoryItemDetails ( props ) {
    const { inventorylist, itemName, id } = props
    console.log('inventory list', inventorylist)
    console.log('itemName', itemName)
    console.log('id', id)
    return (
        <div>
            <div className="inventorydetails__container">
                <div className="inventorydetails__itemanme-edit">
                    <div className='inventorydetails__itemName'>{itemName}
                        <div className='inventorydetails__itemName--backarrow'>
                        </div>
                    </div>
                    <div className="inventory__actions--edit-box">
                        <div className="inventory__actions--edit">
                            <img src={`http://localhost:8080/Assets/Icons/edit-24px.svg`} alt='/'/>Edit
                        </div>
                <hr className="inventorydetails__divider-top"/>
                    </div>
                </div>
                <div>
                    {inventorylist.map((inventory) => (
                        <Link to={`/inventory/${id}`}
                        key={inventory.id} 
                        {...inventory}/>
                    ))}
                    <hr className="inventorydetails__divider-bottom"/>
                </div>
            </div>
        </div>
    
    )
}
export default InventoryItemDetails