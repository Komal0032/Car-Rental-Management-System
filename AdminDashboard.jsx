// src/components/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [cars, setCars] = useState([]);
  const [pendingRentals, setPendingRentals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCars();
    fetchPendingRentals();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:8085/api/cars');
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching cars", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPendingRentals = async () => {
    try {
      const response = await axios.get('http://localhost:8085/api/rentals/pending');
      setPendingRentals(response.data);
    } catch (error) {
      console.error("Error fetching rentals", error);
    }
  };

  const handleApproveCar = async (id) => {
    try {
      await axios.put(`http://localhost:8085/api/car/approve/${id}`);
      fetchCars(); // Refresh car list
    } catch (error) {
      console.error("Error approving car", error);
    }
  };

  const handleApproveRental = async (id) => {
    try {
      await axios.put(`http://localhost:8085/api/rentals/approve/${id}`);
      fetchPendingRentals(); // Refresh rental list
    } catch (error) {
      console.error("Error approving rental", error);
    }
  };

  const pendingCars = cars.filter(car => car.approved === false);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="admin-dashboard">
      <h2>Pending Car Approvals</h2>
      {pendingCars.length === 0 ? (
        <p>✅ All cars are approved.</p>
      ) : (
        <div className="car-table">
          <table>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Fuel</th>
                <th>Price</th>
                <th>Approve</th>
              </tr>
            </thead>
            <tbody>
              {pendingCars.map(car => (
                <tr key={car.id}>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.fuelType}</td>
                  <td>₹{car.pricePerDay}</td>
                  <td>
                    <button onClick={() => handleApproveCar(car.id)} className="approve-btn">
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2>Pending Rental Requests</h2>
      {pendingRentals.length === 0 ? (
        <p>✅ No pending rental requests.</p>
      ) : (
        <div className="rental-table">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Car</th>
                <th>From</th>
                <th>To</th>
                <th>Approve</th>
              </tr>
            </thead>
            <tbody>
             {pendingRentals.map(rental => (
  <tr key={rental.id}>
    <td>{rental.customer?.name}</td>
    <td>{rental.car.brand} {rental.car.model}</td>
    <td>{rental.startDate}</td>
    <td>{rental.endDate}</td>
    <td>
      <button onClick={() => handleApproveRental(rental.id)} className="approve-btn">
        Approve
      </button>
    </td>
  </tr>
))}

            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;