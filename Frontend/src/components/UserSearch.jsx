
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminUpdatePassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  // Fetch users to populate the dropdown
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4004/user/alluser', {
          params: { limit: 100 } // Adjust limit or use pagination if needed
        });
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
        setMessage('Error fetching users');
      }
    };

    fetchUsers();
  }, []);

  const handleUserChange = (e) => {
    const email = e.target.value;
    setSelectedUser(email);
    setEmail(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !newPassword) {
      setMessage('Both email and new password are required');
      return;
    }

    try {
      // Optionally clear any previous authentication token
      localStorage.removeItem('authToken');

      // Send the request to update the password
      const response = await axios.put('http://localhost:4004/user/update', { email, newPassword });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error updating password:', error);
      setMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="update-password-container">
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userSelect">Select User:</label>
          <select
            id="userSelect"
            value={selectedUser}
            onChange={handleUserChange}
            required
          >
            <option value="" disabled>Select a user</option>
            {users.map(user => (
              <option key={user._id} value={user.email}>
                {user.email}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminUpdatePassword;
