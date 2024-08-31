import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Ensure to create a corresponding CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Mobisavings</h1>
        <p>Your all-in-one financial management solution for Kenyan schools</p>
      </header>
      
      <nav className="nav">
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/payment-portal">School Fee Payments</Link></li>
          <li><Link to="/investment-dashboard">Investment Opportunities</Link></li>
          <li><Link to="/educational-resources">Educational Resources</Link></li>
        </ul>
      </nav>

      <footer className="footer">
        <p>&copy; 2024 Mobisavings. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
