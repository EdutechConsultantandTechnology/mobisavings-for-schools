import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; // Ensure to create a corresponding CSS file for styling

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [fees, setFees] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingFees, setLoadingFees] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/admin/users'); // Replace with actual endpoint
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching users. Please try again later.');
        console.error('Error fetching users:', error);
      } finally {
        setLoadingUsers(false);
      }
    };

    const fetchFees = async () => {
      try {
        const response = await axios.get('/api/admin/fees'); // Replace with actual endpoint
        setFees(response.data);
      } catch (error) {
        setError('Error fetching fees. Please try again later.');
        console.error('Error fetching fees:', error);
      } finally {
        setLoadingFees(false);
      }
    };

    fetchUsers();
    fetchFees();
  }, []);

  if (loadingUsers || loadingFees) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="users-section">
        <h2>Users Management</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    {/* Add buttons for editing and deleting users */}
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="fees-section">
        <h2>Fee Management</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fees.length > 0 ? (
              fees.map((fee) => (
                <tr key={fee.id}>
                  <td>{fee.id}</td>
                  <td>{fee.description}</td>
                  <td>{fee.amount}</td>
                  <td>{fee.due_date}</td>
                  <td>
                    {/* Add buttons for editing and deleting fees */}
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No fees available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
