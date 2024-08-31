import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user', { // Replace with actual endpoint URL
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token-based auth
          }
        });
        setUserData(response.data);
      } catch (error) {
        setError('Failed to fetch user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="dashboard">
      <h2>Welcome, {userData ? userData.name : 'User'}!</h2>
      <p>Here’s an overview of your account:</p>
      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h3>Savings</h3>
          <p>View and manage your savings accounts and goals.</p>
          <Link to="/savings">Go to Savings</Link>
        </section>

        <section className="dashboard-section">
          <h3>School Fees</h3>
          <p>Make and track school fee payments.</p>
          <Link to="/fees">Go to School Fees</Link>
        </section>

        <section className="dashboard-section">
          <h3>Investments</h3>
          <p>Explore and manage your investment opportunities.</p>
          <Link to="/investments">Go to Investments</Link>
        </section>

        <section className="dashboard-section">
          <h3>Loans</h3>
          <p>Check your loan eligibility, apply for loans, and track your repayments.</p>
          <Link to="/loans">Go to Loans</Link>
        </section>

        <section className="dashboard-section">
          <h3>Financial Education</h3>
          <p>Access educational resources to improve your financial literacy.</p>
          <Link to="/education">Go to Financial Education</Link>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
