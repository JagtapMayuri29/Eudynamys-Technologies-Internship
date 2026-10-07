import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import User from './Pages/users';
import Dashboard from './Pages/Dashboard';
import Products from './Pages/products'
import Analytics from './Pages/analytics'
import Orders from './Pages/orders';
import Settings from './Pages/settings'

const App = () => {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/users" element={<User/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App