import React from 'react';
import './App.css';

function Services() {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-box">
          <h3>Savings Account</h3>
          <p>Secure your savings with us and earn high interest rates.</p>
        </div>
        <div className="service-box">
          <h3>Loans</h3>
          <p>Get quick and hassle-free loans for all your needs.</p>
        </div>
        <div className="service-box">
          <h3>Online Banking</h3>
          <p>Access your account anytime, anywhere with our online banking services.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
