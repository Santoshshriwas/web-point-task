import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const AdminPanel = () => {
  const navigate = useNavigate()
  const logout = (req,res)=>{
    navigate("/")
  }
  return (
   <>
    <div>
      <div className='navbar-main'>
       <li><Link to="/home">Home</Link></li> 
        <li><Link to="table">User-Table</Link></li>
        <li><Link to="search">Search</Link></li>
        <li><button onClick={logout}>Logout</button></li>
      </div>
      <Outlet />
    </div>
   </>
  )
}

export default AdminPanel
