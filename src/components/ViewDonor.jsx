import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ViewDonor = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bloodGroup, setBloodGroup] = useState("");

  const fetchData = () => {
    setLoading(true);

    let url = "https://host-demo-app.onrender.com/api/donors";

    axios
      .get(url)
      .then((response) => {
        setDonors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [bloodGroup]);

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        {loading ? (
          <h3 className="text-center">Loading...</h3>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover text-center">

              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Donor Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Blood Group</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Weight (kg)</th>
                  <th>Last Donation</th>
                  <th>Created At</th>
                </tr>
              </thead>

              <tbody>
                {donors.length > 0 ? (
                  donors.map((donor, index) => (
                    <tr key={donor.id}>
                      <td>{index + 1}</td>
                      <td>{donor.donor_name}</td>
                      <td>{donor.age}</td>
                      <td>{donor.gender}</td>
                      <td>{donor.blood_group}</td>
                      <td>{donor.phone}</td>
                      <td>{donor.email || "N/A"}</td>
                      <td>{donor.city}</td>
                      <td>{donor.weight_kg}</td>
                      <td>{donor.last_donation_date || "N/A"}</td>
                      <td>{donor.created_at}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11">No donors found.</td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        )}

      </div>
    </div>
  );
};

export default ViewDonor;