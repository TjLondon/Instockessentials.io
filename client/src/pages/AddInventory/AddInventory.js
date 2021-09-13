import React from 'react'
import { Component } from 'react';
import instockRequests from '../../utilities/apiCalls';
import './AddInventory.scss';

class AddInventory extends Component() {

    state = {
        warehouses: null,
        categories: null
    }

    componentDidMount() {
        postNewInventoryItem: (data) => instockCalls.post('/inventory', data);
        instockRequests.getAllWarehouses().then(
            response => this.setState({
                warehouses: response.data,
            })
        )
        instockRequests.getAllInventories().then(
            response => this.setState({
                inventories: response.data
            }
        ))
    }


    onSubmitHandler = (e) => {
        e.preventDefault()

        const itemName = e.target.itemName.value
        const description = e.target.description.value
        const category = e.target.category.value
        const status = e.target.status.value
        const quantity = e.target.quantity.value
        const warehouse = e.target.warehouse.value

        instockRequests.postNewInventoryItem({ 
            itemName, description, category, status, quantity, warehouse })
        .then(() => {
            console.log('New inventory item has been created')
        }).catch((error) => console.log(error))
    }


    render() {
    return (
        <form className='add-inventory' onsubmit=''>

            <section className='head'>
                <img className='head__arrow' src='http://localhost:8080/Assets/Icons/arrow_back-24px.svg' alt='arrow back'/>
                <h2 className='head__title'>Add New Inventory Item</h2>
            </section>

            <section className='option'>

                <section className='details'>
                    <h2 className='details__title'>Item Details</h2>
                    <div className='details__item'>
                        <label className='details__item-name' >Item Name</label><br/>
                        <input className='details__item-input' name='item__name' id='name__id' placeholder='Item Name'/>
                    </div>
                    <div className='details__description'>
                        <label className='details__description-name'>Description</label><br/>
                        <textarea className='details__description-input' name='item_text' id='text__id' placeholder='Please enter a brief item description...'/>
                    </div>
                    <div className='details__category'>
                        <label className='details__category-name'>Category</label><br/>
                        <select className='details__category-input'>
                            <option className='details__category-choice'>Please select</option>
                        </select>
                    </div>
                </section>

                <section className='ava'>
                    
                    <h2 className='ava__title'>Item Availability</h2>

                    <section className='ava__option'>
                        <h6 className='ava__status'>Status</h6>
                        <div className='ava__stockflex'>
                            <div className='ava__instock'>
                                <input className='ava__instock-option' name='item__instock' id='instock__id' type='radio'/>
                                <label className='ava__instock-text' for='ava_instock-option'>In stock</label>
                            </div>
                            <div className='ava__outstock'>
                                <input className='ava__outstock-option' name='item__outstock' id='outstock__id' type='radio'/>
                                <label className='ava__outstock-text' for='ava_instock-option'>Out of stock</label>
                            </div>
                        </div>
                    </section>
                    
                    <section className='ava__house'>
                        <label className='ava__house-qty'>Quantity</label><br/>
                        <input className='ava__house-num' name='item__num' id='num__id' placeholder='0'/><br/>
                        <label className='ava__house-title'>Warehouse</label><br/>
                        <select className='ava__house-dropdown'>
                            <option className='ava_choice' value={this.state.warehouses.name}>Please Select</option>
                        </select>
                    </section>
                </section>

            </section>
            
            <section className='button'>
                <button className='button__cancel'>Cancel</button>
                <button className='button__add'>+ Add Item</button>
            </section>       
        </form>
    )
}
}

export default AddInventory;
