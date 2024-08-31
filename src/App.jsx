import React from 'react'
import './App.css'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'
import Register from './pages/Register'

import { Toaster } from 'react-hot-toast';
import AdminLaouts from './Layouts/AdminLaouts'
import UserLayout from './Layouts/UserLayout'
import PublicLayouts from './Layouts/PublicLayouts'

function App() {
  return (
    <div>
      <Routes>

        {/* nasted route */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* nasted route */}
        <Route path='/admin' element={<AdminLaouts />}>
          <Route index element={<Admin />} />
        </Route>

        <Route path='/'>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

        </Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App