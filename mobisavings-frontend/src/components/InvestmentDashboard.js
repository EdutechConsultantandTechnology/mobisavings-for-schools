import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InvestmentDashboard = () => {
  const [investments, setInvestments] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch investments on component mount
  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const response = await axios.get('/api/investments', { // Replace with actual endpoint URL
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token-based auth
          }
        });
        setInvestments(response.data);
      } catch (error) {
        setError('Failed to fetch investments.');
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="investment-dashboard">
      <h2>Investment Dashboard</h2>
      <ul>
        {investments.map(investment => (
          <li key={investment.id}>
            <h3>{investment.name}</h3>
            <p><strong>Description:</strong> {investment.description}</p>
            <p><strong>Return Rate:</strong> {investment.returnRate}%</p>
            <p><strong>Minimum Investment:</strong> {investment.minimumInvestment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentDashboard;
