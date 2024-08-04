// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Table = () => {
//   const [users, setUsers] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [user, setUser] = useState(null);
//   const [message, setMessage] = useState('');
//   const [isSearching, setIsSearching] = useState(false);

//   const fetchUsers = async (page, sortBy = 'name', order = 'asc') => {
//     try {
//       setLoading(true);
//       const response = await axios.get('http://localhost:4004/user/alluser', {
//         params: { page, limit: 5, sortBy, order }
//       });
//       setUsers(response.data.users);
//       setTotalPages(response.data.totalPages);
//       setCurrentPage(response.data.currentPage);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       setMessage('Error fetching users');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get('http://localhost:4004/user/search', {
//         params: { email: searchTerm }
//       });
//       if (response.data.user) {
//         setUser(response.data.user);
//         setMessage('');
//         setIsSearching(true);
//       } else {
//         setUser(null);
//         setMessage('User not found');
//       }
//     } catch (error) {
//       console.error('Error searching user:', error);
//       setMessage(error.response ? error.response.data.message : 'An error occurred');
//       setUser(null);
//     }
//   };

//   const handleShowAllUsers = () => {
//     setSearchTerm('');
//     setUser(null); // Clear search result
//     setIsSearching(false); // Reset search state
//     fetchUsers(currentPage); // Fetch all users
//   };

//   useEffect(() => {
//     fetchUsers(currentPage);
//   }, [currentPage, isSearching]);

//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <div className="user-list-container">
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
//         {isSearching && (
//           <button type="button" onClick={handleShowAllUsers}>
//             Back to All Users
//           </button>
//         )}
//       </form>

//       {message && <p>{message}</p>}

//       {user ? (
//         <div className="user-details">
//           <h3>User Details</h3>
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Gender</th>
//                 <th>Password</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.gender}</td>
//                 <td>{user.password}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div>
//           <h2>All Users</h2>
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <div>
//               <table className="user-table">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Gender</th>
//                     <th>Password</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map(user => (
//                     <tr key={user._id}>
//                       <td>{user.name}</td>
//                       <td>{user.email}</td>
//                       <td>{user.phone}</td>
//                       <td>{user.gender}</td>
//                       <td>{user.password}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="pagination">
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                 >
//                   Previous
//                 </button>
//                 <span>Page {currentPage} of {totalPages}</span>
//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Table;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Table = () => {
//   const [users, setUsers] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [user, setUser] = useState(null);
//   const [message, setMessage] = useState('');
//   const [isSearching, setIsSearching] = useState(false);
//   const [sortBy, setSortBy] = useState('name');
//   const [order, setOrder] = useState('asc');

//   const fetchUsers = async (page, sortBy = 'name', order = 'asc') => {
//     try {
//       setLoading(true);
//       const response = await axios.get('http://localhost:4004/user/alluser', {
//         params: { page, limit: 5, sortBy, order }
//       });
//       setUsers(response.data.users);
//       setTotalPages(response.data.totalPages);
//       setCurrentPage(response.data.currentPage);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       setMessage('Error fetching users');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get('http://localhost:4004/user/search', {
//         params: { email: searchTerm }
//       });
//       if (response.data.user) {
//         setUser(response.data.user);
//         setMessage('');
//         setIsSearching(true);
//       } else {
//         setUser(null);
//         setMessage('User not found');
//       }
//     } catch (error) {
//       console.error('Error searching user:', error);
//       setMessage(error.response ? error.response.data.message : 'An error occurred');
//       setUser(null);
//     }
//   };

//   const handleShowAllUsers = () => {
//     setSearchTerm('');
//     setUser(null); // Clear search result
//     setIsSearching(false); // Reset search state
//     fetchUsers(currentPage, sortBy, order); // Fetch all users
//   };

//   const handleSortChange = (e) => {
//     const [sortBy, order] = e.target.value.split('-');
//     setSortBy(sortBy);
//     setOrder(order);
//     fetchUsers(currentPage, sortBy, order);
//   };

//   useEffect(() => {
//     fetchUsers(currentPage, sortBy, order);
//   }, [currentPage, sortBy, order]);

//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <div className="user-list-container">
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
//         {isSearching && (
//           <button type="button" onClick={handleShowAllUsers}>
//             Back to All Users
//           </button>
//         )}
//       </form>

//       <div className="sort-controls">
//         <label htmlFor="sortOptions">Sort By:</label>
//         <select id="sortOptions" onChange={handleSortChange}>
//           <option value="name-asc">Name (A-Z)</option>
//           <option value="name-desc">Name (Z-A)</option>
//           <option value="email-asc">Email (A-Z)</option>
//           <option value="email-desc">Email (Z-A)</option>
//         </select>
//       </div>

//       {message && <p>{message}</p>}

//       {user ? (
//         <div className="user-details">
//           <h3>User Details</h3>
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Gender</th>
//                 <th>Password</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.gender}</td>
//                 <td>{user.password}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div>
//           <h2>All Users</h2>
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <div>
//               <table className="user-table">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Gender</th>
//                     <th>Password</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map(user => (
//                     <tr key={user._id}>
//                       <td>{user.name}</td>
//                       <td>{user.email}</td>
//                       <td>{user.phone}</td>
//                       <td>{user.gender}</td>
//                       <td>{user.password}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="pagination">
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                 >
//                   Previous
//                 </button>
//                 <span>Page {currentPage} of {totalPages}</span>
//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Table;




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Table = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [order, setOrder] = useState('asc');

  const fetchUsers = async (page, sortBy, order) => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:4004/user/alluser', {
        params: { page, limit: 5, sortBy, order }
      });
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (error) {
      console.error("Error fetching users:", error);
      setMessage('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:4004/user/search', {
        params: { email: searchTerm }
      });
      if (response.data.user) {
        setUser(response.data.user);
        setMessage('');
      } else {
        setUser(null);
        setMessage('User not found');
      }
    } catch (error) {
      console.error('Error searching user:', error);
      setMessage(error.response ? error.response.data.message : 'An error occurred');
      setUser(null);
    }
  };

  const handleSortChange = (e) => {
    const [sortBy, order] = e.target.value.split('-');
    setSortBy(sortBy);
    setOrder(order);
    fetchUsers(currentPage, sortBy, order);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchUsers(newPage, sortBy, order);
    }
  };

  const handleShowAllUsers = () => {
    setSearchTerm('');
    setUser(null);
    fetchUsers(currentPage, sortBy, order);
  };

  useEffect(() => {
    fetchUsers(currentPage, sortBy, order);
  }, [currentPage, sortBy, order]);

  return (
    <div className="user-list-container">
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
        {user && (
          <button type="button" onClick={handleShowAllUsers}>
            Back to All Users
          </button>
        )}
      </form>

      {message && <p>{message}</p>}

      {user ? (
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
      ) : (
        <div>
          <h2>All Users</h2>
          <div className="sort-controls">
            <label htmlFor="sortOptions">Sort By:</label>
            <select id="sortOptions" onChange={handleSortChange} value={`${sortBy}-${order}`}>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="email-asc">Email (A-Z)</option>
              <option value="email-desc">Email (Z-A)</option>
            </select>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
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
                  {users.map(user => (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.gender}</td>
                      <td>{user.password}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Table;
