import React from 'react'
import { Component } from 'react';
import instockRequests from '../../utilities/apiCalls';
import './AddInventory.scss';

class AddInventory extends Component{

    state = {
        warehouses: [],
        categories: []
    }

    componentDidMount() {
        instockRequests.getAllWarehouses().then((
            response) =>{
            console.log(response.data)
            this.setState({
                warehouses: response.data,
            })}
        )

        instockRequests.getAddInventory().then((
            response) => {
            console.log(response.data)
            this.setState({
                categories: response.data,
            })}
        )
    }


    onSubmitHandler = (e) => {
        e.preventDefault()

        const itemName = e.target.itemName.value
        const description = e.target.description.value
        const category = e.target.category.value
        const status = e.target.status.value
        const quantity = e.target.quantity.value
        const warehouseName = e.target.warehouseName.value

        const comment = {
            itemName: itemName,
            description: description,
            category: category,
            status: status,
            quantity: quantity,
            warehouseName: warehouseName
        }
        //itemName, description, category, status, quantity, warehouseName
        instockRequests.postNewInventoryItem({ 
            comment })
        .then(() => {
            console.log('New inventory item has been created')

        }).catch((error) => console.log(error))
    }


    render() {
    return (
        <form className='add-inventory' onSubmit={this.onSubmitHandler}>

            <section className='head'>
                <img className='head__arrow' src='http://localhost:8080/Assets/Icons/arrow_back-24px.svg' alt='arrow back'/>
                <h2 className='head__title'>Add New Inventory Item</h2>
            </section>

            <section className='option'>

                <section className='details'>
                    <h2 className='details__title'>Item Details</h2>
                    <div className='details__item'>
                        <label className='details__item-name' >Item Name</label><br/>
                        <input className='details__item-input' name='itemName' id='itemName' placeholder='Item Name'/>
                    </div>
                    <div className='details__description'>
                        <label className='details__description-name'>Description</label><br/>
                        <textarea className='details__description-input' name='description' id='description' placeholder='Please enter a brief item description...'/>
                    </div>
                    <div className='details__category'>
                        <label className='details__category-name'>Category</label><br/>
                        <select className='details__category-input'name='category' id='category'>
                            <option className='details__category-choice'>Please select</option>
                            {this.state.categories.map(cate => {
                                return(
                                <option key={cate.id} value={`${cate.category}`}>
                                    {`${cate.category}`}
                                </option>)
                            })}
                        </select>
                    </div>
                </section>

                <section className='ava'>
                    
                    <h2 className='ava__title'>Item Availability</h2>

                    <section className='ava__option'>
                        <h6 className='ava__status'>Status</h6>
                        <div className='ava__stockflex'>
                            <div className='ava__instock'>
                                <input className='ava__instock-option' name='status' id='instock__id' type='radio'/>
                                <label className='ava__instock-text'>In stock</label>
                            </div>
                            <div className='ava__outstock'>
                                <input className='ava__outstock-option' name='status' id='outstock__id' type='radio'/>
                                <label className='ava__outstock-text' >Out of stock</label>
                            </div>
                        </div>
                    </section>
                    
                    <section className='ava__house'>
                        <label className='ava__house-qty'>Quantity</label><br/>
                        <input className='ava__house-num' name='quantity' id='num__id' placeholder='0'/><br/>
                        <label className='ava__house-title'>Warehouse</label><br/>
                        <select className='ava__house-dropdown' name='warehouseName' id='warehouseName'>
                            <option className='ava__choice'>Please select</option>
                            {this.state.warehouses.map(warehouse => {
                                return(
                                <option key={warehouse.id} value={`${warehouse.name}`}>
                                    {`${warehouse.name}`}
                                </option>)
                            })}
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
