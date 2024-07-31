// import React, { useState } from 'react';
// import axios from 'axios';

// const UserSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [user, setUser] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get('http://localhost:4004/user/search', {
//         params: { email: searchTerm }
//       });
//       setUser(response.data.user);
//       setMessage('');
//     } catch (error) {
//       console.error('Error searching user:', error);
//       setMessage(error.response ? error.response.data.message : 'An error occurred');
//       setUser(null);
//     }
//   };

//   return (
//     <div className="search-page-container">
//       <h2>Search User</h2>
//       <form onSubmit={handleSearch}>
//         <div className="form-group">
//           <label htmlFor="searchTerm">Search by Email:</label>
//           <input
//             type="text"
//             id="searchTerm"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Search</button>
//       </form>
//       {message && <p>{message}</p>}
//       {user && (
//         <div className="user-details">
//           <h3>User Details</h3>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone:</strong> {user.phone}</p>
//           <p><strong>Gender:</strong> {user.gender}</p>
//           <p><strong>Possword:</strong> {user.password}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserSearch;



import React, { useState } from 'react';
import axios from 'axios';

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:4004/user/search', {
        params: { email: searchTerm }
      });
      setUser(response.data.user);
      setMessage('');
    } catch (error) {
      console.error('Error searching user:', error);
      setMessage(error.response ? error.response.data.message : 'An error occurred');
      setUser(null);
    }
  };

  return (
    <div className="search-page-container">
      <h2>Search User</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="searchTerm">Search by Email:</label>
          <input
            type="text"
            id="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>
      {message && <p>{message}</p>}
      {user && (
        <div className="user-details">
          <h3>User Details</h3>
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.gender}</td>
                <td>{user.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
