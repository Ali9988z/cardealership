import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Services</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Get in Touch</li>
            <li>Help Center</li>
            <li>Live Chat</li>
            <li>How It Works</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Brands</h4>
          <ul>
            <li>Toyota</li>
            <li>Porsche</li>
            <li>Audi</li>
            <li>BMW</li>
            <li>Ford</li>
            <li>Nissan</li>
            <li>Peugeot</li>
            <li>Volkswagen</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Vehicle Types</h4>
          <ul>
            <li>Sedan</li>
            <li>Hatchback</li>
            <li>SUV</li>
            <li>Hybrid</li>
            <li>Electric</li>
            <li>Coupe</li>
            <li>Truck</li>
            <li>Convertible</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Sale Hours</h4>
          <ul>
            <li>Monday - Friday: 09:00 AM - 09:00 PM</li>
            <li>Saturday: 09:00 AM - 07:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
          <div className="social-media">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 All rights reserved by Ali Nawaz.</p>
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Notice</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
