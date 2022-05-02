import React, { useState, useEffect } from 'react'
import './globalStyles.css'
import Navbar from './components/navbar/navbar'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Latest from './pages/latest/latest'
import Projects from './pages/projects/projects'
import Stats from './pages/stats/stats'
import Writings from './pages/writings/writings'
import fetchArticles from './APIs/articles'
import fetchRepos from './APIs/repos'
import { fetchReputation, fetchTopTech } from './APIs/stats'

function App() {
  const [selected, setSelected] = useState('latest')
  const location = useLocation()
  const navigate = useNavigate()
  const [articles, setArticles] = useState()
  const [repos, setRepos] = useState()
  const [SO_reputation, setSO_reputation] = useState()
  const [SO_topTech, setSO_topTech] = useState()

  useEffect(() => {
    /**
     * Always coordinate the menu with the current location pathname
     */
    if (selected !== location.pathname) navigate(selected)

    fetchArticles({ setArticles })
    fetchRepos({ setRepos })
    fetchReputation({ setSO_reputation })
    fetchTopTech({ setSO_topTech })
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
          <Route path='/stats' element={<Stats SO_topTech={SO_topTech} SO_reputation={SO_reputation} />} />
        </Routes>
      </div>

    </div >
  )
}

export default App
