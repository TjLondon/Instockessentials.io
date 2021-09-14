import React from 'react'
import './InventoryColumnHeader.scss'

const InventoryColumnHeader = () => {
    return (
        <div className="inventory__subtitle-header">
            <div className="inventory__subtitle-container" > 
                <div className="inventory__subtitle--column"><h4>INVENTORY ITEM</h4>
                    <img className="inventory__subtitle-img"  src={`http://localhost:8080/Assets/Icons/sort-24px.svg`} alt='/' />
                </div>
                    
                <div className="inventory__subtitle--column"><h4>CATEGORY</h4>
                    <img className="inventory__subtitle-img" src={`http://localhost:8080/Assets/Icons/sort-24px.svg`} alt='/' />
                </div>

                <div className="inventory__subtitle--column"><h4>STATUS</h4> 
                    <img className="inventory__subtitle-img" src={`http://localhost:8080/Assets/Icons/sort-24px.svg`} alt='/' />
                </div>
                <div className="inventory__subtitle--column"><h4>QTY</h4>
                    <img className="inventory__subtitle-img" src={`http://localhost:8080/Assets/Icons/sort-24px.svg`} alt='/' />
                </div>
                <div className="inventory__subtitle--column"><h4>WAREHOUSE</h4> 
                    <img className="inventory__subtitle-img" src={`http://localhost:8080/Assets/Icons/sort-24px.svg`} alt='/' />
                </div>
                <div className="inventory__subtitle--column"><h4>ACTIONS</h4></div>
            </div>
        </div>
    )
}
export default InventoryColumnHeader