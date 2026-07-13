import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

         <h4 className="text-white fw-bold mb-0">Blood Bank</h4>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add Donor
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/view">
                  View Donors
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;