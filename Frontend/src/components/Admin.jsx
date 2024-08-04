// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const AdminLogin = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const navigate = useNavigate();
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4004/user/admin', formData);
//       setMessage(response.data.message);
//       // Optionally, handle successful login (e.g., save token, redirect user)
//     } catch (error) {
//       setMessage(error.response.data.message || 'An error occurred');
//     }
//     navigate("/adpanel")
//   };

//   return (
//     <div className="container">
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p className="message">{message}</p>}
//     </div>
//   );
// };

// export default AdminLogin;


// import React, { useState } from 'react';
// import axios from 'axios';
// import validator from 'validator'; 

// const AdminLogin = ({ setUser }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Reset errors
//     setEmailError('');
//     setPasswordError('');
//     setMessage('');

//     let isValid = true;

//     // Validate email format
//     if (!validator.isEmail(email)) {
//       setEmailError('Invalid email format');
//       isValid = false;
//     }

//     // Validate password
//     if (!password) {
//       setPasswordError('Password is required');
//       isValid = false;
//     } else if (password.length < 6) { // Example password validation
//       setPasswordError('Password must be at least 6 characters long');
//       isValid = false;
//     }

//     if (!isValid) return; // Stop if validation fails

//     try {
//       // Send login request
//       const response = await axios.post('http://localhost:4004/user/admin', {
//         email,
//         password
//       });

//       // Handle successful login
//       const { admin } = response.data;
//       localStorage.setItem('admin', JSON.stringify(admin)); // Store admin details in local storage
//       setUser(admin); // Set admin in state (if using context or parent component state)
//       setMessage('Login successful');
//     } catch (error) {
//       // Handle errors
//       console.error('Error logging in:', error);
//       setMessage(error.response ? error.response.data.message : 'An error occurred');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           {emailError && <p className="error-message">{emailError}</p>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {passwordError && <p className="error-message">{passwordError}</p>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default AdminLogin;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4004/user/admin', { email, password });
      setMessage(response.data.message);
      setError(null);
      // Handle success (e.g., redirect to dashboard or store token)
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      setMessage(null);
    }
    navigate("/adpanel")
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
