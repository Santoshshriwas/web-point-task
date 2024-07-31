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





import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = ({ name }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:4004/user/user/${name}`);
        setUser(response.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('User not found');
        } else {
          setError('Error fetching user profile');
        }
        console.error(err);
      }
    };
    fetchUserProfile();
  }, [name]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
};

export default Profile;
