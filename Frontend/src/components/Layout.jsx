import React from 'react'
import { Link,Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <div className='navbar-main'>
       <li><Link to="/home">Home</Link></li> 
        <li><Link to="singup">Singup</Link></li>
        <li><Link to="login">Login</Link></li>
        <li><Link to="admin">Admin</Link></li>
      </div>


      <Outlet />
    </div>
  )
}

export default Layout
