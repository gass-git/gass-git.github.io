import React, { useState, useEffect } from 'react'
import './global/styles.css'
import Navbar from './global/components/navbar/navbar'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Stats from './pages/stats/stats'
import Writings from './pages/writings/writings'
import fetchArticles from './global/APIs/articles'
import fetchRepos from './global/APIs/repos'
import { fetchReputation, fetchTopTech } from './global/APIs/stats'
import { fetchLatest } from './global/APIs/latest'

function App() {
  const [selected, setSelected] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()
  const [articles, setArticles] = useState()
  const [repos, setRepos] = useState()
  const [SO_reputation, setSO_reputation] = useState()
  const [SO_topTech, setSO_topTech] = useState()
  const [latest, setLatest] = useState([])

  useEffect(() => {
    /**
     * Always coordinate the menu with the current location pathname
     */
    if (selected !== location.pathname) navigate(selected)

    fetchArticles({ setArticles })
    fetchRepos({ setRepos })
    fetchReputation({ setSO_reputation })
    fetchTopTech({ setSO_topTech })
    fetchLatest({ setLatest })
  }, [])

  return (
    <div className='app-container'>

      <div className='top'>
        <Navbar selected={selected} setSelected={setSelected} />
      </div>

      <section id='page'>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home latest={latest} />} />
          <Route path='/projects' element={<Projects repos={repos} />} />
          <Route path='/writings' element={<Writings articles={articles} />} />
          <Route path='/stats' element={<Stats SO_topTech={SO_topTech} SO_reputation={SO_reputation} />} />
        </Routes>
      </section>

    </div>
  )
}

export default App
