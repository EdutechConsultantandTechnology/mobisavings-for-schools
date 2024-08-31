import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './InvestmentsPage.css'; // Ensure to create a corresponding CSS file for styling
import '../pages/investments.css';  // Importing investments page-specific styles

const InvestmentsPage = () => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch investment data from the backend API
    const fetchInvestments = async () => {
      try {
        const response = await axios.get('/api/investments'); // Replace with actual endpoint
        setInvestments(response.data);
      } catch (error) {
        setError('Error fetching investments. Please try again later.');
        console.error('Error fetching investments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="investments-page">
      <h1>Investment Opportunities</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="investments-list">
        {investments.length > 0 ? (
          <ul>
            {investments.map((investment) => (
              <li key={investment.id}>
                <h2>{investment.name}</h2>
                <p>Description: {investment.description}</p>
                <p>Expected Return: {investment.return}%</p>
                <p>Risk Level: {investment.riskLevel}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No investment opportunities available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default InvestmentsPage;
