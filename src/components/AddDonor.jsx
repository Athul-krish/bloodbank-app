import React, { useState } from "react";
import axios from "axios";

const AddDonor = () => {
  const [input, changeInput] = useState({
    donor_name: "",
    age: "",
    gender: "",
    blood_group: "",
    phone: "",
    email: "",
    city: "",
    weight_kg: "",
    last_donation_date: "",
  });

  const [message, setMessage] = useState("");

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    axios
      .post("https://host-demo-app.onrender.com/api/add-donor", input)
      .then((response) => {
        console.log(response.data);

        setMessage("Donor added successfully");

        changeInput({
          donor_name: "",
          age: "",
          gender: "",
          blood_group: "",
          phone: "",
          email: "",
          city: "",
          weight_kg: "",
          last_donation_date: "",
        });
      })
      .catch((error) => {
        console.log(error);

        if (error.response) {
          setMessage(error.response.data.message);
        } else {
          setMessage("Something went wrong");
        }
      });
  };

  return (
    <div>

      <div className="container mt-4">
        <div className="row">
          <div className="col col-12">
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Donor Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="donor_name"
                  value={input.donor_name}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={input.age}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <select
                  className="form-control"
                  name="gender"
                  value={input.gender}
                  onChange={inputHandler}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Blood Group</label>
                <select
                  className="form-control"
                  name="blood_group"
                  value={input.blood_group}
                  onChange={inputHandler}
                >
                  <option value="">Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={input.phone}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={input.city}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Weight (kg)</label>
                <input
                  type="number"
                  className="form-control"
                  name="weight_kg"
                  value={input.weight_kg}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Last Donation Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="last_donation_date"
                  value={input.last_donation_date}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-12 text-center">
                <button className="btn btn-danger" onClick={readValue}>
                  Add Donor
                </button>
              </div>

              <div className="col-md-12 text-center">
                <h5>{message}</h5>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDonor;