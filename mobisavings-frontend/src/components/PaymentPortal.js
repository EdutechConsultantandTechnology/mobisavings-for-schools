import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentPortal = () => {
  const [payments, setPayments] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch payment history on component mount
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('/api/payments', { // Replace with actual endpoint URL
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token-based auth
          }
        });
        setPayments(response.data);
      } catch (error) {
        setError('Failed to fetch payment history.');
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  // Handle new payment submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/payments', { // Replace with actual endpoint URL
        amount,
        description
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token-based auth
        }
      });
      setAmount('');
      setDescription('');
      // Refresh payment history after successful submission
      const response = await axios.get('/api/payments', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setPayments(response.data);
    } catch (error) {
      setError('Failed to make payment.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="payment-portal">
      <h2>School Fee Payments</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Make Payment</button>
      </form>
      <h3>Payment History</h3>
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>
            <p><strong>Amount:</strong> {payment.amount}</p>
            <p><strong>Description:</strong> {payment.description}</p>
            <p><strong>Date:</strong> {new Date(payment.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentPortal;
