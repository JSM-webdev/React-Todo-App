import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-dom'
import Navbar from './components/navigation/Navbar'
import Dashboard from './components/dashboard/Account'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Account from './components/'
import CreatePost from './components/'
import PostDetail from './components/'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <main className="App">
      <Navbar  />
      <div className="content">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/post/:id' element={<PostDetail />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </main>
    </BrowserRouter>
  )
}

export default App
