import React from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-col footer-about">
            <h3 className="footer-brand">
              <FaCarSide className="footer-icon" /> CAR RENTAL
            </h3>
            <p className="footer-about-text">
              Premium car rental service offering the latest models with exceptional customer service. 
              Experience luxury on the road with our wide selection of vehicles.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/fleet">Our Fleet</Link></li>
              <li><Link to="/offers">Special Offers</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-links">
            <h4 className="footer-title">Services</h4>
            <ul>
              <li><Link to="/rentals">Car Rentals</Link></li>
              <li><Link to="/long-term">Long Term Rentals</Link></li>
              <li><Link to="/business">Business Rentals</Link></li>
              <li><Link to="/airport">Airport Transfers</Link></li>
              <li><Link to="/luxury">Luxury Vehicles</Link></li>
              <li><Link to="/insurance">Insurance Options</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <ul>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Drive Street, Nashik City, AC 12345</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>(1123227890</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@carrental.com</span>
              </li>
            </ul>
            <div className="footer-newsletter">
              <h5>Subscribe to Newsletter</h5>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} CAR RENTAL. All rights reserved.</p>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
