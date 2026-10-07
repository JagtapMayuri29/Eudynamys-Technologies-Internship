import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import EditProfile from './Pages/edit_profile';
import ChangePass from './Pages/change_pass';
import Success from './Pages/success';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/edit" element={<EditProfile/>}/>
      <Route path="/changepass" element={<ChangePass/>}/>
      <Route path="/success" element={<Success/>}/>    
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App