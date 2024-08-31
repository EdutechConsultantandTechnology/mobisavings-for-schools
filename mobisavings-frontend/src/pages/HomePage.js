import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';  // Importing Header component
import Button from '../components/Button';  // Importing Button component
import './HomePage.css';  // Importing styles specific to HomePage
import '../pages/home.css';  // Importing home page-specific styles

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />  {/* Using Header component */}
      
      <main className="main-content">
        <h1>Welcome to Mobisavings</h1>
        <p>Your all-in-one financial management solution for Kenyan schools</p>
        
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
        
        <div className="button-container">
          {/* Example usage of Button component */}
          <Button label="Learn More" onClick={() => alert('Learn more clicked')} />
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Mobisavings. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

