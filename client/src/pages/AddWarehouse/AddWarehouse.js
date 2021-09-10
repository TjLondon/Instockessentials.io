import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import "./addWarehouse.scss";
// import errorIcon from "http://localhost:8080/Assets/Icons/error-24px.svg";

// function addWarehouse () {
import { Formik, Form, Field } from "formik";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validateWarehouse(value) {
  let error;
  if (!value) {
    error = "required";
    document.getElementById('red-border').className = ('error-border');
    
  }
  return error;
}
function validateStreet(value) {
  let error;
  if (!value) {
    error = "required";
  }
  return error;
}
function validateCity(value) {
  let error;
  if (!value) {
    error = "required";
  }
  return error;
}
function validateCountry(value) {
  let error;
  if (!value) {
    error = "required";
  }
  return error;
}
function validateContact(value) {
  let error;
  if (!value) {
    error = "required";
  }
  return error;
}
function validatePosition(value) {
  let error;
  if (!value) {
    error = "required";
  }
  return error;
}
function validatePhone(value) {
  let error;
  if (!value) {
    error = "required";
  }
  else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(value)){
    error = "input valid phone number"
  }
  return error;
}
function AddWarehouse({ history }) {
  return (
    <div className="add-warehouse">
      <h1 className="add-warehouse__title"><img src="http://localhost:8080/server/Assets/Icons/arrow_back-24px.svg" alt="arrow"/>Add New Warehouse</h1>
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
          // same shape as initial values
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

          console.log(values);
        }}
      >
        {({ errors, touched}) => (
          
          <Form className="add-warehouse__form">
            <div className="add-warehouse__box left-box">
            <h2 className="add-warehouse__subtitle">Warehouse Details</h2>
            <label className="add-warehouse__form--label" htmlFor="">
              Warehouse name
            </label>
            <Field
              className="add-warehouse__form--input"
              id="red-border"
              name="warehouse_name"
              validate={validateWarehouse}
            />
            {errors.warehouse_name && touched.warehouse_name && (
              <div className="add-warehouse__form--error">
                <img
                  className="error-icon"
                  src=""
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
              name="street"
              validate={validateStreet}
            />
            {errors.street && touched.street && (
              <div className="add-warehouse__form--error">{errors.street}</div>
            )}
            <label className="add-warehouse__form--label" htmlFor="">
              City
            </label>
            <Field
              className="add-warehouse__form--input"
              name="city"
              validate={validateCity}
            />
            {errors.city && touched.city && (
              <div className="add-warehouse__form--error">{errors.city}</div>
            )}
            <label className="add-warehouse__form--label" htmlFor="">
              Country
            </label>
            <Field
              className="add-warehouse__form--input"
              name="country"
              validate={validateCountry}
            />
            {errors.country && touched.country && (
              <div className="add-warehouse__form--error">{errors.country}</div>
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
              validate={validateContact}
            />
            {errors.contact && touched.contact && (
              <div className="add-warehouse__form--error">{errors.contact}</div>
            )}
            <label className="add-warehouse__form--label" htmlFor="">
              Position
            </label>
            <Field
              className="add-warehouse__form--input"
              name="position"
              validate={validatePosition}
            />
            {errors.position && touched.position && (
              <div className="add-warehouse__form--error">
                {errors.position}
              </div>
            )}
            <label className="add-warehouse__form--label" htmlFor="">
              Phone Number
            </label>
            <Field
              className="add-warehouse__form--input"
              name="phone"
              validate={validatePhone}
            />
            {errors.phone && touched.phone && (
              <div className="add-warehouse__form--error">{errors.phone}</div>
            )}
            <label className="add-warehouse__form--label" htmlFor="">
              Email
            </label>
            <Field
              className="add-warehouse__form--input"
              name="email"
              validate={validateEmail}
            />
            {errors.email && touched.email && <div className="add-warehouse__form--error">{errors.email}</div>}
            </div>
          </Form>
        )}
      </Formik>
            <div className="add-warehouse__form--buttonbox">
              <button className="add-warehouse__form--cancel">Cancel</button>
              <button className="add-warehouse__form--button" type="submit">
                + Add Warehouse
              </button>
            </div>
    </div>
  );
}
// state = {
//   warehouse_name: "",
//   street: "",
//   city: "",
//   country: "",
//   contact: "",
//   position: "",
//   phone: "",
//   email: "",
// };

// handleChange = (event) => {
//   let isValid = this.isFormValid();

//   console.log(isValid);

//   this.setState({
//     [event.target.name]: event.target.value,
//   });
// };

// isWarehouseValid = () => {
//   // TO DO: Check if the password is too short
//   if (!this.state.warehouse_name) {
//     return false;
//   }
//   return true;
// };
// isStreetValid = () => {
//   // TO DO: Check if the password is too short
//   if (!this.state.street) {
//     return false;
//   }
//   return true;
// };
// isCityValid = () => {
//   // TO DO: Check if the password is too short
//   if (!this.state.city) {
//     return false;
//   }
//   return true;
// };
// isCountryValid = () => {
//   // TO DO: Check if the password is too short
//   if (!this.state.country) {
//     return false;
//   }
//   return true;
// };
// isContactValid = () => {
//   // TO DO: Check if the password is too short
//   if (!this.state.country) {
//     return false;
//   }
//   return true;
// };
// isPositionValid = () => {
//   // TO DO: Check if the password is too short
//   if (!this.state.country) {
//     return false;
//   }
//   return true;
// };
// isPhoneValid = () => {
//   // TO DO: Check if the password is too short
//   if (!this.state.country) {
//     return false;
//   }
//   return true;
// };
// isEmailValid = () => {
//   // TO DO: Check if the password is too short
//   if (!this.state.country) {
//     return false;
//   }
//   return true;
// };

// isFormValid = () => {
//   // TO DO: Check if the fields are all filled
//   if (
//     !this.state.warehouse_name ||
//     !this.state.street ||
//     !this.state.city ||
//     !this.state.country ||
//     !this.state.contact ||
//     !this.state.position ||
//     !this.state.phone ||
//     !this.state.email
//   ) {
//     return false;
//   }
//   return true;
// };
// handleSubmit = (event) => {
//   event.preventDefault();

//   if (this.isFormValid()) {
//     console.log(event.target.value);
//     // This is where we would make an axios request
//     // to our backend to add the user to our database.
//     alert("New Warehouse Added!");
//   } else {
//     alert("Errors in your form. Please try again.");
//   }
// };
// render() {
//   let errorMessage = "";
//   if (!this.isWarehouseValid()) {
//     errorMessage = "field required";
//   }
//   if (!this.isCityValid()) {
//     errorMessage = "field required";
//   }
//   if (!this.isStreetValid()) {
//     errorMessage = "field required";
//   }
//   if (!this.isCountryValid()) {
//     errorMessage = "field required";
//   }
//   if (!this.isPositionValid()) {
//     errorMessage = "field required";
//   }
//   if (!this.isContactValid()) {
//     errorMessage = "field required";
//   }
//   if (!this.isPhoneValid()) {
//     errorMessage = "field required";
//   }
//   if (!this.isEmailValid()) {
//     errorMessage = "field required";
//   }
//   return (
//     <div className="add-warehouse">
//       <h1 className="add-warehouse__title">Add New Warehouse</h1>
//       <h2 className="add-warehouse__subtitle">Warehouse Details</h2>
//       <form className="add-warehouse__form" onSubmit={this.handleSubmit}>
//         <label className="add-warehouse__form--label" htmlFor="">
//           Warehouse name
//         </label>
//         <input
//           className="add-warehouse__form--input"
//           name="warehouse_name"
//           type="text"
//           placeholder="Warehouse Name"
//           onChange={this.handleChange}
//         />
//         <p className="add-warehouse__form--error">{errorMessage}</p>
//         <label className="add-warehouse__form--label" htmlFor="">
//           Street Address
//         </label>
//         <input
//           className="add-warehouse__form--input"
//           name="street"
//           type="text"
//           placeholder="Street Address"
//           onChange={this.handleChange}
//         />
//         <p className="add-warehouse__form--error">{errorMessage}</p>
//         <label className="add-warehouse__form--label" htmlFor="">
//           City
//         </label>
//         <input
//           className="add-warehouse__form--input"
//           name="city"
//           type="text"
//           placeholder="City"
//           onChange={this.handleChange}
//         />
//         <p className="add-warehouse__form--error">{errorMessage}</p>
//         <label className="add-warehouse__form--label" htmlFor="">
//           Country
//         </label>
//         <input
//           className="add-warehouse__form--input"
//           name="country"
//           type="text"
//           placeholder="Country"
//           onChange={this.handleChange}
//         />
//         <p className="add-warehouse__form--error">{errorMessage}</p>
//         <h2 className="add-warehouse__subtitle">Contact Details</h2>
//         <label className="add-warehouse__form--label" htmlFor="">
//           Contact Name
//         </label>
//         <input
//           className="add-warehouse__form--input"
//           name="contact"
//           type="text"
//           placeholder="Contact name"
//           onChange={this.handleChange}
//         />
//         <p className="add-warehouse__form--error">{errorMessage}</p>
//         <label className="add-warehouse__form--label" htmlFor="">
//           Position
//         </label>
//         <input
//           className="add-warehouse__form--input"
//           name="position"
//           type="text"
//           placeholder="Position"
//           onChange={this.handleChange}
//         />
//         <p className="add-warehouse__form--error">{errorMessage}</p>
//         <label className="add-warehouse__form--label" htmlFor="">
//           Phone Number
//         </label>
//         <input
//           className="add-warehouse__form--input"
//           name="phone"
//           type="text"
//           placeholder="Phone number"
//           onChange={this.handleChange}
//         />
//         <p className="add-warehouse__form--error">{errorMessage}</p>
//         <label className="add-warehouse__form--label" htmlFor="">
//           Email
//         </label>
//         <input
//           className="add-warehouse__form--input"
//           name="email"
//           type="email"
//           placeholder="Email"
//           onChange={this.handleChange}
//         />
//         <p className="add-warehouse__form--error">{errorMessage}</p>
//         <div className="add-warehouse__form--buttonbox">
//           <button className="add-warehouse__form--cancel">Cancel</button>
//           <button className="add-warehouse__form--button">
//             + Add Warehouse
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
// }

export default AddWarehouse;