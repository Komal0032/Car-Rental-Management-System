// src/components/AddCar.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './AddCar.css';

const AddCar = () => {
  const [car, setCar] = useState({
    brand: '',
    model: '',
    fuelType: '',
    pricePerDay: ''
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8085/api/car', car);
      alert("Car added successfully!");
      setCar({ brand: '', model: '', fuelType: '', pricePerDay: '' });
    } catch (error) {
      alert("Failed to add car. Check console.");
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center  mb-4">Add New Car</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Brand</label>
                <input type="text" name="brand" className="form-control" value={car.brand} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Model</label>
                <input type="text" name="model" className="form-control" value={car.model} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Fuel Type</label>
                <input type="text" name="fuelType" className="form-control" value={car.fuelType} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Price per Day</label>
                <input type="number" name="pricePerDay" className="form-control" value={car.pricePerDay} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Add Car</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
