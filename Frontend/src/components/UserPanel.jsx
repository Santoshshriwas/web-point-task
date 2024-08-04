import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const UserPanel = () => {
  const navigate = useNavigate()
  const logout = (req,res)=>{
    navigate("/")
    localStorage.removeIteme("user")
  }
  return (
   <>
    <div>
      <div className='navbar-main'>
       <li><Link to="/home">Home</Link></li> 
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="updateProfile">UpdateProfile</Link></li>
        <li><button onClick={logout}>Logout</button></li>
      </div>
      <Outlet />
    </div>
   </>
  )
}

export default UserPanel
