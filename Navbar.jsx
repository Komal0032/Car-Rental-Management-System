import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3 d-flex align-items-center" to="/">
          <span className="me-2">🚗</span>
          CAR RENTAL
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add Car
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="servicesDropdown"
              >
                Services
              </Link>
              <ul 
                className="dropdown-menu dropdown-menu-dark" 
                aria-labelledby="servicesDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/rent">
                    Car Booking
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/manage">
                    Manage Cars
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/reservations">
                    My Reservations
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <form 
            className="d-flex" 
            role="search"
            onSubmit={handleSearch}
          >
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search cars..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                className="btn btn-warning" 
                type="submit"
              >
                Search
              </button>
            </div>
          </form>

                    <div className="ms-3">
            <Link to="/admin-dashboard" className="btn btn-outline-light">
              AdminDashboard
            </Link>
          </div>

          <div className="ms-3">
            <Link to="/login" className="btn btn-outline-light">
              Login
            </Link>
          </div>
          <div className="ms-3">
            <Link to="/rent-request" className="btn btn-outline-light">
              RentRequestForm
            </Link>
          </div>
           
           
        </div>
      </div>
    </nav>
  );
};

export default Navbar;