import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import Footer from './components/Footer'; // Make sure this path is 
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/SignUp';
import AdminDashboard from './components/AdminDashboard'; // Adjust the path as necessary
import RentRequestForm from './components/RentRequestForm'; // Adjust the path as necessary


const App = () => {
  return (
    <BrowserRouter>
      {/* Main container with flex column layout */}
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar at the top */}
        <Navbar />  <br/><br/><br/> 
        
        {/* Main content area that grows to push footer down */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<CarList />} />
            <Route path="/add" element={<AddCar />} />
           
            <Route path="/about" element={<About />} /> {/* Add this route */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/rent-request" element={<RentRequestForm />} />
            
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <br/><br/><br/> <br/> <br/>  <br/><br/><br/>
        {/* Footer at the bottom */}
        <br/><br/>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;