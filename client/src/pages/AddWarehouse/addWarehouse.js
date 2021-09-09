import React, { Component } from "react";
import "./addWarehouse.scss"


class addWarehouse extends Component {


  render() {
    return (
      <div className="add-warehouse">
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
        <h2 className="add-warehouse__subtitle">Warehouse Details</h2>
        <form className="add-warehouse__form" action="submit">
          <label className="add-warehouse__form--label" htmlFor="">Warehouse name</label>
          <input className="add-warehouse__form--input" type="text" placeholder="Warehouse Name" />
          <label className="add-warehouse__form--label" htmlFor="">Street Address</label>
          <input className="add-warehouse__form--input" type="text" placeholder="Street Address" />
          <label className="add-warehouse__form--label" htmlFor="">City</label>
          <input className="add-warehouse__form--input" type="text" placeholder="City" />
          <label className="add-warehouse__form--label" htmlFor="">Country</label>
          <input className="add-warehouse__form--input" type="text" placeholder="Country" />
          <h2 className="add-warehouse__subtitle">Contact Details</h2>
          <label className="add-warehouse__form--label" htmlFor="">Contact Name</label>
          <input className="add-warehouse__form--input" type="text" placeholder="Contact name"/>
          <label className="add-warehouse__form--label" htmlFor="">Position</label>
          <input className="add-warehouse__form--input" type="text" placeholder="Position"/>
          <label className="add-warehouse__form--label" htmlFor="">Phone Number</label>
          <input className="add-warehouse__form--input" type="text" placeholder="Phone number"/>
          <label className="add-warehouse__form--label" htmlFor="">Email</label>
          <input className="add-warehouse__form--input" type="text" placeholder="Email"/>
          <div className="add-warehouse__form--buttonbox">
          <button className="add-warehouse__form--cancel">Cancel</button>
          <button className="add-warehouse__form--button">+ Add Warehouse</button>
          </div>
        </form>
      </div>
    );
  }
}

export default addWarehouse;
