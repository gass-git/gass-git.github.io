import React, { useState, useEffect } from 'react'
import './globalStyles.css'
import Navbar from './components/navbar/navbar'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Latest from './pages/latest'
import Projects from './pages/projects/projects'
import Stats from './pages/stats'
import Writings from './pages/writings/writings'
import fetchArticles from './APIs/articles'
import fetchRepos from './APIs/repos'

function App() {
  const [selected, setSelected] = useState('latest')
  const location = useLocation()
  const navigate = useNavigate()
  const [articles, setArticles] = useState()
  const [repos, setRepos] = useState()

  useEffect(() => {
    /**
     * Always coordinate the menu with the current location pathname
     */
    if (selected !== location.pathname) navigate(selected)

    fetchArticles({ setArticles })
    fetchRepos({ setRepos })
  }, [])

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
          <Route path='/projects' element={<Projects repos={repos} />} />
          <Route path='/writings' element={<Writings articles={articles} />} />
          <Route path='/stats' element={<Stats />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
