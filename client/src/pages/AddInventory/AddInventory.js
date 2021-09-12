import React from 'react'
import './AddInventory.scss';

function AddInventory() {
    return (
        <div className='add-inventory'>

            <section className='head'>
                <img className='head__arrow' src='http://localhost:8080/Assets/Icons/arrow_back-24px.svg' alt='arrow back'/>
                <h2 className='head__title'>Add New Inventory</h2>
            </section>

            <section className='option'>

                <section className='details'>
                    <div className='details__item'>
                        <label className='details__item-name'>Item Name</label>
                        <input className='details__item-input'/>
                    </div>
                    <div className='details__description'>
                        <label className='details__description-name'>Description</label>
                        <input className='details__description-input'/>
                    </div>
                    <div className='details__catagory'>
                        <label className='details__catagory-name'>Catagory</label>
                        <input classname='details__catagory-select'>
                            <img className='details__catagory-pic' src='http://localhost:8080/Assets/Icons/arrow_drop_down-24px.svg'/>
                        </input>
                    </div>
                </section>

                <section className='ava'>
                    <h6 className='ava__title'>Status</h6>
                    <section className='ava__option'>
                        <div className='ava__instock'>
                            <input className='ava__instock-option' type='radio'/>
                            <label className='ava__instock-text' for='ava_instock-option'>In stock</label>
                        </div>

                        <div className='ava__outstock'>
                            <input className='ava__outstock-option' type='radio'/>
                            <label className='ava__outstock-text' for='ava_instock-option'>Out of stock</label>
                        </div>
                    </section>
                    
                    <section className='ava__house'>
                        <label className='ava__house-qty'>Quantity</label>
                        <input className='ava__house-num'/>
                        <label className='ava__house-title'>Warehouse</label>
                        <input classname='ava__house-dropdown'>
                            <img className='ava_house-pic' src='http://localhost:8080/Assets/Icons/arrow_drop_down-24px.svg'/>
                        </input>
                    </section>
                </section>

                <section className='button'>
                    <button className='button__cancel'>Cancel</button>
                    <button className='button__add'>+ Add Item</button>
                </section>

            </section>
            
        </div>
    )
}

export default AddInventory
