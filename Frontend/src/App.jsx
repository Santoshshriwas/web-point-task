import React from 'react'
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Layout from './components/Layout';
import Singup from './components/Singup';
import Login from './components/Login';
import UserPanel from './components/UserPanel';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import AdminLogin from './components/Admin';
import AdminPanel from './components/Adminpanel.jsx';
import UserSearch from './components/UserSearch.jsx';
import Table from './components/Table.jsx';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='singup' element={<Singup/>} />
        <Route path='login' element={<Login/>} />
        <Route path='admin' element={<AdminLogin/>}/>
      </Route>
      <Route path='adpanel' element={<AdminPanel/>}>
          <Route path="table" element={<Table/>}/>
          <Route path="search" element={< UserSearch/>}/>
          {/* <Route path="table" element={< UserTable/>}/> */}

        </Route>
      <Route path='userpanel' element={<UserPanel/>}>
      <Route path='profile/:id' element={<Profile/>} />
      <Route path='updateProfile' element={<UpdateProfile/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
