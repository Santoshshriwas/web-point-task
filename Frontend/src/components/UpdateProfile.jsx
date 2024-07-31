
// //UpdateProfile


// // import React from 'react'

// // const UpdateProfile = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default UpdateProfile
// import React, { useState } from 'react';
// import axios from 'axios';

// const UpdatePassword = () => {
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post('http://localhost:4004/user/update', { email, newPassword });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response ? error.response.data.message : 'An error occurred');
//     }
//   };

//   return (
//     <div className="update-password-container">
//       <h2>Update Password</h2>
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
//         </div>
//         <div className="form-group">
//           <label htmlFor="newPassword">New Password:</label>
//           <input
//             type="password"
//             id="newPassword"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Update Password</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UpdatePassword;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UpdatePassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      localStorage.removeItem('authToken')
      const response = await axios.put('http://localhost:4004/user/update', { email, newPassword });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error updating password:', error);
      setMessage(error.response ? error.response.data.message : 'An error occurred');
    }
    navigate("/login")
  };

  return (
    <div className="update-password-container">
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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

export default UpdatePassword;
