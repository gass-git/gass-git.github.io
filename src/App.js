import React, { useState, useEffect, useReducer, createContext } from 'react'
import './global/styles.css'
import Navbar from './global/components/navbar/navbar'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Stats from './pages/stats/stats'
import Writings from './pages/writings/writings'
import { fetchArticles, getLatestArticle } from './global/APIs/dev'
import { fetchGithubStats, fetchRepos, getLatestCommit } from './global/APIs/github'
import { fetchReputation, fetchTopTech } from './global/APIs/SO'
import { fetchLatest } from './global/APIs/latest'
import Footer from './global/components/footer/footer'
import Display from './global/components/display/display'
import { uniqueVisits, getVisitorLocation } from './global/APIs/visits'
import { getLatestAnswer } from './global/APIs/SO'
import { appReducer, initialState } from './stateCapsule'

export const AppContext = createContext(null)

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { selected } = state

  const location = useLocation()
  const navigate = useNavigate()
  const [articles, setArticles] = useState()
  const [repos, setRepos] = useState()
  const [SO_reputation, setSO_reputation] = useState()
  const [SO_topTech, setSO_topTech] = useState()
  const [scrollOn, setScrollOn] = useState(true)
  const [msgIndex, setMsgIndex] = useState(0)
  const [visitsCount, setVisitsCount] = useState()
  const [visitorLocation, setVisitorLocation] = useState()
  const [latestAnswer, setLatestAnswer] = useState()
  const [latestArticle, setLatestArticle] = useState()
  const [latestCommit, setLatestCommit] = useState({ comment: null, repo: null })
  const [scrollMessages, setScrollMessages] = useState()
  const [githubStats, setGithubStats] = useState()

  useEffect(() => {
    // always coordinate the menu with the current location pathname
    if (selected !== location.pathname) navigate(selected)

    fetchLatest({ dispatch })
    fetchGithubStats({ setGithubStats })
    fetchArticles({ setArticles })
    fetchRepos({ setRepos })
    fetchReputation({ setSO_reputation })
    fetchTopTech({ setSO_topTech })
    uniqueVisits({ setVisitsCount })
    getVisitorLocation({ setVisitorLocation })
    getLatestAnswer({ setLatestAnswer })
    getLatestArticle({ setLatestArticle })
    getLatestCommit({ setLatestCommit })
  }, [])

  // interval for scroll display
  useEffect(() => {
    let interval = setInterval(() => {
      if (msgIndex < scrollMessages - 1) setMsgIndex(msgIndex + 1)
      else setMsgIndex(0)

      // reset scroll
      setScrollOn(false)
      setTimeout(() => {
        setScrollOn(true)
      }, 500)

    }, 20000)
    return () => clearInterval(interval)
  })

  return (
    <AppContext.Provider value={{ state, dispatch }} key={'ctx-key'}>
      <div className='app-container'>

        <section id='top'>
          <Display
            scrollOn={scrollOn}
            msgIndex={msgIndex}
            setScrollMessages={setScrollMessages}
            visitsCount={visitsCount}
            visitorLocation={visitorLocation}
            latestAnswer={latestAnswer}
            latestArticle={latestArticle}
            latestCommit={latestCommit}
          />
          <Navbar />
        </section>

        <section id='content'>
          <Routes>
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Projects repos={repos} />} />
            <Route path='/writings' element={<Writings articles={articles} />} />
            <Route path='/stats' element={<Stats SO_topTech={SO_topTech} SO_reputation={SO_reputation} articles={articles} githubStats={githubStats} />} />
          </Routes>
        </section>

        <section id='bottom'>
          <Footer />
        </section>

      </div>
    </AppContext.Provider>
  )
}

export default App
