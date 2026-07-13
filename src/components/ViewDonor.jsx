import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewDonor = () => {
  const [donors, setDonors] = useState([]);

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/donors")
      .then((response) => {
        setDonors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-header bg-danger text-white text-center rounded-top-4">
            <h2 className="mb-0">🩸 Blood Donor List</h2>
          </div>

          <div className="card-body">

            <div className="table-responsive">
              <table className="table table-hover table-striped table-bordered align-middle text-center">

                <thead className="table-danger">
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
                        <td>
                          {donor.created_at}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center text-muted py-4">
                        No donors found.
                      </td>
                    </tr>
                  )}
                </tbody>

              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDonor;