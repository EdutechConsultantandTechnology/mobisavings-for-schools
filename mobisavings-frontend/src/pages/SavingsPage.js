import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SavingsPage.css'; // Ensure to create a corresponding CSS file for styling

const SavingsPage = () => {
  const [savingsAccounts, setSavingsAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch savings accounts data from the backend API
    const fetchSavingsAccounts = async () => {
      try {
        const response = await axios.get('/api/savings'); // Replace with actual endpoint
        setSavingsAccounts(response.data);
      } catch (error) {
        console.error('Error fetching savings accounts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavingsAccounts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="savings-page">
      <h1>Your Savings Accounts</h1>
      <div className="savings-list">
        {savingsAccounts.length > 0 ? (
          <ul>
            {savingsAccounts.map((account) => (
              <li key={account.id}>
                <h2>{account.name}</h2>
                <p>Balance: ${account.balance}</p>
                <p>Goal: ${account.goal}</p>
                <p>Progress: {((account.balance / account.goal) * 100).toFixed(2)}%</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No savings accounts found.</p>
        )}
      </div>
    </div>
  );
};

export default SavingsPage;
