import React, { Component } from "react";

import "./addWarehouse.scss";

class addWarehouse extends Component {
  state = {
    warehouse_name: "",
    street: "",
    city: "",
    country: "",
    contact: "",
    position: "",
    phone: "",
    email: "",
  };

  handleChange = (event) => {
    let isValid = this.isFormValid();

    console.log(isValid);

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFormValid = () => {
    // TO DO: Check if the fields are all filled
    if (
      !this.state.warehouse_name ||
      !this.state.street ||
      !this.state.city ||
      !this.state.country ||
      !this.state.contact ||
      !this.state.position ||
      !this.state.phone ||
      !this.state.email
    ) {
      return false;
    }
    return true;
  };
  handleSubmit = (event) => {
    event.preventDefault();

    
    if (this.isFormValid()) {
      console.log(event.target.value);
      // This is where we would make an axios request
      // to our backend to add the user to our database.
      alert("Signed up successfully");
    } else {
      alert("Failed to sign up, you have errors in your form");
    }
  };
  render() {
    return (
      <div className="add-warehouse">
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
        <h2 className="add-warehouse__subtitle">Warehouse Details</h2>
        <form className="add-warehouse__form" onSubmit={this.handleSubmit}>
          <label className="add-warehouse__form--label" htmlFor="">
            Warehouse name
          </label>
          <input
            className="add-warehouse__form--input"
            name="warehouse_name"
            type="text"
            placeholder="Warehouse Name"
            onChange={this.handleChange}
          />
          <label className="add-warehouse__form--label" htmlFor="">
            Street Address
          </label>
          <input
            className="add-warehouse__form--input"
            name="street"
            type="text"
            placeholder="Street Address"
            onChange={this.handleChange}
          />
          <label className="add-warehouse__form--label" htmlFor="">
            City
          </label>
          <input
            className="add-warehouse__form--input"
            name="city"
            type="text"
            placeholder="City"
            onChange={this.handleChange}
          />
          <label className="add-warehouse__form--label" htmlFor="">
            Country
          </label>
          <input
            className="add-warehouse__form--input"
            name="country"
            type="text"
            placeholder="Country"
            onChange={this.handleChange}
          />
          <h2 className="add-warehouse__subtitle">Contact Details</h2>
          <label className="add-warehouse__form--label" htmlFor="">
            Contact Name
          </label>
          <input
            className="add-warehouse__form--input"
            name="contact"
            type="text"
            placeholder="Contact name"
            onChange={this.handleChange}
          />
          <label className="add-warehouse__form--label" htmlFor="">
            Position
          </label>
          <input
            className="add-warehouse__form--input"
            name="position"
            type="text"
            placeholder="Position"
            onChange={this.handleChange}
          />
          <label className="add-warehouse__form--label" htmlFor="">
            Phone Number
          </label>
          <input
            className="add-warehouse__form--input"
            name="phone"
            type="text"
            placeholder="Phone number"
            onChange={this.handleChange}
          />
          <label className="add-warehouse__form--label" htmlFor="">
            Email
          </label>
          <input
            className="add-warehouse__form--input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <div className="add-warehouse__form--buttonbox">
            <button className="add-warehouse__form--cancel">Cancel</button>
            <button className="add-warehouse__form--button">
              + Add Warehouse
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default addWarehouse;
