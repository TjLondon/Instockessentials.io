import React from 'react'
import './EditInventory.scss';

function EditInventory() {
    return (
        <div className='add-inventory'>

            <section className='head'>
                <img className='head__arrow' src='http://localhost:8080/Assets/Icons/arrow_back-24px.svg' alt='arrow back' />
                <h2 className='head__title'>Add New Inventory Item</h2>
            </section>

            <section className='option'>

                <section className='details'>
                    <h2 className='details__title'>Item Details</h2>
                    <div className='details__item'>
                        <label className='details__item-name'>Item Name</label><br />
                        <input className='details__item-input' placeholder='Television' />
                    </div>
                    <div className='details__description'>
                        <label className='details__description-name'>Description</label><br />
                        <textarea className='details__description-input' placeholder='This 50", 4K LED TV provides a crystal-clear pricture and vivid colors.' />
                    </div>
                    <div className='details__category'>
                        <label className='details__category-name'>Category</label><br />
                        <select className='details__category-input'>
                            <option className='details__category-choice'>Electronics</option>
                        </select>
                    </div>
                </section>

                <section className='ava'>

                    <h2 className='ava__title'>Item Availability</h2>

                    <section className='ava__option'>
                        <h6 className='ava__status'>Status</h6>
                        <div className='ava__stockflex'>
                            <div className='ava__instock'>
                                <input className='ava__instock-option' type='radio' />
                                <label className='ava__instock-text' for='ava_instock-option'>In stock</label>
                            </div>
                            <div className='ava__outstock'>
                                <input className='ava__outstock-option' type='radio' />
                                <label className='ava__outstock-text' for='ava_instock-option'>Out of stock</label>
                            </div>
                        </div>
                    </section>

                    <section className='ava__house'>
                        <label className='ava__house-title'>Warehouse</label><br />
                        <select className='ava__house-dropdown'>
                            <option className='ava__choice' value=''>Manhattan</option>
                        </select>
                    </section>
                </section>

            </section>

            <section className='button'>
                <button className='button__cancel'>Cancel</button>
                <button className='button__add'>Save</button>
            </section>
        </div>
    )
}

export default EditInventory
