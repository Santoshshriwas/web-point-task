// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// const Profile = ({ match }) => {
//   const [user, setUser] = useState(null);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4004/user/user${match.params.id}`);
//         setUser(response.data);
//       } catch (error) {
//         setMessage(error.response.data.message || 'An error occurred');
//       }
//     };

//     fetchUser();
//   }, [match.params.id]);

//   return (
//     <div className="profile-container">
//       {message && <p className="message">{message}</p>}
//       {user ? (
//         <div className="profile-card">
//           <h2>{user.name}</h2>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone:</strong> {user.phone}</p>
//           <p><strong>Gender:</strong> {user.gender}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Profile;





// src/components/UserProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:4004/user/profile/${id}`);
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user profile.');
        console.error('Error fetching user profile:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          {/* Add other user details as needed */}
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default Profile;

