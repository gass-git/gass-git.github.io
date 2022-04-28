import React, { useState } from 'react'
import './globalStyles.css'
import Navbar from './components/navbar/navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Latest from './pages/latest'
import Projects from './pages/projects'
import Stats from './pages/stats'
import Writings from './pages/writings'

function App() {
  const [selected, setSelected] = useState('latest')

  return (
    <div className='app-container'>
      {/* Header */}
      <Navbar selected={selected} setSelected={setSelected} />

      {/* Content */}
      <div className='content-box'>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/' element={<Latest />} />
          <Route path='/latest' element={<Latest />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/writings' element={<Writings />} />
          <Route path='/stats' element={<Stats />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
