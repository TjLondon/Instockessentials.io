import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./addWarehouse.scss";
import { Formik, Form, Field } from "formik";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "this field is required";
    
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    
    error = "Invalid email address";
  }
  return error;
}

function validateWarehouse(value) {
  let error;
  if (!value) {
    error = "this field is required";
    
    
  }
  return error;
}
function validateStreet(value) {
  let error;
  if (!value) {
    error = "this field is required";
    
  }
  return error;
}
function validateCity(value) {
  let error;
  if (!value) {
    error = "this field is required";
    
  }
  return error;
}
function validateCountry(value) {
  let error;
  if (!value) {
    error = "this field is required";
    
  }
  return error;
}
function validateContact(value) {
  let error;
  if (!value) {
    error = "this field is required";
    
  }
  return error;
}
function validatePosition(value) {
  let error;
  if (!value) {
    error = "this field is required";
    
  }
  return error;
}
function validatePhone(value) {
  let error;
  if (!value) {
    error = "this field is required";
    
  }
  else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(value)){
    error = "input valid phone number"
    
  }
  return error;
}
function AddWarehouse({ history, component }) {
  return (
    <>
    {component}
    <div className="add-warehouse">
      
      <h1 className="add-warehouse__title"><img className="add-warehouse__arrow" src="http://localhost:8080/Assets/Icons/arrow_back-24px.svg" alt="arrow"/>Add New Warehouse</h1>
      {/* <div className="add-warehouse__box"> */}
      
      <Formik
        initialValues={{
          warehouse_name: "",
          street: "",
          city: "",
          country: "",
          contact: "",
          position: "",
          phone: "",
          email: "",
        }}
        onSubmit={(values) => {
         
          axios
            .post("http://localhost:8080/add", {
              id: uuidv4(),
              name: values.warehouse_name,
              address: values.street,
              city: values.city,
              country: values.country,
              contact: {
                name: values.contact,
                position: values.position,
                phone: values.phone,
                email: values.email,
              },
            })
            .then(() => {
              alert("Warehouse added!");
              history.push("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        {({ errors, touched}) => (
          
          <Form className="add-warehouse__form">
            <div className="add-warehouse__form--box">
            <div className="add-warehouse__box left-box">
            <h2 className="add-warehouse__subtitle">Warehouse Details</h2>
            <label className="add-warehouse__form--label" htmlFor="">
              Warehouse name
            </label>
            <Field
              className="add-warehouse__form--input red-border"
              id="error-border"
              name="warehouse_name"
              placeholder="Warehouse Name"
              validate={validateWarehouse}
            />
            {errors.warehouse_name && touched.warehouse_name && (
              document.getElementById('error-border').className = ('error-border'),
              <div className="add-warehouse__form--error">
                <img
                  className="error-icon"
                  src="http://localhost:8080/Assets/Icons/error-24px.svg"
                  alt="red error icon"
                />
                {errors.warehouse_name}
              </div>
            )}
            <label className="add-warehouse__form--label" htmlFor="">
              Street Address
            </label>
            <Field
              className="add-warehouse__form--input"
              id="error-border__street"
              name="street"
              placeholder="Street Address"
              validate={validateStreet}
            />
            {errors.street && touched.street && (
              document.getElementById('error-border__street').className = ('error-border'),
              <div className="add-warehouse__form--error">  <img
              className="error-icon"
              src="http://localhost:8080/Assets/Icons/error-24px.svg"
              alt="red error icon"
            />{errors.street}</div>
            )}
            <label className="add-warehouse__form--label" htmlFor="">
              City
            </label>
            <Field
              className="add-warehouse__form--input"
              id="red-border__city"
              name="city"
              placeholder="City"
              validate={validateCity}
            />
            {errors.city && touched.city && (
              document.getElementById('red-border__city').className = ('error-border'),
              <div className="add-warehouse__form--error">  <img
              className="error-icon"
              src="http://localhost:8080/Assets/Icons/error-24px.svg"
              alt="red error icon"
            />{errors.city}</div>
            )}
            <label className="add-warehouse__form--label" htmlFor="">
              Country
            </label>
            <Field
              className="add-warehouse__form--input"
              name="country"
              id="red-border__country"
              placeholder="Country"
              validate={validateCountry}
            />
            {errors.country && touched.country && (
              document.getElementById('red-border__country').className = ('error-border'),
              <div className="add-warehouse__form--error">  <img
              className="error-icon"
              src="http://localhost:8080/Assets/Icons/error-24px.svg"
              alt="red error icon"
            />{errors.country}</div>
            )}
            </div>
            <div className="add-warehouse__box">
            <h2 className="add-warehouse__subtitle">Contact Details</h2>
            <label className="add-warehouse__form--label" htmlFor="">
              Contact Name{" "}
            </label>
            <Field
              className="add-warehouse__form--input"
              name="contact"
              id="red-border__contact"
              placeholder="Contact Name"
              validate={validateContact}
            />
            {errors.contact && touched.contact && (
              document.getElementById('red-border__contact').className = ('error-border'),
              <div className="add-warehouse__form--error">  <img
              className="error-icon"
              src="http://localhost:8080/Assets/Icons/error-24px.svg"
              alt="red error icon"
            />{errors.contact}</div>
            )}
            <label className="add-warehouse__form--label" htmlFor="">
              Position
            </label>
            <Field
              className="add-warehouse__form--input"
              name="position"
              placeholder="Position"
              id="red-border__position"
              validate={validatePosition}
            />
            {errors.position && touched.position && (
              document.getElementById('red-border__position').className = ('error-border'),
              <div className="add-warehouse__form--error">  <img
              className="error-icon"
              src="http://localhost:8080/Assets/Icons/error-24px.svg"
              alt="red error icon"
            />
                {errors.position}
              </div>
            )}
            <label className="add-warehouse__form--label" htmlFor="">
              Phone Number
            </label>
            <Field
              className="add-warehouse__form--input"
              name="phone"
              placeholder="Phone Number"
              id="red-border__phone"
              validate={validatePhone}
            />
            {errors.phone && touched.phone && (
              document.getElementById('red-border__phone').className = ('error-border'),
              <div className="add-warehouse__form--error">  <img
              className="error-icon"
              src="http://localhost:8080/Assets/Icons/error-24px.svg"
              alt="red error icon"
            />{errors.phone}</div>
            )}
            <label className="add-warehouse__form--label" htmlFor="">
              Email
            </label>
            <Field
              className="add-warehouse__form--input"
              name="email"
              id="red-border__email"
              placeholder="Email"
              validate={validateEmail}
            />
            {errors.email && touched.email && (
            document.getElementById('red-border__email').className = ('error-border'),
            <div className="add-warehouse__form--error">  <img
            className="error-icon"
            src="http://localhost:8080/Assets/Icons/error-24px.svg"
            alt="red error icon"
          />{errors.email}</div>)}
            </div>
            </div>
            <div className="add-warehouse__form--buttonbox">
              <button className="add-warehouse__form--cancel">Cancel</button>
              <button className="add-warehouse__form--button" type="submit">
                + Add Warehouse
              </button>
            </div>
          </Form>
        )}
        </Formik>
    </div>
    </>
  );
}


export default AddWarehouse;