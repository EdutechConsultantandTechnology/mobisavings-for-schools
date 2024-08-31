import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PaymentsPage.css'; // Ensure to create a corresponding CSS file for styling

const PaymentsPage = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch payment history data from the backend API
    const fetchPayments = async () => {
      try {
        const response = await axios.get('/api/payments'); // Replace with actual endpoint
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/payments', { amount }); // Replace with actual endpoint
      setAmount('');
      // Refetch payments to update the list
      const response = await axios.get('/api/payments');
      setPayments(response.data);
    } catch (error) {
      setError('Payment failed. Please try again.');
      console.error('Error making payment:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="payments-page">
      <h1>School Fee Payments</h1>
      <form onSubmit={handlePaymentSubmit} className="payment-form">
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Payment</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="payments-list">
        <h2>Payment History</h2>
        {payments.length > 0 ? (
          <ul>
            {payments.map((payment) => (
              <li key={payment.id}>
                <p>Date: {new Date(payment.date).toLocaleDateString()}</p>
                <p>Amount: ${payment.amount}</p>
                <p>Status: {payment.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No payments found.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentsPage;
