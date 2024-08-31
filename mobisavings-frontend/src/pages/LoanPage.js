import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoanPage.css'; // Ensure to create a corresponding CSS file for styling

const LoanPage = () => {
  const [loans, setLoans] = useState([]);
  const [application, setApplication] = useState({ amount: '', term: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get('/api/loans'); // Replace with actual endpoint
        setLoans(response.data);
      } catch (error) {
        setError('Error fetching loan data. Please try again later.');
        console.error('Error fetching loans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplication({ ...application, [name]: value });
  };

  const handleApplyLoan = async () => {
    try {
      await axios.post('/api/loans/apply', application); // Replace with actual endpoint
      setSuccessMessage('Loan application submitted successfully.');
      setApplication({ amount: '', term: '' });
    } catch (error) {
      setError('Error submitting loan application. Please try again later.');
      console.error('Error applying for loan:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="loan-page">
      <h1>Loan Management</h1>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      
      <div className="loan-application-form">
        <h2>Apply for a Loan</h2>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={application.amount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Term (months):
          <input
            type="number"
            name="term"
            value={application.term}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleApplyLoan}>Apply</button>
      </div>

      <div className="loan-status">
        <h2>Your Loans</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
              <th>Term</th>
              <th>Status</th>
              <th>Repayment</th>
            </tr>
          </thead>
          <tbody>
            {loans.length > 0 ? (
              loans.map((loan) => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>
                  <td>{loan.amount}</td>
                  <td>{loan.term}</td>
                  <td>{loan.status}</td>
                  <td>
                    {/* Assuming 'repayment' includes details or a link */}
                    {loan.repayment ? (
                      <a href={`/repayments/${loan.id}`}>View Repayment</a>
                    ) : (
                      'N/A'
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No loan data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanPage;
